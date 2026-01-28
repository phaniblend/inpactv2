import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// User data directory
const USER_DATA_DIR = path.join(__dirname, '../data', 'users');

// Ensure user data directory exists
async function ensureUserDataDir() {
  try {
    await fs.mkdir(USER_DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating user data directory:', error);
  }
}

// Get user data file path
function getUserDataPath(userId) {
  return path.join(USER_DATA_DIR, `${userId}.json`);
}

// Load user data
export async function getUserData(userId) {
  try {
    await ensureUserDataDir();
    const userPath = getUserDataPath(userId);
    
    try {
      const data = await fs.readFile(userPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist, return default user data
      return {
        userId,
        challenges: [],
        completedTasks: [],
        inProgressTasks: [],
        savedCode: {},
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      };
    }
  } catch (error) {
    console.error('Error loading user data:', error);
    return null;
  }
}

// Save user data
export async function saveUserData(userId, userData) {
  try {
    await ensureUserDataDir();
    const userPath = getUserDataPath(userId);
    
    userData.lastActive = new Date().toISOString();
    
    await fs.writeFile(userPath, JSON.stringify(userData, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving user data:', error);
    return false;
  }
}

// Add or update a challenge
export async function addChallenge(userId, challengeData) {
  const userData = await getUserData(userId);
  if (!userData) return null;
  
  const { task, technology, tasks, startedAt } = challengeData;
  
  // Check if challenge already exists
  const existingIndex = userData.challenges.findIndex(
    c => c.task === task && c.technology === technology
  );
  
  const challenge = {
    task,
    technology,
    tasks: tasks || [],
    startedAt: startedAt || new Date().toISOString(),
    lastActive: new Date().toISOString(),
    completedTasks: [],
    progress: 0
  };
  
  if (existingIndex >= 0) {
    // Update existing challenge
    userData.challenges[existingIndex] = {
      ...userData.challenges[existingIndex],
      ...challenge,
      lastActive: new Date().toISOString()
    };
  } else {
    // Add new challenge
    userData.challenges.push(challenge);
  }
  
  await saveUserData(userId, userData);
  return challenge;
}

// Mark task as completed
export async function completeTask(userId, task, challengeTask) {
  const userData = await getUserData(userId);
  if (!userData) return null;
  
  // Find the challenge
  const challenge = userData.challenges.find(
    c => c.task === task
  );
  
  if (challenge) {
    // Add to completed tasks if not already there
    if (!challenge.completedTasks.includes(challengeTask)) {
      challenge.completedTasks.push(challengeTask);
    }
    
    // Update progress
    challenge.progress = (challenge.completedTasks.length / challenge.tasks.length) * 100;
    challenge.lastActive = new Date().toISOString();
    
    // Update global completed tasks
    if (!userData.completedTasks.includes(challengeTask)) {
      userData.completedTasks.push(challengeTask);
    }
    
    // Update in-progress tasks
    userData.inProgressTasks = userData.inProgressTasks.filter(t => t !== challengeTask);
    
    await saveUserData(userId, userData);
  }
  
  return userData;
}

// Save user code for a task
export async function saveUserCode(userId, task, taskText, code) {
  const userData = await getUserData(userId);
  if (!userData) return null;
  
  const key = `${task}::${taskText}`;
  userData.savedCode[key] = {
    code,
    savedAt: new Date().toISOString(),
    task,
    taskText
  };
  
  await saveUserData(userId, userData);
  return userData;
}

// Get user dashboard data
export async function getDashboardData(userId) {
  const userData = await getUserData(userId);
  if (!userData) return null;
  
  const totalCompleted = userData.completedTasks.length;
  const totalInProgress = userData.inProgressTasks.length;
  const totalChallenges = userData.challenges.length;
  
  // Get recent activity (last 5 challenges sorted by lastActive)
  const recentActivity = userData.challenges
    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
    .slice(0, 5)
    .map(challenge => ({
      task: challenge.task,
      technology: challenge.technology,
      progress: challenge.progress,
      lastActive: challenge.lastActive,
      completedTasks: challenge.completedTasks.length,
      totalTasks: challenge.tasks.length
    }));
  
  // Get in-progress challenges
  const continueLearning = userData.challenges
    .filter(c => c.progress < 100)
    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
    .map(challenge => ({
      task: challenge.task,
      technology: challenge.technology,
      progress: challenge.progress,
      lastActive: challenge.lastActive,
      completedTasks: challenge.completedTasks.length,
      totalTasks: challenge.tasks.length
    }));
  
  // Get completed challenges
  const completedChallenges = userData.challenges
    .filter(c => c.progress >= 100)
    .sort((a, b) => new Date(b.lastActive) - new Date(a.lastActive))
    .map(challenge => ({
      task: challenge.task,
      technology: challenge.technology,
      completedAt: challenge.lastActive,
      totalTasks: challenge.tasks.length
    }));
  
  return {
    stats: {
      totalCompleted,
      totalInProgress,
      totalChallenges
    },
    recentActivity,
    continueLearning,
    completedChallenges
  };
}

