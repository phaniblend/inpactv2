import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CRITICAL: Load environment variables from parent directory
dotenv.config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
import { 
  generateLearningObjectives, 
  decomposeTask,
  generateTutorialSteps,
  validateUserCode,
  generateHint
} from './openai-service.js';



const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// ============================================================================
// ENDPOINT 1: Generate Learning Objectives (Existing)
// ============================================================================
app.post('/api/generate-objectives', async (req, res) => {
  try {
    const { task, technology } = req.body;

    if (!task || !technology) {
      return res.status(400).json({ 
        error: 'Both task and technology are required' 
      });
    }

    console.log(`Generating objectives for: "${task}" in ${technology}`);
    
    const objectives = await generateLearningObjectives(task, technology);
    
    res.json({ 
      success: true,
      objectives: objectives,
      task: task,
      technology: technology
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate learning objectives',
      message: error.message 
    });
  }
});

// ============================================================================
// ENDPOINT 2: Decompose Task (Existing)
// ============================================================================
app.post('/api/decompose-task', async (req, res) => {
  try {
    const { task, technology, breakdown } = req.body;

    if (!task || !technology) {
      return res.status(400).json({ 
        error: 'Both task and technology are required' 
      });
    }

    console.log(`Decomposing task: "${task}" in ${technology} (breakdown: ${breakdown})`);
    
    const tasks = await decomposeTask(task, technology, breakdown);
    
    res.json({ 
      success: true,
      tasks: tasks,
      breakdown: breakdown
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to decompose task',
      message: error.message 
    });
  }
});

// ============================================================================
// ENDPOINT 3: Generate Tutorial Steps (NEW - Phase 3)
// ============================================================================
app.post('/api/generate-tutorial', async (req, res) => {
  try {
    const { atomicTask, projectContext } = req.body;

    if (!atomicTask || !projectContext) {
      return res.status(400).json({ 
        error: 'atomicTask and projectContext are required' 
      });
    }

    console.log(`Generating tutorial for: "${atomicTask}"`);
    console.log(`Project context: ${projectContext.task} in ${projectContext.technology}`);
    
    const tutorial = await generateTutorialSteps(atomicTask, projectContext);
    
    res.json({ 
      success: true,
      tutorial: tutorial
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate tutorial',
      message: error.message 
    });
  }
});

// ============================================================================
// ENDPOINT 4: Validate User Code (NEW - Phase 3)
// ============================================================================
app.post('/api/validate-code', async (req, res) => {
  try {
    const { userCode, step, atomicTask } = req.body;

    if (!userCode || !step || !atomicTask) {
      return res.status(400).json({ 
        error: 'userCode, step, and atomicTask are required' 
      });
    }

    console.log(`Validating code for step ${step.stepNumber}: "${step.title}"`);
    
    const validation = await validateUserCode(userCode, step, atomicTask);
    
    res.json({ 
      success: true,
      validation: validation
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to validate code',
      message: error.message 
    });
  }
});

// ============================================================================
// ENDPOINT 5: Generate Hint (NEW - Phase 3)
// ============================================================================
app.post('/api/generate-hint', async (req, res) => {
  try {
    const { userCode, step, hintNumber, previousHints } = req.body;

    if (!userCode || !step || !hintNumber) {
      return res.status(400).json({ 
        error: 'userCode, step, and hintNumber are required' 
      });
    }

    console.log(`Generating hint ${hintNumber} for step ${step.stepNumber}`);
    
    const hint = await generateHint(userCode, step, hintNumber, previousHints || []);
    
    res.json({ 
      success: true,
      hint: hint
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate hint',
      message: error.message 
    });
  }
});

// ============================================================================
// ENDPOINT 6: Health Check (Existing)
// ============================================================================
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    endpoints: [
      'POST /api/generate-objectives',
      'POST /api/decompose-task',
      'POST /api/generate-tutorial',
      'POST /api/validate-code',
      'POST /api/generate-hint'
    ]
  });
});

// ============================================================================
// START SERVER
// ============================================================================
app.listen(PORT, () => {
  console.log('═══════════════════════════════════════════════════════');
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📂 Open http://localhost:${PORT} in your browser`);
  console.log('═══════════════════════════════════════════════════════');
  
  // Verify API key is loaded
  if (!process.env.OPENAI_API_KEY) {
    console.error('⚠️  WARNING: OPENAI_API_KEY not found in environment variables!');
  } else {
    console.log('✓ OpenAI API key loaded');
  }
  
  console.log('\nAvailable endpoints:');
  console.log('  POST /api/generate-objectives   - Generate learning objectives');
  console.log('  POST /api/decompose-task        - Break down into atomic tasks');
  console.log('  POST /api/generate-tutorial     - Generate tutorial steps');
  console.log('  POST /api/validate-code         - Validate student code');
  console.log('  POST /api/generate-hint         - Get progressive hints');
  console.log('  GET  /api/health                - Health check');
  console.log('═══════════════════════════════════════════════════════\n');
});