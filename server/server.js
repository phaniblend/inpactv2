import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
import session from 'express-session';
import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import { 
  generateLearningObjectives, 
  decomposeTask,
  generateTutorialSteps,
  validateUserCode,
  generateHint,
  askMentor
} from './openai-service.js';
import { getFromCache, saveToCache, getCacheStats } from './cache-service.js';
import { trackNextTime, getNextTimeCount, generateFingerprint } from './tracking-service.js';
import { getUserData, saveUserData, addChallenge, completeTask, saveUserCode, getDashboardData } from './user-service.js';

const execAsync = promisify(exec);

const app = express();
const PORT = process.env.PORT || 3001;

// Code execution function
async function executeCode(code, language) {
  const lang = language.toLowerCase();
  const tempDir = path.join(__dirname, '../temp');
  
  try {
    // Ensure temp directory exists
    await fs.mkdir(tempDir, { recursive: true });
    
    if (lang.includes('javascript') || lang === 'js' || lang.includes('node')) {
      // JavaScript/Node.js execution
      const tempFile = path.join(tempDir, `code_${Date.now()}.js`);
      await fs.writeFile(tempFile, code, 'utf8');
      
      try {
        const { stdout, stderr } = await execAsync(`node "${tempFile}"`, {
          timeout: 10000, // 10 second timeout
          maxBuffer: 1024 * 1024 // 1MB buffer
        });
        
        // Clean up
        await fs.unlink(tempFile).catch(() => {});
        
        // If there's stderr but also stdout, combine them
        // If only stderr, treat it as an error
        if (stderr && !stdout) {
          return {
            output: '',
            error: stderr
          };
        }
        
        return {
          output: stdout || 'Code executed successfully (no output)',
          error: null
        };
      } catch (execError) {
        await fs.unlink(tempFile).catch(() => {});
        // Extract error message from stderr or use the error message
        const errorMsg = execError.stderr || execError.stdout || execError.message || 'Execution error';
        return {
          output: '',
          error: errorMsg.toString().trim()
        };
      }
    } else if (lang.includes('python')) {
      // Python execution
      const tempFile = path.join(tempDir, `code_${Date.now()}.py`);
      await fs.writeFile(tempFile, code, 'utf8');
      
      try {
        const { stdout, stderr } = await execAsync(`python "${tempFile}"`, {
          timeout: 10000,
          maxBuffer: 1024 * 1024
        });
        
        await fs.unlink(tempFile).catch(() => {});
        
        return {
          output: stdout || stderr || 'Code executed successfully',
          error: stderr ? null : null
        };
      } catch (execError) {
        await fs.unlink(tempFile).catch(() => {});
        return {
          output: '',
          error: execError.stderr || execError.message || 'Execution error'
        };
      }
    } else if (lang.includes('react')) {
      // For React, we'll create a simple HTML file that loads the React code
      // This is a simplified approach - in production, you'd use a proper bundler
      const tempFile = path.join(tempDir, `react_${Date.now()}.html`);
      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        ${code}
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(React.createElement(App));
    </script>
</body>
</html>`;
      
      await fs.writeFile(tempFile, htmlContent, 'utf8');
      
      return {
        output: `React app created. In a full implementation, this would be served and rendered.\n\nYour React code:\n${code}`,
        error: null
      };
    } else if (lang.includes('typescript') || lang === 'ts') {
      // TypeScript - compile and run
      const tempFile = path.join(tempDir, `code_${Date.now()}.ts`);
      await fs.writeFile(tempFile, code, 'utf8');
      
      try {
        // Try to compile and run with ts-node if available, otherwise just show the code
        const { stdout, stderr } = await execAsync(`npx ts-node "${tempFile}"`, {
          timeout: 10000,
          maxBuffer: 1024 * 1024
        }).catch(async (error) => {
          // If ts-node not available, try compiling first
          try {
            await execAsync(`npx tsc "${tempFile}"`, { timeout: 5000 });
            const jsFile = tempFile.replace('.ts', '.js');
            const result = await execAsync(`node "${jsFile}"`, { timeout: 10000 });
            await fs.unlink(jsFile).catch(() => {});
            return result;
          } catch {
            throw error;
          }
        });
        
        await fs.unlink(tempFile).catch(() => {});
        
        return {
          output: stdout || stderr || 'TypeScript code executed successfully',
          error: stderr ? null : null
        };
      } catch (execError) {
        await fs.unlink(tempFile).catch(() => {});
        return {
          output: '',
          error: execError.stderr || execError.message || 'TypeScript execution error. Make sure TypeScript is installed.'
        };
      }
    } else {
      return {
        output: '',
        error: `Language "${language}" is not yet supported for code execution.`
      };
    }
  } catch (error) {
    return {
      output: '',
      error: error.message || 'Failed to execute code'
    };
  }
}

// Session configuration
const isProduction = process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT === 'production';
app.use(session({
  secret: process.env.SESSION_SECRET || 'inpact-session-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  name: 'inpact.sid', // Custom session name
  cookie: {
    secure: isProduction && process.env.RAILWAY === 'true', // HTTPS only in production on Railway
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: 'lax',
    path: '/' // Ensure cookie is available for all paths
  }
}));

// CORS configuration - allow Railway domain
const allowedOrigins = [
  'https://inpactv2-production.up.railway.app',
  'http://localhost:3001'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1 || !isProduction) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Generate Learning Objectives
app.post('/api/generate-objectives', async (req, res) => {
  try {
    const { task, technology } = req.body;
    if (!task || !technology) {
      return res.status(400).json({ error: 'Both task and technology are required' });
    }
    console.log(`Generating objectives for: "${task}" in ${technology}`);
    
    // Check cache first
    try {
      const cached = await getFromCache('objectives', task, technology);
      if (cached && cached.data) {
        console.log('✓ Serving from cache');
        return res.json({ success: true, objectives: cached.data, task, technology, _cached: true });
      }
    } catch (cacheError) {
      console.warn('Cache check failed, proceeding with AI generation:', cacheError.message);
      // Continue with AI generation if cache fails
    }
    
    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Server configuration error', 
        message: 'ANTHROPIC_API_KEY environment variable is not set. Please configure your .env file.' 
      });
    }
    
    // Generate from AI
    const objectives = await generateLearningObjectives(task, technology);
    
    // Save to cache
    await saveToCache('objectives', objectives, task, technology);
    
    res.json({ success: true, objectives, task, technology, _cached: false });
  } catch (error) {
    console.error('Error generating objectives:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      error: 'Failed to generate learning objectives', 
      message: error.message || 'Unknown error occurred',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Decompose Task
app.post('/api/decompose-task', async (req, res) => {
  try {
    const { task, technology, breakdown } = req.body;
    if (!task || !technology) {
      return res.status(400).json({ error: 'Both task and technology are required' });
    }
    console.log(`Decomposing task: "${task}" in ${technology}`);
    
    // Check cache first
    const cached = await getFromCache('decompose', task, technology, breakdown || 'sequential');
    if (cached && cached.data) {
      console.log('✓ Serving from cache');
      return res.json({ success: true, tasks: cached.data, breakdown, _cached: true });
    }
    
    // Generate from AI
    const tasks = await decomposeTask(task, technology, breakdown);
    
    // Save to cache
    await saveToCache('decompose', tasks, task, technology, breakdown || 'sequential');
    
    res.json({ success: true, tasks, breakdown, _cached: false });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to decompose task', message: error.message });
  }
});

// Generate Tutorial
app.post('/api/generate-tutorial', async (req, res) => {
  try {
    const { atomicTask, projectContext } = req.body;
    if (!atomicTask || !projectContext) {
      return res.status(400).json({ error: 'atomicTask and projectContext are required' });
    }
    console.log(`Generating tutorial for: "${atomicTask}"`);
    
    // Check cache first - cache by atomicTask + project context
    const cached = await getFromCache('tutorial', atomicTask, projectContext.task, projectContext.technology);
    if (cached && cached.data) {
      console.log('✓ Serving from cache');
      return res.json({ success: true, tutorial: cached.data, _cached: true });
    }
    
    // Generate from AI
    const tutorial = await generateTutorialSteps(atomicTask, projectContext);
    
    // Save to cache
    await saveToCache('tutorial', tutorial, atomicTask, projectContext.task, projectContext.technology);
    
    res.json({ success: true, tutorial, _cached: false });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate tutorial', message: error.message });
  }
});

// Validate Code
app.post('/api/validate-code', async (req, res) => {
  try {
    const { userCode, tutorial, atomicTask } = req.body;
    if (!userCode) {
      return res.status(400).json({ error: 'userCode is required' });
    }
    console.log(`Validating code for: "${atomicTask}"`);
    const validation = await validateUserCode(userCode, tutorial, atomicTask);
    res.json({ success: true, validation });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to validate code', message: error.message });
  }
});

// Generate Hint
app.post('/api/generate-hint', async (req, res) => {
  try {
    const { userCode, tutorial, hintNumber, previousHints } = req.body;
    if (!hintNumber) {
      return res.status(400).json({ error: 'hintNumber is required' });
    }
    console.log(`Generating hint ${hintNumber}`);
    const hint = await generateHint(userCode, tutorial, hintNumber, previousHints || []);
    res.json({ success: true, hint });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate hint', message: error.message });
  }
});

// Ask Mentor
app.post('/api/ask-mentor', async (req, res) => {
  try {
    const { question, screen, tutorial, atomicTask } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    console.log(`Mentor question: "${question.substring(0, 50)}..."`);
    const answer = await askMentor(question, screen, tutorial, atomicTask);
    res.json({ success: true, answer });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get mentor response', message: error.message });
  }
});

// Run Code
app.post('/api/run-code', async (req, res) => {
  try {
    const { code, language } = req.body;
    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }
    
    console.log(`Running ${language || 'JavaScript'} code...`);
    
    const result = await executeCode(code, language || 'JavaScript');
    
    // Always return JSON, even if there's an error
    if (result.error) {
      return res.json({ 
        success: false, 
        output: result.output || '', 
        error: result.error 
      });
    }
    
    res.json({ 
      success: true, 
      output: result.output || 'Code executed successfully (no output)', 
      error: null 
    });
  } catch (error) {
    console.error('Error executing code:', error);
    console.error('Error stack:', error.stack);
    res.status(500).json({ 
      success: false,
      error: 'Failed to execute code', 
      message: error.message,
      output: ''
    });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Cache Statistics (optional endpoint for monitoring)
app.get('/api/cache-stats', async (req, res) => {
  try {
    const stats = await getCacheStats();
    res.json({ success: true, stats });
  } catch (error) {
    console.error('Error getting cache stats:', error);
    res.status(500).json({ error: 'Failed to get cache stats', message: error.message });
  }
});

// Track "Next Time" click
app.post('/api/track-next-time', async (req, res) => {
  try {
    const { fingerprint } = req.body;
    if (!fingerprint) {
      return res.status(400).json({ error: 'Fingerprint is required' });
    }
    
    const result = await trackNextTime(fingerprint);
    res.json({ success: true, ...result });
  } catch (error) {
    console.error('Error tracking next time:', error);
    res.status(500).json({ error: 'Failed to track next time', message: error.message });
  }
});

// Generate fingerprint from browser data
app.post('/api/generate-fingerprint', async (req, res) => {
  try {
    const { userAgent, acceptLanguage, screenResolution, timezone, language, platform, hardwareConcurrency, deviceMemory, canvasFingerprint } = req.body;
    const fingerprint = generateFingerprint(userAgent, acceptLanguage, screenResolution, timezone, language, platform, hardwareConcurrency, deviceMemory, canvasFingerprint);
    res.json({ success: true, fingerprint });
  } catch (error) {
    console.error('Error generating fingerprint:', error);
    res.status(500).json({ error: 'Failed to generate fingerprint', message: error.message });
  }
});

// Get "Next Time" count
app.post('/api/get-next-time-count', async (req, res) => {
  try {
    const { fingerprint } = req.body;
    if (!fingerprint) {
      return res.status(400).json({ error: 'Fingerprint is required' });
    }
    
    const count = await getNextTimeCount(fingerprint);
    const shouldShowMessage = count >= 3;
    res.json({ success: true, count, shouldShowMessage });
  } catch (error) {
    console.error('Error getting next time count:', error);
    res.status(500).json({ error: 'Failed to get next time count', message: error.message });
  }
});

// ============================================================================
// GOOGLE OAUTH ROUTES
// ============================================================================

// Initiate Google OAuth flow
app.get('/api/auth/google', (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3001/api/auth/google/callback';
  const scope = 'openid email profile';
  const responseType = 'code';
  
  if (!clientId) {
    console.error('GOOGLE_CLIENT_ID is not set in environment variables');
    console.error('Available env vars:', Object.keys(process.env).filter(k => k.includes('GOOGLE')));
    return res.status(500).json({ 
      error: 'Google OAuth not configured',
      message: 'GOOGLE_CLIENT_ID environment variable is not set. Please check your .env file and restart the server.'
    });
  }
  
  // Store the original URL they were trying to access (if any)
  if (req.query.redirect) {
    req.session.returnTo = req.query.redirect;
  }
  
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${encodeURIComponent(clientId)}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `response_type=${responseType}&` +
    `scope=${encodeURIComponent(scope)}&` +
    `access_type=online&` +
    `prompt=consent`;
  
  res.redirect(authUrl);
});

// Google OAuth callback
app.get('/api/auth/google/callback', async (req, res) => {
  try {
    const { code, error } = req.query;
    
    if (error) {
      console.error('Google OAuth error:', error);
      return res.redirect('/?auth_error=' + encodeURIComponent(error));
    }
    
    if (!code) {
      return res.redirect('/?auth_error=no_code');
    }
    
    // Exchange authorization code for access token
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3001/api/auth/google/callback';
    
    if (!clientId || !clientSecret) {
      console.error('Google OAuth credentials not configured');
      return res.redirect('/?auth_error=not_configured');
    }
    
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });
    
    const tokenData = await tokenResponse.json();
    
    if (!tokenResponse.ok) {
      console.error('Token exchange error:', tokenData);
      return res.redirect('/?auth_error=token_exchange_failed');
    }
    
    // Get user info from Google
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });
    
    const userInfo = await userInfoResponse.json();
    
    if (!userInfoResponse.ok) {
      console.error('User info error:', userInfo);
      return res.redirect('/?auth_error=user_info_failed');
    }
    
    // Store user in session
    req.session.user = {
      id: userInfo.id,
      email: userInfo.email,
      name: userInfo.name,
      picture: userInfo.picture,
      verified: userInfo.verified_email || false
    };
    
    req.session.authenticated = true;
    
    console.log('User authenticated:', userInfo.email);
    console.log('Session user:', req.session.user);
    
    // Save session explicitly before redirect
    req.session.save((err) => {
      if (err) {
        console.error('Error saving session:', err);
      }
      
      // Redirect to original destination or home
      const returnTo = req.session.returnTo || '/';
      delete req.session.returnTo;
      res.redirect(returnTo);
    });
    
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.redirect('/?auth_error=server_error');
  }
});

// Check authentication status
app.get('/api/auth/status', (req, res) => {
  const isAuthenticated = !!req.session.authenticated;
  const user = req.session.user || null;
  
  console.log('Auth status check:', {
    authenticated: isAuthenticated,
    hasUser: !!user,
    userId: user?.id,
    userEmail: user?.email,
    sessionId: req.sessionID
  });
  
  res.json({
    authenticated: isAuthenticated,
    user: user
  });
});

// Logout
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).json({ error: 'Failed to logout' });
    }
    res.json({ success: true });
  });
});

// ============================================================================
// USER DATA & DASHBOARD ROUTES
// ============================================================================

// Middleware to check authentication
function requireAuth(req, res, next) {
  if (!req.session.authenticated || !req.session.user) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
}

// Get user dashboard data
app.get('/api/dashboard', requireAuth, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const dashboardData = await getDashboardData(userId);
    
    if (!dashboardData) {
      return res.status(500).json({ error: 'Failed to load dashboard data' });
    }
    
    res.json({ success: true, ...dashboardData });
  } catch (error) {
    console.error('Error getting dashboard data:', error);
    res.status(500).json({ error: 'Failed to get dashboard data', message: error.message });
  }
});

// Add or update challenge
app.post('/api/user/challenge', requireAuth, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { task, technology, tasks } = req.body;
    
    if (!task || !technology) {
      return res.status(400).json({ error: 'Task and technology are required' });
    }
    
    const challenge = await addChallenge(userId, { task, technology, tasks });
    res.json({ success: true, challenge });
  } catch (error) {
    console.error('Error adding challenge:', error);
    res.status(500).json({ error: 'Failed to add challenge', message: error.message });
  }
});

// Mark task as completed
app.post('/api/user/complete-task', requireAuth, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { task, challengeTask } = req.body;
    
    if (!task || !challengeTask) {
      return res.status(400).json({ error: 'Task and challengeTask are required' });
    }
    
    const userData = await completeTask(userId, task, challengeTask);
    res.json({ success: true, userData });
  } catch (error) {
    console.error('Error completing task:', error);
    res.status(500).json({ error: 'Failed to complete task', message: error.message });
  }
});

// Save user code
app.post('/api/user/save-code', requireAuth, async (req, res) => {
  try {
    const userId = req.session.user.id;
    const { task, taskText, code } = req.body;
    
    if (!task || !taskText || !code) {
      return res.status(400).json({ error: 'Task, taskText, and code are required' });
    }
    
    const userData = await saveUserCode(userId, task, taskText, code);
    res.json({ success: true, userData });
  } catch (error) {
    console.error('Error saving code:', error);
    res.status(500).json({ error: 'Failed to save code', message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('⚠️  WARNING: ANTHROPIC_API_KEY not found!');
    console.error('⚠️  Please create a .env file in the root directory with:');
    console.error('⚠️  ANTHROPIC_API_KEY=your_api_key_here');
  } else {
    console.log('✓ Anthropic API key loaded');
  }
  
  // Check Google OAuth configuration
  if (!process.env.GOOGLE_CLIENT_ID) {
    console.warn('⚠️  WARNING: GOOGLE_CLIENT_ID not found!');
    console.warn('⚠️  Google OAuth will not work. Add GOOGLE_CLIENT_ID to your .env file.');
  } else {
    console.log('✓ Google OAuth Client ID loaded');
  }
  
  if (!process.env.GOOGLE_CLIENT_SECRET) {
    console.warn('⚠️  WARNING: GOOGLE_CLIENT_SECRET not found!');
    console.warn('⚠️  Google OAuth will not work. Add GOOGLE_CLIENT_SECRET to your .env file.');
  } else {
    console.log('✓ Google OAuth Client Secret loaded');
  }
  
  if (!process.env.SESSION_SECRET) {
    console.warn('⚠️  WARNING: SESSION_SECRET not found!');
    console.warn('⚠️  Using default session secret (not secure for production).');
  } else {
    console.log('✓ Session secret loaded');
  }
});
