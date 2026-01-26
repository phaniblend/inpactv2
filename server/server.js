import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
import { 
  generateLearningObjectives, 
  decomposeTask,
  generateTutorialSteps,
  validateUserCode,
  generateHint,
  askMentor
} from './openai-service.js';

const app = express();
const PORT = process.env.PORT || 3001;

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
    const objectives = await generateLearningObjectives(task, technology);
    res.json({ success: true, objectives, task, technology });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate learning objectives', message: error.message });
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

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('⚠️  WARNING: ANTHROPIC_API_KEY not found!');
  } else {
    console.log('✓ Anthropic API key loaded');
  }
});
