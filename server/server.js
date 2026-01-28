import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
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

app.use(cors());
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
    
    // Check if API key is configured
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Server configuration error', 
        message: 'ANTHROPIC_API_KEY environment variable is not set. Please configure your .env file.' 
      });
    }
    
    const objectives = await generateLearningObjectives(task, technology);
    res.json({ success: true, objectives, task, technology });
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
    const tasks = await decomposeTask(task, technology, breakdown);
    res.json({ success: true, tasks, breakdown });
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
    const tutorial = await generateTutorialSteps(atomicTask, projectContext);
    res.json({ success: true, tutorial });
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

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('⚠️  WARNING: ANTHROPIC_API_KEY not found!');
    console.error('⚠️  Please create a .env file in the root directory with:');
    console.error('⚠️  ANTHROPIC_API_KEY=your_api_key_here');
  } else {
    console.log('✓ Anthropic API key loaded');
  }
});
