import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tracking data file
const TRACKING_FILE = path.join(__dirname, '../data', 'user-tracking.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(TRACKING_FILE);
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

// Generate a browser fingerprint hash
export function generateFingerprint(userAgent, acceptLanguage, screenResolution, timezone, language, platform, hardwareConcurrency, deviceMemory, canvasFingerprint) {
  // Combine multiple browser characteristics for a unique fingerprint
  const fingerprintString = [
    userAgent || '',
    acceptLanguage || '',
    screenResolution || '',
    timezone || '',
    language || '',
    platform || '',
    hardwareConcurrency || '',
    deviceMemory || '',
    canvasFingerprint || ''
  ].join('|');
  
  return crypto.createHash('sha256').update(fingerprintString).digest('hex');
}

// Load tracking data
export async function loadTrackingData() {
  try {
    await ensureDataDir();
    const data = await fs.readFile(TRACKING_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist or can't be read, return empty object
    return {};
  }
}

// Save tracking data
async function saveTrackingData(data) {
  try {
    await ensureDataDir();
    await fs.writeFile(TRACKING_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving tracking data:', error);
  }
}

// Track "next time" click
export async function trackNextTime(fingerprint) {
  try {
    const trackingData = await loadTrackingData();
    
    if (!trackingData[fingerprint]) {
      trackingData[fingerprint] = {
        nextTimeCount: 0,
        firstSeen: new Date().toISOString(),
        lastSeen: new Date().toISOString()
      };
    }
    
    trackingData[fingerprint].nextTimeCount += 1;
    trackingData[fingerprint].lastSeen = new Date().toISOString();
    
    await saveTrackingData(trackingData);
    
    return {
      count: trackingData[fingerprint].nextTimeCount,
      isThirdTime: trackingData[fingerprint].nextTimeCount >= 3
    };
  } catch (error) {
    console.error('Error tracking next time:', error);
    return { count: 0, isThirdTime: false };
  }
}

// Get "next time" count for a fingerprint
export async function getNextTimeCount(fingerprint) {
  try {
    const trackingData = await loadTrackingData();
    return trackingData[fingerprint]?.nextTimeCount || 0;
  } catch (error) {
    console.error('Error getting next time count:', error);
    return 0;
  }
}

// Check if user should see the message
export async function shouldShowMessage(fingerprint) {
  const count = await getNextTimeCount(fingerprint);
  return count >= 3;
}

// ============================================================================
// ATTEMPT MANAGEMENT (Stable Attempt Model)
// ============================================================================

// Create a new attempt (called once when challenge starts)
export async function createAttempt(userId, challengeId) {
  try {
    const attemptId = `attempt-${userId}-${challengeId}-${Date.now()}`;
    const trackingData = await loadTrackingData();
    
    if (!trackingData[userId]) {
      trackingData[userId] = {};
    }
    if (!trackingData[userId][challengeId]) {
      trackingData[userId][challengeId] = {};
    }
    
    const attempt = {
      attemptId,
      challengeId,
      userId,
      status: "in-progress",
      createdAt: new Date().toISOString(),
      startedAt: new Date().toISOString(),
      completedAt: null,
      abandonedAt: null,
      predictions: [],
      hints: [],
      submissions: [],
      reflections: [],
      rubrics: [],
      transfers: [],
      hintLadder: {
        currentLevel: 0,
        hintsUsed: [],
        maxLevel: 4
      },
      checkResponses: [],
      errorHistory: [],
      metrics: {
        hintCount: 0,
        timeToComplete: null,
        predictionAccuracy: null,
        transferSuccess: false,
        errorClassifications: {
          syntax: 0,
          logic: 0,
          invariant: 0,
          edgeCase: 0
        }
      }
    };
    
    trackingData[userId][challengeId][attemptId] = attempt;
    await saveTrackingData(trackingData);
    
    return attemptId;
  } catch (error) {
    console.error('Error creating attempt:', error);
    throw error;
  }
}

// Get or create attempt (retrieves in-progress or creates new)
export async function getOrCreateAttempt(userId, challengeId) {
  try {
    const trackingData = await loadTrackingData();
    
    // Find in-progress attempt
    const attempts = trackingData[userId]?.[challengeId] || {};
    const inProgressAttempt = Object.values(attempts).find(
      a => a.status === "in-progress"
    );
    
    if (inProgressAttempt) {
      return inProgressAttempt.attemptId;
    }
    
    // Create new attempt
    return await createAttempt(userId, challengeId);
  } catch (error) {
    console.error('Error getting or creating attempt:', error);
    throw error;
  }
}

// Get attempt by ID
export async function getAttempt(userId, challengeId, attemptId) {
  try {
    const trackingData = await loadTrackingData();
    return trackingData[userId]?.[challengeId]?.[attemptId] || null;
  } catch (error) {
    console.error('Error getting attempt:', error);
    return null;
  }
}

// Save attempt (update existing)
async function saveAttempt(userId, challengeId, attemptId, attempt) {
  try {
    const trackingData = await loadTrackingData();
    
    if (!trackingData[userId]) {
      trackingData[userId] = {};
    }
    if (!trackingData[userId][challengeId]) {
      trackingData[userId][challengeId] = {};
    }
    
    trackingData[userId][challengeId][attemptId] = attempt;
    await saveTrackingData(trackingData);
  } catch (error) {
    console.error('Error saving attempt:', error);
    throw error;
  }
}

// Close attempt (complete or abandon)
export async function closeAttempt(userId, challengeId, attemptId, status) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    if (status === "completed") {
      attempt.status = "completed";
      attempt.completedAt = new Date().toISOString();
      // Calculate time to complete
      const startTime = new Date(attempt.startedAt);
      const endTime = new Date();
      attempt.metrics.timeToComplete = Math.floor((endTime - startTime) / 1000);
    } else if (status === "abandoned") {
      attempt.status = "abandoned";
      attempt.abandonedAt = new Date().toISOString();
    }
    
    await saveAttempt(userId, challengeId, attemptId, attempt);
    return { success: true };
  } catch (error) {
    console.error('Error closing attempt:', error);
    return { success: false, error: error.message };
  }
}

// ============================================================================
// LEARNING ARTIFACTS (Predictions, Reflections, Rubrics, Transfers)
// ============================================================================

// Save prediction
export async function savePrediction(userId, challengeId, attemptId, prediction) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const predictionData = {
      predictionId: `pred-${Date.now()}`,
      attemptId,
      timestamp: new Date().toISOString(),
      prompt: prediction.prompt,
      response: prediction.response,
      accuracy: null // Will be set after completion
    };
    
    attempt.predictions.push(predictionData);
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, predictionId: predictionData.predictionId };
  } catch (error) {
    console.error('Error saving prediction:', error);
    return { success: false, error: error.message };
  }
}

// Save reflection
export async function saveReflection(userId, challengeId, attemptId, reflection) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const reflectionData = {
      reflectionId: `ref-${Date.now()}`,
      attemptId,
      timestamp: new Date().toISOString(),
      responses: reflection.responses,
      submitted: true
    };
    
    attempt.reflections.push(reflectionData);
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, reflectionId: reflectionData.reflectionId };
  } catch (error) {
    console.error('Error saving reflection:', error);
    return { success: false, error: error.message };
  }
}

// Save rubric
export async function saveRubric(userId, challengeId, attemptId, rubric) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const rubricData = {
      rubricId: `rub-${Date.now()}`,
      attemptId,
      timestamp: new Date().toISOString(),
      framing: rubric.framing,
      invariants: rubric.invariants,
      tradeoffs: rubric.tradeoffs,
      debugging: rubric.debugging,
      transfer: rubric.transfer,
      notes: rubric.notes || null
    };
    
    attempt.rubrics.push(rubricData);
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, rubricId: rubricData.rubricId };
  } catch (error) {
    console.error('Error saving rubric:', error);
    return { success: false, error: error.message };
  }
}

// Save transfer attempt
export async function saveTransfer(userId, challengeId, transferChallengeId, attemptId, completed, transferType = "near") {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const transferData = {
      transferId: `trans-${Date.now()}`,
      attemptId,
      transferChallengeId,
      transferType,
      completed,
      timestamp: new Date().toISOString()
    };
    
    attempt.transfers.push(transferData);
    if (completed) {
      attempt.metrics.transferSuccess = true;
    }
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, transferId: transferData.transferId };
  } catch (error) {
    console.error('Error saving transfer:', error);
    return { success: false, error: error.message };
  }
}

// Get all learning artifacts for an attempt
export async function getLearningArtifacts(userId, challengeId, attemptId) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      return {
        predictions: [],
        reflections: [],
        rubrics: [],
        transfers: [],
        hints: [],
        submissions: []
      };
    }
    
    return {
      predictions: attempt.predictions || [],
      reflections: attempt.reflections || [],
      rubrics: attempt.rubrics || [],
      transfers: attempt.transfers || [],
      hints: attempt.hints || [],
      submissions: attempt.submissions || []
    };
  } catch (error) {
    console.error('Error getting learning artifacts:', error);
    return {
      predictions: [],
      reflections: [],
      rubrics: [],
      transfers: [],
      hints: [],
      submissions: []
    };
  }
}

// Record hint usage
export async function recordHintUsage(userId, challengeId, attemptId, hintLevel, hintType, hintContent) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const hintData = {
      hintId: `hint-${Date.now()}`,
      attemptId,
      level: hintLevel,
      type: hintType, // concept | process | skeleton | solution
      content: hintContent,
      timestamp: new Date().toISOString()
    };
    
    attempt.hints.push(hintData);
    attempt.hintLadder.hintsUsed.push({
      level: hintLevel,
      type: hintType,
      timestamp: hintData.timestamp
    });
    attempt.hintLadder.currentLevel = Math.max(
      attempt.hintLadder.currentLevel,
      hintLevel
    );
    attempt.metrics.hintCount = attempt.hints.length;
    
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, hintId: hintData.hintId };
  } catch (error) {
    console.error('Error recording hint usage:', error);
    return { success: false, error: error.message };
  }
}

// Save check-for-understanding response
export async function saveCheckResponse(userId, challengeId, attemptId, stepId, response, correct, misconceptionDetected) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const checkData = {
      checkId: `check-${Date.now()}`,
      attemptId,
      stepId,
      response,
      correct,
      misconceptionDetected: misconceptionDetected || null,
      timestamp: new Date().toISOString()
    };
    
    attempt.checkResponses.push(checkData);
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, checkId: checkData.checkId };
  } catch (error) {
    console.error('Error saving check response:', error);
    return { success: false, error: error.message };
  }
}

// Record error classification
export async function recordErrorClassification(userId, challengeId, attemptId, errorType, errorDetails, nextHintLevel) {
  try {
    const attempt = await getAttempt(userId, challengeId, attemptId);
    if (!attempt) {
      throw new Error('Attempt not found');
    }
    
    const errorData = {
      errorId: `error-${Date.now()}`,
      attemptId,
      errorType, // syntax | logic | invariant | edge-case
      errorDetails,
      nextHintLevel,
      timestamp: new Date().toISOString()
    };
    
    attempt.errorHistory.push(errorData);
    
    // Update error classification counts
    if (attempt.metrics.errorClassifications[errorType] !== undefined) {
      attempt.metrics.errorClassifications[errorType]++;
    }
    
    await saveAttempt(userId, challengeId, attemptId, attempt);
    
    return { success: true, errorId: errorData.errorId };
  } catch (error) {
    console.error('Error recording error classification:', error);
    return { success: false, error: error.message };
  }
}

