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

// ============================================================================
// LEARNING PROFILE & ANALYTICS
// ============================================================================

// Calculate concept mastery for a specific concept
async function calculateConceptMastery(userId, concept) {
  try {
    // Import tracking service to get attempts
    const { loadTrackingData } = await import('./tracking-service.js');
    const trackingData = await loadTrackingData();
    
    const attempts = [];
    // Get all attempts for challenges related to this concept
    const userAttempts = trackingData[userId] || {};
    for (const challengeId in userAttempts) {
      for (const attemptId in userAttempts[challengeId]) {
        const attempt = userAttempts[challengeId][attemptId];
        // Check if this challenge relates to the concept
        // For now, we'll use challengeId as a proxy for concept
        if (attempt.status === "completed") {
          attempts.push(attempt);
        }
      }
    }
    
    if (attempts.length === 0) return 0;
    
    // Calculate mastery factors
    const completionRate = attempts.filter(a => a.status === "completed").length / attempts.length;
    const avgHintDependency = 1 - (attempts.reduce((sum, a) => {
      const maxLevel = a.hintLadder?.maxLevel || 4;
      const currentLevel = a.hintLadder?.currentLevel || 0;
      return sum + (currentLevel / maxLevel);
    }, 0) / attempts.length);
    
    const transferSuccessRate = attempts.filter(a => 
      a.transfers && a.transfers.some(t => t.completed)
    ).length / Math.max(1, attempts.filter(a => a.transfers && a.transfers.length > 0).length);
    
    const avgTime = attempts.reduce((sum, a) => 
      sum + (a.metrics?.timeToComplete || 3600), 0
    ) / attempts.length;
    const timeScore = Math.max(0, 1 - (avgTime / 3600)); // Normalize to 1 hour max
    
    // Weighted mastery calculation
    const mastery = (
      completionRate * 0.4 +
      avgHintDependency * 0.3 +
      transferSuccessRate * 0.2 +
      timeScore * 0.1
    );
    
    return Math.min(1, Math.max(0, mastery));
  } catch (error) {
    console.error('Error calculating concept mastery:', error);
    return 0;
  }
}

// Get learning profile for a user
export async function getLearningProfile(userId) {
  try {
    const userData = await getUserData(userId);
    if (!userData) {
      return getDefaultLearningProfile();
    }
    
    // Initialize learning profile if it doesn't exist
    if (!userData.learningProfile) {
      userData.learningProfile = getDefaultLearningProfile();
      await saveUserData(userId, userData);
    }
    
    return userData.learningProfile;
  } catch (error) {
    console.error('Error getting learning profile:', error);
    return getDefaultLearningProfile();
  }
}

// Get default learning profile
function getDefaultLearningProfile() {
  return {
    conceptMastery: {},
    bloomDistribution: {
      "Remember": 0,
      "Understand": 0,
      "Apply": 0,
      "Analyze": 0,
      "Evaluate": 0,
      "Create": 0
    },
    hintDependency: 0,
    predictionAccuracy: 0,
    transferSuccessRate: 0,
    averageCompletionTime: 0
  };
}

// Update learning profile with new metrics
export async function updateLearningProfile(userId, metrics) {
  try {
    const userData = await getUserData(userId);
    if (!userData) return null;
    
    if (!userData.learningProfile) {
      userData.learningProfile = getDefaultLearningProfile();
    }
    
    // Update concept mastery
    if (metrics.conceptMastery) {
      userData.learningProfile.conceptMastery = {
        ...userData.learningProfile.conceptMastery,
        ...metrics.conceptMastery
      };
    }
    
    // Update other metrics
    if (metrics.hintDependency !== undefined) {
      userData.learningProfile.hintDependency = metrics.hintDependency;
    }
    if (metrics.predictionAccuracy !== undefined) {
      userData.learningProfile.predictionAccuracy = metrics.predictionAccuracy;
    }
    if (metrics.transferSuccessRate !== undefined) {
      userData.learningProfile.transferSuccessRate = metrics.transferSuccessRate;
    }
    if (metrics.averageCompletionTime !== undefined) {
      userData.learningProfile.averageCompletionTime = metrics.averageCompletionTime;
    }
    if (metrics.bloomDistribution) {
      userData.learningProfile.bloomDistribution = {
        ...userData.learningProfile.bloomDistribution,
        ...metrics.bloomDistribution
      };
    }
    
    await saveUserData(userId, userData);
    return userData.learningProfile;
  } catch (error) {
    console.error('Error updating learning profile:', error);
    return null;
  }
}

// Get learning recommendations based on analytics
export async function getLearningRecommendations(userId) {
  try {
    const profile = await getLearningProfile(userId);
    const recommendations = [];
    
    // Rule 1: High hint dependency → remediation
    if (profile.hintDependency > 0.6) {
      recommendations.push({
        type: "remediation",
        priority: "high",
        message: "You're using many hints. Let's strengthen the fundamentals.",
        action: {
          type: "suggest-challenge",
          challengeIds: [], // Will be populated based on weak concepts
          reason: "High hint dependency suggests need for concept reinforcement"
        }
      });
    }
    
    // Rule 2: Low transfer success → inject near-transfer
    if (profile.transferSuccessRate < 0.5 && profile.transferSuccessRate > 0) {
      recommendations.push({
        type: "transfer-support",
        priority: "medium",
        message: "Let's practice applying patterns to similar problems.",
        action: {
          type: "inject-transfer",
          transferType: "near",
          count: 2,
          reason: "Low transfer success indicates need for more practice with pattern application"
        }
      });
    }
    
    // Rule 3: Low prediction accuracy → require prediction gate
    if (profile.predictionAccuracy < 0.4 && profile.predictionAccuracy > 0) {
      recommendations.push({
        type: "prediction-gate",
        priority: "high",
        message: "Let's practice thinking through problems before coding.",
        action: {
          type: "require-prediction",
          duration: 3,
          reason: "Low prediction accuracy suggests need for more deliberate planning"
        }
      });
    }
    
    // Rule 4: Concept mastery gaps → targeted practice
    const weakConcepts = Object.entries(profile.conceptMastery)
      .filter(([concept, mastery]) => mastery < 0.6 && mastery > 0)
      .map(([concept]) => concept);
    
    if (weakConcepts.length > 0) {
      recommendations.push({
        type: "targeted-practice",
        priority: "medium",
        message: `Focus on: ${weakConcepts.slice(0, 3).join(", ")}`,
        action: {
          type: "suggest-challenges",
          challengeIds: [], // Will be populated based on concepts
          reason: "Low mastery in these concepts"
        }
      });
    }
    
    return recommendations;
  } catch (error) {
    console.error('Error getting learning recommendations:', error);
    return [];
  }
}

// Calculate scaffold level based on mastery
export async function getScaffoldLevel(userId, challengeId) {
  try {
    const { getChallengeMetadata } = await import('./question-bank.js');
    const metadata = getChallengeMetadata(challengeId);
    const profile = await getLearningProfile(userId);
    
    // Get concepts for this challenge (from prerequisites or inferred)
    const challengeConcepts = metadata.prerequisites || [];
    
    if (challengeConcepts.length === 0) {
      return {
        level: "beginner",
        rules: {
          predictionRequired: true,
          reflectionRequired: true,
          hintAvailability: "always",
          guidedBreakdown: true,
          checkForUnderstanding: "required",
          transferPrompt: "guided"
        }
      };
    }
    
    // Calculate average mastery for challenge concepts
    const avgMastery = challengeConcepts.reduce((sum, concept) => {
      return sum + (profile.conceptMastery[concept] || 0);
    }, 0) / challengeConcepts.length;
    
    let level, rules;
    
    if (avgMastery < 0.5) {
      level = "beginner";
      rules = {
        predictionRequired: true,
        reflectionRequired: true,
        hintAvailability: "always",
        guidedBreakdown: true,
        checkForUnderstanding: "required",
        transferPrompt: "guided"
      };
    } else if (avgMastery < 0.75) {
      level = "intermediate";
      rules = {
        predictionRequired: false,
        reflectionRequired: true,
        hintAvailability: "on-demand",
        guidedBreakdown: true,
        checkForUnderstanding: "optional",
        transferPrompt: "semi-guided"
      };
    } else {
      level = "advanced";
      rules = {
        predictionRequired: false,
        reflectionRequired: false,
        hintAvailability: "limited",
        guidedBreakdown: false,
        checkForUnderstanding: "none",
        transferPrompt: "independent"
      };
    }
    
    return { level, rules };
  } catch (error) {
    console.error('Error getting scaffold level:', error);
    // Default to beginner
    return {
      level: "beginner",
      rules: {
        predictionRequired: true,
        reflectionRequired: true,
        hintAvailability: "always",
        guidedBreakdown: true,
        checkForUnderstanding: "required",
        transferPrompt: "guided"
      }
    };
  }
}

