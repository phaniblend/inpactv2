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
async function loadTrackingData() {
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

