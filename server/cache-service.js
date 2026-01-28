import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cache directory
const CACHE_DIR = path.join(__dirname, '../cache');

// Ensure cache directory exists
async function ensureCacheDir() {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating cache directory:', error);
  }
}

// Generate a cache key from parameters
function generateCacheKey(type, ...params) {
  // Normalize parameters: lowercase strings, sort objects
  const normalized = params.map(param => {
    if (typeof param === 'string') {
      return param.toLowerCase().trim();
    } else if (typeof param === 'object' && param !== null) {
      // Sort object keys for consistent hashing
      const sorted = Object.keys(param)
        .sort()
        .reduce((acc, key) => {
          acc[key] = typeof param[key] === 'string' 
            ? param[key].toLowerCase().trim() 
            : param[key];
          return acc;
        }, {});
      return JSON.stringify(sorted);
    }
    return String(param);
  });
  
  // Create hash from normalized parameters
  const keyString = `${type}:${normalized.join(':')}`;
  const hash = crypto.createHash('sha256').update(keyString).digest('hex');
  return hash;
}

// Get cache file path
function getCacheFilePath(cacheKey) {
  return path.join(CACHE_DIR, `${cacheKey}.json`);
}

// Read from cache
export async function getFromCache(type, ...params) {
  try {
    await ensureCacheDir();
    const cacheKey = generateCacheKey(type, ...params);
    const cachePath = getCacheFilePath(cacheKey);
    
    // Check if cache file exists
    try {
      const cacheData = await fs.readFile(cachePath, 'utf8');
      const parsed = JSON.parse(cacheData);
      
      // Add metadata
      parsed._cached = true;
      parsed._cacheKey = cacheKey;
      
      console.log(`✓ Cache HIT: ${type} (key: ${cacheKey.substring(0, 8)}...)`);
      return parsed;
    } catch (error) {
      // File doesn't exist or can't be read
      console.log(`✗ Cache MISS: ${type} (key: ${cacheKey.substring(0, 8)}...)`);
      return null;
    }
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}

// Write to cache
export async function saveToCache(type, data, ...params) {
  try {
    await ensureCacheDir();
    const cacheKey = generateCacheKey(type, ...params);
    const cachePath = getCacheFilePath(cacheKey);
    
    // Prepare cache entry with metadata
    const cacheEntry = {
      type,
      key: cacheKey,
      timestamp: new Date().toISOString(),
      data: data
    };
    
    // Write to cache file
    await fs.writeFile(cachePath, JSON.stringify(cacheEntry, null, 2), 'utf8');
    console.log(`💾 Cached: ${type} (key: ${cacheKey.substring(0, 8)}...)`);
    
    return cacheEntry;
  } catch (error) {
    console.error('Error saving to cache:', error);
    // Don't throw - caching failure shouldn't break the app
    return null;
  }
}

// Get cache statistics
export async function getCacheStats() {
  try {
    await ensureCacheDir();
    const files = await fs.readdir(CACHE_DIR);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    let totalSize = 0;
    const typeCounts = {};
    
    for (const file of jsonFiles) {
      try {
        const filePath = path.join(CACHE_DIR, file);
        const stats = await fs.stat(filePath);
        totalSize += stats.size;
        
        const content = await fs.readFile(filePath, 'utf8');
        const parsed = JSON.parse(content);
        if (parsed.type) {
          typeCounts[parsed.type] = (typeCounts[parsed.type] || 0) + 1;
        }
      } catch (error) {
        // Skip files that can't be read
        continue;
      }
    }
    
    return {
      totalEntries: jsonFiles.length,
      totalSizeBytes: totalSize,
      totalSizeMB: (totalSize / (1024 * 1024)).toFixed(2),
      byType: typeCounts
    };
  } catch (error) {
    console.error('Error getting cache stats:', error);
    return { totalEntries: 0, totalSizeBytes: 0, totalSizeMB: 0, byType: {} };
  }
}

// Clear cache (optional utility)
export async function clearCache(type = null) {
  try {
    await ensureCacheDir();
    const files = await fs.readdir(CACHE_DIR);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    let deleted = 0;
    for (const file of jsonFiles) {
      try {
        if (type) {
          // Only delete files of specific type
          const filePath = path.join(CACHE_DIR, file);
          const content = await fs.readFile(filePath, 'utf8');
          const parsed = JSON.parse(content);
          if (parsed.type === type) {
            await fs.unlink(filePath);
            deleted++;
          }
        } else {
          // Delete all cache files
          await fs.unlink(path.join(CACHE_DIR, file));
          deleted++;
        }
      } catch (error) {
        console.error(`Error deleting cache file ${file}:`, error);
      }
    }
    
    console.log(`Cleared ${deleted} cache entries${type ? ` of type ${type}` : ''}`);
    return deleted;
  } catch (error) {
    console.error('Error clearing cache:', error);
    return 0;
  }
}

