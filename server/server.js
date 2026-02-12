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
import { trackNextTime, getNextTimeCount, generateFingerprint, createAttempt, getOrCreateAttempt, getAttempt, closeAttempt, savePrediction, saveReflection, saveRubric, saveTransfer, getLearningArtifacts, recordHintUsage, saveCheckResponse, recordErrorClassification } from './tracking-service.js';
import { getUserData, saveUserData, addChallenge, completeTask, saveUserCode, getDashboardData, getLearningProfile, updateLearningProfile, getLearningRecommendations, getScaffoldLevel, updateMasteryAfterAttempt } from './user-service.js';
import { getChallengeMetadata } from './question-bank.js';

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
    const { userCode, tutorial, hintNumber, previousHints, hintLevel, hintType } = req.body;
    if (!hintNumber && !hintLevel) {
      return res.status(400).json({ error: 'hintNumber or hintLevel is required' });
    }
    const level = hintLevel || hintNumber;
    console.log(`Generating hint level ${level} (type: ${hintType || 'auto'})`);
    const hint = await generateHint(userCode, tutorial, hintNumber || level, previousHints || [], level, hintType);
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

// Helper function to get redirect URI based on request
function getRedirectUri(req) {
  // If explicitly set in env, use it
  if (process.env.GOOGLE_REDIRECT_URI) {
    return process.env.GOOGLE_REDIRECT_URI;
  }
  
  // Otherwise, dynamically determine from request
  const protocol = req.get('x-forwarded-proto') || (req.secure ? 'https' : 'http');
  const host = req.get('host') || req.get('x-forwarded-host') || 'localhost:3001';
  return `${protocol}://${host}/api/auth/google/callback`;
}

// Initiate Google OAuth flow
app.get('/api/auth/google', (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = getRedirectUri(req);
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
  // Extract only the pathname to prevent cross-domain redirects
  if (req.query.redirect) {
    try {
      // Parse the URL - if it's a full URL, extract pathname; if relative, use as-is
      let redirectPath = req.query.redirect;
      
      // If it's a full URL (starts with http:// or https://)
      if (redirectPath.startsWith('http://') || redirectPath.startsWith('https://')) {
        const url = new URL(redirectPath);
        redirectPath = url.pathname + url.search;
      }
      
      // Ensure it starts with / (relative path)
      if (!redirectPath.startsWith('/')) {
        redirectPath = '/' + redirectPath;
      }
      
      req.session.returnTo = redirectPath;
    } catch (error) {
      // If parsing fails, default to home
      req.session.returnTo = '/';
    }
  }
  
  // Store redirect URI in session for callback verification
  req.session.oauthRedirectUri = redirectUri;
  
  console.log('OAuth redirect URI:', redirectUri);
  console.log('Return to:', req.session.returnTo);
  
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
    // Use the redirect URI from session (set during auth initiation) or determine dynamically
    const redirectUri = req.session.oauthRedirectUri || getRedirectUri(req);
    
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
      // Always use relative path to ensure we stay on the same domain
      let returnTo = req.session.returnTo || '/';
      
      // Final safety check: ensure it's a relative path
      if (!returnTo.startsWith('/')) {
        returnTo = '/' + returnTo;
      }
      
      console.log('Redirecting to:', returnTo, '(relative path on current domain)');
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

// ============================================================================
// LEARNING SYSTEM ENDPOINTS (Thinking-First Learning System)
// ============================================================================

// Get challenge metadata with pedagogy
app.get('/api/challenge-metadata/:challengeId', async (req, res) => {
  try {
    const { challengeId } = req.params;
    const metadata = getChallengeMetadata(challengeId);
    res.json({ success: true, metadata });
  } catch (error) {
    console.error('Error getting challenge metadata:', error);
    res.status(500).json({ error: 'Failed to get challenge metadata', message: error.message });
  }
});

// Create or get attempt
app.post('/api/create-attempt', async (req, res) => {
  try {
    const { userId, challengeId } = req.body;
    if (!userId || !challengeId) {
      return res.status(400).json({ error: 'userId and challengeId are required' });
    }
    
    const attemptId = await getOrCreateAttempt(userId, challengeId);
    res.json({ success: true, attemptId });
  } catch (error) {
    console.error('Error creating attempt:', error);
    res.status(500).json({ error: 'Failed to create attempt', message: error.message });
  }
});

// Close attempt
app.post('/api/close-attempt', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, status } = req.body;
    if (!userId || !challengeId || !attemptId || !status) {
      return res.status(400).json({ error: 'userId, challengeId, attemptId, and status are required' });
    }
    
    const result = await closeAttempt(userId, challengeId, attemptId, status);
    
    // Update mastery after completion
    if (status === "completed") {
      await updateMasteryAfterAttempt(userId, challengeId, attemptId);
    }
    
    res.json(result);
  } catch (error) {
    console.error('Error closing attempt:', error);
    res.status(500).json({ error: 'Failed to close attempt', message: error.message });
  }
});

// Save prediction
app.post('/api/save-prediction', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, prompt, response } = req.body;
    if (!userId || !challengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, and attemptId are required' });
    }
    
    const result = await savePrediction(userId, challengeId, attemptId, {
      prompt: prompt || 'What approach do you think will work?',
      response
    });
    
    res.json(result);
  } catch (error) {
    console.error('Error saving prediction:', error);
    res.status(500).json({ error: 'Failed to save prediction', message: error.message });
  }
});

// Save reflection
app.post('/api/save-reflection', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, responses } = req.body;
    if (!userId || !challengeId || !attemptId || !responses) {
      return res.status(400).json({ error: 'userId, challengeId, attemptId, and responses are required' });
    }
    
    const result = await saveReflection(userId, challengeId, attemptId, {
      responses: Array.isArray(responses) ? responses : [responses]
    });
    
    res.json(result);
  } catch (error) {
    console.error('Error saving reflection:', error);
    res.status(500).json({ error: 'Failed to save reflection', message: error.message });
  }
});

// Save rubric
app.post('/api/save-rubric', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, rubric } = req.body;
    if (!userId || !challengeId || !attemptId || !rubric) {
      return res.status(400).json({ error: 'userId, challengeId, attemptId, and rubric are required' });
    }
    
    const result = await saveRubric(userId, challengeId, attemptId, rubric);
    res.json(result);
  } catch (error) {
    console.error('Error saving rubric:', error);
    res.status(500).json({ error: 'Failed to save rubric', message: error.message });
  }
});

// Save transfer
app.post('/api/save-transfer', async (req, res) => {
  try {
    const { userId, challengeId, transferChallengeId, attemptId, completed, transferType } = req.body;
    if (!userId || !challengeId || !transferChallengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, transferChallengeId, and attemptId are required' });
    }
    
    const result = await saveTransfer(userId, challengeId, transferChallengeId, attemptId, completed || false, transferType || "near");
    res.json(result);
  } catch (error) {
    console.error('Error saving transfer:', error);
    res.status(500).json({ error: 'Failed to save transfer', message: error.message });
  }
});

// Get learning analytics
app.get('/api/learning-analytics', async (req, res) => {
  try {
    const userId = req.query.userId || req.session?.userId;
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }
    
    const profile = await getLearningProfile(userId);
    res.json(profile);
  } catch (error) {
    console.error('Error getting learning analytics:', error);
    res.status(500).json({ error: 'Failed to get learning analytics', message: error.message });
  }
});

// Get learning recommendations
app.get('/api/learning-recommendations', async (req, res) => {
  try {
    const userId = req.query.userId || req.session?.userId;
    if (!userId) {
      return res.status(400).json({ error: 'userId is required' });
    }
    
    const recommendations = await getLearningRecommendations(userId);
    res.json({ success: true, recommendations });
  } catch (error) {
    console.error('Error getting learning recommendations:', error);
    res.status(500).json({ error: 'Failed to get learning recommendations', message: error.message });
  }
});

// Get scaffold level
app.get('/api/scaffold-level', async (req, res) => {
  try {
    const userId = req.query.userId || req.session?.userId;
    const challengeId = req.query.challengeId;
    
    if (!userId || !challengeId) {
      return res.status(400).json({ error: 'userId and challengeId are required' });
    }
    
    const scaffold = await getScaffoldLevel(userId, challengeId);
    res.json({ success: true, ...scaffold });
  } catch (error) {
    console.error('Error getting scaffold level:', error);
    res.status(500).json({ error: 'Failed to get scaffold level', message: error.message });
  }
});

// Record hint usage
app.post('/api/record-hint', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, hintLevel, hintType, hintContent } = req.body;
    if (!userId || !challengeId || !attemptId || !hintLevel) {
      return res.status(400).json({ error: 'userId, challengeId, attemptId, and hintLevel are required' });
    }
    
    const result = await recordHintUsage(userId, challengeId, attemptId, hintLevel, hintType || "concept", hintContent || "");
    res.json(result);
  } catch (error) {
    console.error('Error recording hint:', error);
    res.status(500).json({ error: 'Failed to record hint', message: error.message });
  }
});

// Save check-for-understanding response
app.post('/api/save-check-response', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, stepId, response, correct, misconceptionDetected } = req.body;
    if (!userId || !challengeId || !attemptId || !stepId || response === undefined) {
      return res.status(400).json({ error: 'userId, challengeId, attemptId, stepId, and response are required' });
    }
    
    const result = await saveCheckResponse(userId, challengeId, attemptId, stepId, response, correct || false, misconceptionDetected || null);
    res.json(result);
  } catch (error) {
    console.error('Error saving check response:', error);
    res.status(500).json({ error: 'Failed to save check response', message: error.message });
  }
});

// Classify error
app.post('/api/classify-error', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, code, expectedOutput, actualOutput, errorMessage } = req.body;
    if (!userId || !challengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, and attemptId are required' });
    }
    
    // Simple error classification (can be enhanced with AI later)
    let errorType = "unknown";
    let nextHintLevel = 2;
    let message = "Let's review your approach step by step.";
    
    // Check for syntax errors
    if (errorMessage && (
      errorMessage.includes('SyntaxError') ||
      errorMessage.includes('Unexpected token') ||
      errorMessage.includes('Missing') ||
      errorMessage.includes('Expected')
    )) {
      errorType = "syntax";
      nextHintLevel = 2;
      message = "There's a syntax error in your code. Check for missing brackets, semicolons, or typos.";
    }
    // Check for logic errors (wrong output)
    else if (actualOutput !== expectedOutput && actualOutput !== undefined) {
      errorType = "logic";
      nextHintLevel = 2;
      message = "Your approach is on the right track, but there's a logical issue. Think about the algorithm steps.";
    }
    // Check for runtime errors
    else if (errorMessage && (
      errorMessage.includes('TypeError') ||
      errorMessage.includes('ReferenceError') ||
      errorMessage.includes('Cannot read property')
    )) {
      errorType = "invariant";
      nextHintLevel = 3;
      message = "The data structure isn't maintaining the correct invariant. Review how you're storing and retrieving values.";
    }
    
    // Record error classification
    await recordErrorClassification(userId, challengeId, attemptId, errorType, errorMessage || "No error message", nextHintLevel);
    
    res.json({
      success: true,
      errorType,
      nextHintLevel,
      message
    });
  } catch (error) {
    console.error('Error classifying error:', error);
    res.status(500).json({ error: 'Failed to classify error', message: error.message });
  }
});

// Get next hint level
app.get('/api/next-hint-level', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, errorType, retryCount } = req.query;
    
    if (!userId || !challengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, and attemptId are required' });
    }
    
    // Get attempt to find current hint level
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      return res.status(404).json({ error: 'Attempt not found' });
    }
    
    let currentLevel = attempt.hintLadder?.currentLevel || 0;
    const retryCountInt = parseInt(retryCount || "0");
    
    // Determine next hint level based on error type and retry count
    if (errorType === "syntax" && currentLevel < 2) {
      currentLevel = 2;
    } else if ((errorType === "logic" || errorType === "invariant") && currentLevel < 3) {
      currentLevel = 3;
    } else if (retryCountInt >= 3 && currentLevel < 4) {
      currentLevel = 4;
    } else {
      currentLevel = Math.min(currentLevel + 1, 4);
    }
    
    // Hint content would come from challenge metadata or AI generation
    const hintTypes = {
      1: { type: "concept", description: "Conceptual guidance without code" },
      2: { type: "process", description: "Algorithm steps without code" },
      3: { type: "skeleton", description: "Partial code structure" },
      4: { type: "solution", description: "Complete solution with explanation" }
    };
    
    res.json({
      success: true,
      level: currentLevel,
      type: hintTypes[currentLevel].type,
      description: hintTypes[currentLevel].description
    });
  } catch (error) {
    console.error('Error getting next hint level:', error);
    res.status(500).json({ error: 'Failed to get next hint level', message: error.message });
  }
});

// Get learning artifacts
app.get('/api/learning-artifacts', async (req, res) => {
  try {
    const { userId, challengeId, attemptId } = req.query;
    if (!userId || !challengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, and attemptId are required' });
    }
    
    const artifacts = await getLearningArtifacts(userId, challengeId, attemptId);
    res.json({ success: true, ...artifacts });
  } catch (error) {
    console.error('Error getting learning artifacts:', error);
    res.status(500).json({ error: 'Failed to get learning artifacts', message: error.message });
  }
});

// Runtime Lab demo endpoint (placeholder)
app.get('/api/runtime-lab/:demoId', async (req, res) => {
  try {
    const { demoId } = req.params;
    
    // Static demo structures (can be enhanced later)
    const demos = {
      'js-runtime-explorer': {
        demoId: 'js-runtime-explorer',
        title: 'JavaScript Runtime Explorer',
        objective: 'Understand execution context, call stack, heap, and closures',
        steps: [
          {
            stepId: 'step-1',
            title: 'Execution Context',
            objective: 'Understand how JavaScript creates execution contexts',
            whyThisStep: 'Before understanding closures, you need to understand how JavaScript manages scope and context',
            checkForUnderstanding: 'What happens when a function is called?',
            interactive: true
          },
          {
            stepId: 'step-2',
            title: 'Call Stack',
            objective: 'Visualize how functions are added and removed from the call stack',
            whyThisStep: 'The call stack shows the order of function execution',
            checkForUnderstanding: 'What is the current call stack when a function calls another function?',
            interactive: true
          },
          {
            stepId: 'step-3',
            title: 'Closures',
            objective: 'Understand how closures capture variables from outer scopes',
            whyThisStep: 'Closures are fundamental to understanding JavaScript scope',
            checkForUnderstanding: 'What variables are accessible in a closure?',
            interactive: true
          }
        ],
        transferChallenge: {
          title: 'Trace this code execution',
          code: 'function outer() { const x = 1; function inner() { console.log(x); } return inner; }'
        }
      },
      'async-timeline': {
        demoId: 'async-timeline',
        title: 'Async Timeline',
        objective: 'Understand the event loop, microtasks, and promise execution',
        steps: [
          {
            stepId: 'step-1',
            title: 'Event Loop',
            objective: 'Understand how JavaScript handles asynchronous operations',
            whyThisStep: 'The event loop is key to understanding async JavaScript',
            checkForUnderstanding: 'What is the order of execution for async code?',
            interactive: true
          },
          {
            stepId: 'step-2',
            title: 'Microtasks vs Macrotasks',
            objective: 'Learn the difference between microtasks and macrotasks',
            whyThisStep: 'Understanding task queues helps debug async behavior',
            checkForUnderstanding: 'Which executes first: Promise.then or setTimeout?',
            interactive: true
          }
        ],
        transferChallenge: {
          title: 'Predict the output',
          code: 'console.log(1); Promise.resolve().then(() => console.log(2)); setTimeout(() => console.log(3), 0); console.log(4);'
        }
      },
      'state-derived': {
        demoId: 'state-derived',
        title: 'State & Derived State',
        objective: 'Understand state machines and derived computation',
        steps: [
          {
            stepId: 'step-1',
            title: 'State Machine',
            objective: 'Learn how state machines model application state',
            whyThisStep: 'State machines help manage complex application logic',
            checkForUnderstanding: 'What are the possible states and transitions?',
            interactive: true
          },
          {
            stepId: 'step-2',
            title: 'Derived State',
            objective: 'Understand how to compute state from other state',
            whyThisStep: 'Derived state reduces redundancy and keeps data consistent',
            checkForUnderstanding: 'How do you compute derived values?',
            interactive: true
          }
        ],
        transferChallenge: {
          title: 'Build a state machine',
          code: '// Create a state machine for a toggle button'
        }
      }
    };
    
    const demo = demos[demoId];
    if (!demo) {
      return res.status(404).json({ error: 'Demo not found' });
    }
    
    res.json({ success: true, demo });
  } catch (error) {
    console.error('Error getting runtime lab demo:', error);
    res.status(500).json({ error: 'Failed to get runtime lab demo', message: error.message });
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
