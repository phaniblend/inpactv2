# INPACT: Thinking-First Learning System Architecture

## 1. HIGH-LEVEL PLAN

### Core Philosophy Shift
- **From**: "Learn syntax, then apply"
- **To**: "Learn the thinking. Syntax follows."
- **Key Change**: Make implicit pedagogy explicit and visible throughout the UI

### Implementation Strategy (Progressive Enhancement)

1. **Phase 1: Metadata Foundation**
   - Extend question-bank.js with pedagogical metadata
   - Add Bloom taxonomy levels to challenges and steps
   - Add "Why this step?" rationale to tutorial steps
   - Store misconceptions and prerequisites

2. **Phase 2: Cognitive Journey Structure**
   - Implement 6-phase flow: Concept Isolation → Mental Model → Guided Construction → Independent Build → Transfer → Reflection
   - Map existing tutorial steps to phases
   - Add phase indicators in UI

3. **Phase 3: LXD Assessment Layer**
   - Add prediction prompts before hints/solutions
   - Add reflection capture after completion
   - Implement reasoning rubric (framing, invariants, tradeoffs, debugging, transfer)
   - Store assessment artifacts in tracking-service

4. **Phase 4: Runtime Lab**
   - Create new route `/runtime-lab`
   - Build 3 demo shells: JS Runtime Explorer, Async Timeline, State & Derived State
   - Each demo follows: Objective → Steps → Check → Transfer pattern

5. **Phase 5: Learning Analytics Dashboard**
   - Aggregate metrics from tracking-service
   - Show concept mastery heatmap
   - Display Bloom distribution
   - Show hint dependency, prediction accuracy, transfer success

### Integration Points
- **question-bank.js**: Source of truth for challenge metadata
- **tracking-service.js**: Store all learning artifacts (predictions, reflections, rubrics)
- **user-service.js**: Extend user data model with learning analytics
- **server.js**: New endpoints for LXD features
- **app.js**: UI components for pedagogy visibility
- **styles.css**: Minimal additions for new UI elements

---

## 2. DATA MODEL CHANGES

### A. Challenge Metadata Schema (question-bank.js)

```javascript
{
  id: "js-1",
  title: "Two Sum",
  difficulty: "Easy",
  frequency: "Very High",
  task: "Implement twoSum function...",
  
  // NEW: Pedagogical metadata
  objective: "Apply hash maps to achieve O(1) lookups for complement finding",
  bloomLevel: "Application", // Remember | Understand | Apply | Analyze | Evaluate | Create
  misconceptions: [
    "Using nested loops is always wrong (it's fine for small inputs)",
    "Hash maps are only for counting (they're for any key-value mapping)"
  ],
  prerequisites: ["arrays", "objects", "for loops"],
  transferChallenges: [
    "Find three numbers that sum to target",
    "Find pairs with difference k"
  ],
  phases: {
    conceptIsolation: {
      objective: "Understand the complement relationship",
      steps: ["task-1-id"],
      checkForUnderstanding: "Why do we need to find complement? What is complement?"
    },
    mentalModel: {
      objective: "Build mental model: array → hash map → lookup",
      steps: ["task-2-id"],
      checkForUnderstanding: "Explain the transformation in your own words"
    },
    guidedConstruction: {
      objective: "Build solution with guidance",
      steps: ["task-3-id", "task-4-id"],
      checkForUnderstanding: "What invariant does the hash map maintain?"
    },
    independentBuild: {
      objective: "Build solution independently",
      steps: ["task-5-id"],
      checkForUnderstanding: "Explain your approach before coding"
    },
    transfer: {
      objective: "Apply pattern to new problem",
      challenge: "Find three numbers that sum to target",
      checkForUnderstanding: "How does this relate to twoSum?"
    },
    reflection: {
      required: true,
      prompts: [
        "What mental model did you use?",
        "What would you do differently?",
        "Where else could you apply this pattern?"
      ]
    }
  }
}
```

### B. Tutorial Step Enhancement (openai-service.js output)

```javascript
{
  screens: [
    {
      title: "Understanding the Problem",
      content: "...",
      // NEW: Pedagogical metadata
      objective: "Identify the complement relationship",
      whyThisStep: "Before coding, we need to understand the mathematical relationship. This reduces cognitive load when implementing.",
      bloomLevel: "Understand",
      cognitiveLoad: "Low", // Low | Medium | High
      checkForUnderstanding: "What is the complement of 7 if target is 10?",
      commonMisconception: "Students often think complement means 'opposite' rather than 'what adds to target'"
    }
  ]
}
```

### C. Learning Artifacts Schema (tracking-service.js)

```javascript
{
  userId: "user-123",
  challengeId: "js-1",
  attemptId: "attempt-456",
  timestamp: "2026-02-10T15:30:00Z",
  
  // Prediction (before hint/solution)
  prediction: {
    timestamp: "2026-02-10T15:30:00Z",
    prompt: "Before we show you the solution, what approach do you think will work?",
    response: "I think I'll use a hash map to store seen numbers...",
    accuracy: null // Will be set after completion
  },
  
  // Reflection (after completion)
  reflection: {
    timestamp: "2026-02-10T15:45:00Z",
    responses: [
      "I used a hash map because I needed O(1) lookups",
      "I would start with edge cases next time",
      "I could use this pattern for finding pairs in other problems"
    ],
    submitted: true
  },
  
  // Reasoning Rubric (self-assessment)
  rubric: {
    framing: 4, // 1-5 scale
    invariants: 3,
    tradeoffs: 4,
    debugging: 3,
    transfer: 4,
    notes: "I understood the tradeoff between time and space"
  },
  
  // Transfer attempt
  transfer: {
    challengeId: "js-2", // Three Sum
    attempted: true,
    completed: false,
    timestamp: "2026-02-10T16:00:00Z"
  },
  
  // Learning metrics
  metrics: {
    hintCount: 2,
    timeToComplete: 1800, // seconds
    predictionAccuracy: "high", // high | medium | low (based on approach match)
    transferSuccess: false
  }
}
```

### D. User Learning Profile (user-service.js extension)

```javascript
{
  userId: "user-123",
  // ... existing fields ...
  
  // NEW: Learning analytics
  learningProfile: {
    conceptMastery: {
      "hash-maps": 0.85, // 0-1 scale
      "two-pointers": 0.60,
      "sliding-window": 0.40
    },
    bloomDistribution: {
      "Remember": 0.10,
      "Understand": 0.20,
      "Apply": 0.50,
      "Analyze": 0.15,
      "Evaluate": 0.04,
      "Create": 0.01
    },
    hintDependency: 0.35, // Average hints per challenge (0-1 scale)
    predictionAccuracy: 0.70, // Average prediction accuracy
    transferSuccessRate: 0.45,
    averageCompletionTime: 2400 // seconds
  }
}
```

---

## 3. ENDPOINTS

### New Endpoints (server.js)

```javascript
// Save prediction before hint/solution
POST /api/save-prediction
Body: {
  challengeId: "js-1",
  attemptId: "attempt-456",
  prompt: "What approach do you think will work?",
  response: "I think I'll use a hash map..."
}
Response: { success: true, predictionId: "pred-123" }

// Save reflection after completion
POST /api/save-reflection
Body: {
  challengeId: "js-1",
  attemptId: "attempt-456",
  responses: ["response1", "response2", "response3"]
}
Response: { success: true, reflectionId: "ref-123" }

// Save reasoning rubric
POST /api/save-rubric
Body: {
  challengeId: "js-1",
  attemptId: "attempt-456",
  rubric: {
    framing: 4,
    invariants: 3,
    tradeoffs: 4,
    debugging: 3,
    transfer: 4,
    notes: "optional notes"
  }
}
Response: { success: true, rubricId: "rub-123" }

// Save transfer attempt
POST /api/save-transfer
Body: {
  challengeId: "js-1",
  transferChallengeId: "js-2",
  attemptId: "attempt-456",
  completed: false
}
Response: { success: true, transferId: "trans-123" }

// Get learning analytics
GET /api/learning-analytics
Query: ?userId=user-123
Response: {
  conceptMastery: { ... },
  bloomDistribution: { ... },
  hintDependency: 0.35,
  predictionAccuracy: 0.70,
  transferSuccessRate: 0.45,
  averageCompletionTime: 2400
}

// Get challenge metadata with pedagogy
GET /api/challenge-metadata/:challengeId
Response: {
  ...challenge data,
  objective: "...",
  bloomLevel: "Application",
  phases: { ... },
  misconceptions: [ ... ]
}

// Runtime Lab: Get demo structure
GET /api/runtime-lab/:demoId
Response: {
  demoId: "js-runtime-explorer",
  title: "JavaScript Runtime Explorer",
  objective: "Understand execution context, call stack, heap, and closures",
  steps: [
    {
      stepId: "step-1",
      title: "Execution Context",
      objective: "...",
      whyThisStep: "...",
      checkForUnderstanding: "...",
      interactive: true
    }
  ],
  transferChallenge: {
    title: "Trace this code execution",
    code: "..."
  }
}
```

---

## 4. FILE-BY-FILE MODIFICATIONS

### server/question-bank.js

**Changes:**
- Add `pedagogicalMetadata` function that enriches challenge objects
- Add metadata for at least 3 example challenges (js-1, js-24, react-1)
- Export function `getChallengeMetadata(challengeId)` that returns enriched challenge
- Keep backward compatibility: existing code still works, metadata is optional

**Diff-style changes:**
```javascript
// ADD: After questionBank definition
export function getChallengeMetadata(challengeId) {
  // Returns challenge with pedagogical metadata
}

// ADD: Pedagogical metadata object
const pedagogicalMetadata = {
  "js-1": {
    objective: "Apply hash maps to achieve O(1) lookups...",
    bloomLevel: "Application",
    // ... full metadata
  }
  // ... more challenges
}
```

### server/tracking-service.js

**Changes:**
- Add `savePrediction(userId, challengeId, attemptId, prediction)`
- Add `saveReflection(userId, challengeId, attemptId, reflection)`
- Add `saveRubric(userId, challengeId, attemptId, rubric)`
- Add `saveTransfer(userId, challengeId, transferChallengeId, attemptId, completed)`
- Add `getLearningArtifacts(userId, challengeId)` - returns all artifacts for a challenge
- Extend tracking file schema to include new fields

**Diff-style changes:**
```javascript
// ADD: New functions
export async function savePrediction(...) { ... }
export async function saveReflection(...) { ... }
export async function saveRubric(...) { ... }
export async function saveTransfer(...) { ... }
export async function getLearningArtifacts(...) { ... }

// MODIFY: Tracking data structure to include:
// - predictions: []
// - reflections: []
// - rubrics: []
// - transfers: []
```

### server/user-service.js

**Changes:**
- Add `updateLearningProfile(userId, metrics)` - aggregates learning analytics
- Add `getLearningProfile(userId)` - returns learning profile
- Extend user data schema to include `learningProfile` field

**Diff-style changes:**
```javascript
// ADD: New functions
export async function updateLearningProfile(userId, metrics) { ... }
export async function getLearningProfile(userId) { ... }

// MODIFY: Default user data to include:
// learningProfile: { conceptMastery: {}, bloomDistribution: {}, ... }
```

### server/openai-service.js

**Changes:**
- Modify `generateTutorialSteps()` prompt to include:
  - "Why this step?" rationale
  - Bloom level per step
  - Check-for-understanding prompts
  - Common misconceptions
- Add `generateTransferChallenge(challengeId, technology)` - generates transfer challenge
- Add `generateReflectionPrompts(challengeId)` - generates reflection questions

**Diff-style changes:**
```javascript
// MODIFY: generateTutorialSteps prompt to request:
// - objective per step
// - whyThisStep rationale
// - bloomLevel
// - checkForUnderstanding
// - commonMisconception

// ADD: New functions
export async function generateTransferChallenge(...) { ... }
export async function generateReflectionPrompts(...) { ... }
```

### server/server.js

**Changes:**
- Add 7 new endpoints (see Endpoints section above)
- Import new tracking-service functions
- Import new user-service functions
- Add route handler for `/runtime-lab/:demoId`

**Diff-style changes:**
```javascript
// ADD: Import new functions
import { savePrediction, saveReflection, ... } from './tracking-service.js';
import { updateLearningProfile, getLearningProfile } from './user-service.js';
import { getChallengeMetadata } from './question-bank.js';

// ADD: New route handlers
app.post('/api/save-prediction', ...)
app.post('/api/save-reflection', ...)
app.post('/api/save-rubric', ...)
app.post('/api/save-transfer', ...)
app.get('/api/learning-analytics', ...)
app.get('/api/challenge-metadata/:challengeId', ...)
app.get('/api/runtime-lab/:demoId', ...)
```

### public/js/app.js

**Changes:**
- Add `displayPedagogyMetadata(challengeId)` - shows objective, Bloom level, misconceptions
- Add `showWhyThisStep(stepIndex)` - displays "Why this step?" for current tutorial step
- Add `showPredictionPrompt()` - shows prediction prompt before hint/solution
- Add `showReflectionScreen()` - shows reflection form after completion
- Add `showRubricForm()` - shows self-assessment rubric
- Add `showTransferChallenge()` - shows transfer challenge
- Add `renderRuntimeLab(demoId)` - renders Runtime Lab demo
- Modify `displayObjectives()` to show Bloom badges
- Modify `renderScreen()` to include "Why this step?" section
- Add navigation to Runtime Lab

**Diff-style changes:**
```javascript
// ADD: New UI functions
function displayPedagogyMetadata(challengeId) { ... }
function showWhyThisStep(stepIndex) { ... }
function showPredictionPrompt() { ... }
function showReflectionScreen() { ... }
function showRubricForm() { ... }
function showTransferChallenge() { ... }
function renderRuntimeLab(demoId) { ... }

// MODIFY: displayObjectives() to fetch and display metadata
// MODIFY: renderScreen() to show "Why this step?" section
// MODIFY: handleTaskClick() to show prediction prompt before hints
// MODIFY: After task completion, show reflection screen
```

### public/index.html

**Changes:**
- Add "Learning Design" link in navigation
- Add "Runtime Lab" link in navigation
- Add reflection modal/section
- Add rubric form section
- Add transfer challenge section
- Add "Why this step?" section in tutorial view
- Add Bloom badge display in objectives view

**Diff-style changes:**
```html
<!-- ADD: Navigation items -->
<a href="#learning-design">Learning Design</a>
<a href="#runtime-lab">Runtime Lab</a>

<!-- ADD: New sections -->
<div id="reflectionModal" class="modal hidden">...</div>
<div id="rubricForm" class="form-section hidden">...</div>
<div id="transferChallenge" class="challenge-section hidden">...</div>
<div id="whyThisStep" class="pedagogy-section">...</div>
<div id="bloomBadge" class="badge">...</div>
```

### public/css/styles.css

**Changes:**
- Add `.pedagogy-section` styles
- Add `.bloom-badge` styles (different colors per level)
- Add `.reflection-modal` styles
- Add `.rubric-form` styles
- Add `.transfer-challenge` styles
- Add `.runtime-lab` styles
- Add `.why-this-step` styles

**Diff-style changes:**
```css
/* ADD: New style blocks */
.pedagogy-section { ... }
.bloom-badge { ... }
.reflection-modal { ... }
.rubric-form { ... }
.transfer-challenge { ... }
.runtime-lab { ... }
.why-this-step { ... }
```

---

## 5. STARTER STUBS

### A. Challenge Metadata Example (question-bank.js)

```javascript
// Add after questionBank definition
const pedagogicalMetadata = {
  "js-1": {
    objective: "Apply hash maps to achieve O(1) lookups for complement finding in array problems",
    bloomLevel: "Application",
    misconceptions: [
      "Using nested loops is always wrong (it's fine for small inputs)",
      "Hash maps are only for counting (they're for any key-value mapping)",
      "You must use a hash map (you can use Set for simpler cases)"
    ],
    prerequisites: ["arrays", "objects", "for loops", "arithmetic operations"],
    transferChallenges: [
      {
        id: "js-2",
        title: "Three Sum",
        relation: "Extends twoSum pattern to three numbers"
      },
      {
        id: "js-7",
        title: "Array Intersection",
        relation: "Uses similar lookup pattern"
      }
    ],
    phases: {
      conceptIsolation: {
        objective: "Understand the complement relationship: if target is 10 and we see 7, we need 3",
        stepIds: ["step-1"],
        checkForUnderstanding: "What is the complement of 7 if target is 10? Why do we need complements?"
      },
      mentalModel: {
        objective: "Build mental model: array → hash map → O(1) lookup → find complement",
        stepIds: ["step-2", "step-3"],
        checkForUnderstanding: "Explain the transformation in your own words. Why does hash map help?"
      },
      guidedConstruction: {
        objective: "Build solution with step-by-step guidance",
        stepIds: ["step-4", "step-5", "step-6"],
        checkForUnderstanding: "What invariant does the hash map maintain? (seen numbers → their indices)"
      },
      independentBuild: {
        objective: "Build complete solution independently",
        stepIds: ["step-7"],
        checkForUnderstanding: "Explain your approach before coding. What edge cases will you handle?"
      },
      transfer: {
        objective: "Apply hash map pattern to new problem",
        challenge: {
          id: "transfer-1",
          title: "Find pairs with difference k",
          task: "Given array and k, find all pairs (a, b) where |a - b| = k"
        },
        checkForUnderstanding: "How does this relate to twoSum? What's the same? What's different?"
      },
      reflection: {
        required: true,
        prompts: [
          "What mental model did you use? (hash map for O(1) lookup)",
          "What would you do differently next time?",
          "Where else could you apply this pattern? (any problem needing fast lookups)"
        ]
      }
    }
  }
};

export function getChallengeMetadata(challengeId) {
  const metadata = pedagogicalMetadata[challengeId];
  if (!metadata) {
    // Return minimal metadata for challenges without full metadata
    return {
      objective: null,
      bloomLevel: null,
      misconceptions: [],
      prerequisites: [],
      transferChallenges: [],
      phases: null
    };
  }
  return metadata;
}
```

### B. Tracking Service Functions (tracking-service.js)

```javascript
// Add to tracking-service.js

export async function savePrediction(userId, challengeId, attemptId, prediction) {
  try {
    const trackingData = await loadTrackingData();
    
    if (!trackingData[userId]) {
      trackingData[userId] = {};
    }
    if (!trackingData[userId][challengeId]) {
      trackingData[userId][challengeId] = {};
    }
    if (!trackingData[userId][challengeId][attemptId]) {
      trackingData[userId][challengeId][attemptId] = {
        predictions: [],
        reflections: [],
        rubrics: [],
        transfers: []
      };
    }
    
    const predictionData = {
      ...prediction,
      timestamp: new Date().toISOString()
    };
    
    trackingData[userId][challengeId][attemptId].predictions.push(predictionData);
    await saveTrackingData(trackingData);
    
    return { success: true, predictionId: `pred-${Date.now()}` };
  } catch (error) {
    console.error('Error saving prediction:', error);
    return { success: false, error: error.message };
  }
}

export async function saveReflection(userId, challengeId, attemptId, reflection) {
  try {
    const trackingData = await loadTrackingData();
    
    if (!trackingData[userId]) {
      trackingData[userId] = {};
    }
    if (!trackingData[userId][challengeId]) {
      trackingData[userId][challengeId] = {};
    }
    if (!trackingData[userId][challengeId][attemptId]) {
      trackingData[userId][challengeId][attemptId] = {
        predictions: [],
        reflections: [],
        rubrics: [],
        transfers: []
      };
    }
    
    const reflectionData = {
      ...reflection,
      timestamp: new Date().toISOString(),
      submitted: true
    };
    
    trackingData[userId][challengeId][attemptId].reflections.push(reflectionData);
    await saveTrackingData(trackingData);
    
    return { success: true, reflectionId: `ref-${Date.now()}` };
  } catch (error) {
    console.error('Error saving reflection:', error);
    return { success: false, error: error.message };
  }
}

export async function saveRubric(userId, challengeId, attemptId, rubric) {
  try {
    const trackingData = await loadTrackingData();
    
    if (!trackingData[userId]) {
      trackingData[userId] = {};
    }
    if (!trackingData[userId][challengeId]) {
      trackingData[userId][challengeId] = {};
    }
    if (!trackingData[userId][challengeId][attemptId]) {
      trackingData[userId][challengeId][attemptId] = {
        predictions: [],
        reflections: [],
        rubrics: [],
        transfers: []
      };
    }
    
    const rubricData = {
      ...rubric,
      timestamp: new Date().toISOString()
    };
    
    trackingData[userId][challengeId][attemptId].rubrics.push(rubricData);
    await saveTrackingData(trackingData);
    
    return { success: true, rubricId: `rub-${Date.now()}` };
  } catch (error) {
    console.error('Error saving rubric:', error);
    return { success: false, error: error.message };
  }
}

export async function saveTransfer(userId, challengeId, transferChallengeId, attemptId, completed) {
  try {
    const trackingData = await loadTrackingData();
    
    if (!trackingData[userId]) {
      trackingData[userId] = {};
    }
    if (!trackingData[userId][challengeId]) {
      trackingData[userId][challengeId] = {};
    }
    if (!trackingData[userId][challengeId][attemptId]) {
      trackingData[userId][challengeId][attemptId] = {
        predictions: [],
        reflections: [],
        rubrics: [],
        transfers: []
      };
    }
    
    const transferData = {
      transferChallengeId,
      completed,
      timestamp: new Date().toISOString()
    };
    
    trackingData[userId][challengeId][attemptId].transfers.push(transferData);
    await saveTrackingData(trackingData);
    
    return { success: true, transferId: `trans-${Date.now()}` };
  } catch (error) {
    console.error('Error saving transfer:', error);
    return { success: false, error: error.message };
  }
}

export async function getLearningArtifacts(userId, challengeId, attemptId) {
  try {
    const trackingData = await loadTrackingData();
    return trackingData[userId]?.[challengeId]?.[attemptId] || {
      predictions: [],
      reflections: [],
      rubrics: [],
      transfers: []
    };
  } catch (error) {
    console.error('Error getting learning artifacts:', error);
    return {
      predictions: [],
      reflections: [],
      rubrics: [],
      transfers: []
    };
  }
}
```

### C. Server Endpoints (server.js)

```javascript
// Add to server.js after existing endpoints

import { savePrediction, saveReflection, saveRubric, saveTransfer, getLearningArtifacts } from './tracking-service.js';
import { updateLearningProfile, getLearningProfile } from './user-service.js';
import { getChallengeMetadata } from './question-bank.js';

// Save prediction
app.post('/api/save-prediction', async (req, res) => {
  try {
    const { userId, challengeId, attemptId, prompt, response } = req.body;
    if (!userId || !challengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, and attemptId are required' });
    }
    
    const result = await savePrediction(userId, challengeId, attemptId, {
      prompt,
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
      responses
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
    const { userId, challengeId, transferChallengeId, attemptId, completed } = req.body;
    if (!userId || !challengeId || !transferChallengeId || !attemptId) {
      return res.status(400).json({ error: 'userId, challengeId, transferChallengeId, and attemptId are required' });
    }
    
    const result = await saveTransfer(userId, challengeId, transferChallengeId, attemptId, completed);
    
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

// Get challenge metadata
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

// Runtime Lab demo
app.get('/api/runtime-lab/:demoId', async (req, res) => {
  try {
    const { demoId } = req.params;
    
    // For now, return static demo structure
    // Later, this can be generated dynamically or loaded from files
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
          }
          // ... more steps
        ],
        transferChallenge: {
          title: 'Trace this code execution',
          code: 'function outer() { const x = 1; function inner() { console.log(x); } return inner; }'
        }
      }
      // ... more demos
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
```

### D. Client-Side UI Functions (app.js)

```javascript
// Add to app.js

// Display pedagogy metadata
async function displayPedagogyMetadata(challengeId) {
  try {
    const response = await fetch(`/api/challenge-metadata/${challengeId}`);
    const data = await response.json();
    
    if (data.success && data.metadata) {
      const metadata = data.metadata;
      
      // Display objective
      const objectiveEl = document.getElementById('challengeObjective');
      if (objectiveEl && metadata.objective) {
        objectiveEl.textContent = metadata.objective;
      }
      
      // Display Bloom badge
      const bloomEl = document.getElementById('bloomBadge');
      if (bloomEl && metadata.bloomLevel) {
        bloomEl.textContent = metadata.bloomLevel;
        bloomEl.className = `bloom-badge bloom-${metadata.bloomLevel.toLowerCase()}`;
      }
      
      // Display misconceptions
      const misconceptionsEl = document.getElementById('commonMisconceptions');
      if (misconceptionsEl && metadata.misconceptions) {
        misconceptionsEl.innerHTML = metadata.misconceptions.map(m => 
          `<li>${m}</li>`
        ).join('');
      }
    }
  } catch (error) {
    console.error('Error loading pedagogy metadata:', error);
  }
}

// Show "Why this step?" section
function showWhyThisStep(stepIndex) {
  const currentScreen = currentTutorial?.screens?.[stepIndex];
  if (!currentScreen || !currentScreen.whyThisStep) return;
  
  const whySection = document.getElementById('whyThisStep');
  if (whySection) {
    whySection.innerHTML = `
      <div class="why-this-step">
        <h4>Why this step?</h4>
        <p>${currentScreen.whyThisStep}</p>
      </div>
    `;
    whySection.classList.remove('hidden');
  }
}

// Show prediction prompt before hint/solution
async function showPredictionPrompt() {
  const predictionModal = document.getElementById('predictionModal');
  if (!predictionModal) return;
  
  predictionModal.classList.remove('hidden');
  
  const submitBtn = predictionModal.querySelector('#submitPrediction');
  if (submitBtn) {
    submitBtn.onclick = async () => {
      const response = predictionModal.querySelector('#predictionResponse').value;
      
      // Save prediction
      await fetch('/api/save-prediction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser?.id || 'anonymous',
          challengeId: currentTask,
          attemptId: `attempt-${Date.now()}`,
          prompt: 'What approach do you think will work?',
          response
        })
      });
      
      predictionModal.classList.add('hidden');
    };
  }
}

// Show reflection screen after completion
async function showReflectionScreen() {
  const reflectionModal = document.getElementById('reflectionModal');
  if (!reflectionModal) return;
  
  // Get reflection prompts from metadata
  const metadata = await fetch(`/api/challenge-metadata/${currentTask}`).then(r => r.json());
  const prompts = metadata.metadata?.phases?.reflection?.prompts || [
    'What mental model did you use?',
    'What would you do differently?',
    'Where else could you apply this pattern?'
  ];
  
  reflectionModal.innerHTML = `
    <div class="reflection-modal">
      <h3>Reflection</h3>
      ${prompts.map((prompt, i) => `
        <div class="reflection-prompt">
          <label>${prompt}</label>
          <textarea id="reflection-${i}" rows="3"></textarea>
        </div>
      `).join('')}
      <button onclick="submitReflection()">Submit Reflection</button>
    </div>
  `;
  
  reflectionModal.classList.remove('hidden');
}

// Submit reflection
async function submitReflection() {
  const responses = [];
  for (let i = 0; i < 3; i++) {
    const el = document.getElementById(`reflection-${i}`);
    if (el) responses.push(el.value);
  }
  
  await fetch('/api/save-reflection', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: currentUser?.id || 'anonymous',
      challengeId: currentTask,
      attemptId: `attempt-${Date.now()}`,
      responses
    })
  });
  
  document.getElementById('reflectionModal').classList.add('hidden');
}

// Render Runtime Lab
async function renderRuntimeLab(demoId) {
  try {
    const response = await fetch(`/api/runtime-lab/${demoId}`);
    const data = await response.json();
    
    if (data.success && data.demo) {
      const demo = data.demo;
      
      // Render demo structure
      const labContainer = document.getElementById('runtimeLabContainer');
      if (labContainer) {
        labContainer.innerHTML = `
          <div class="runtime-lab">
            <h2>${demo.title}</h2>
            <p class="objective">${demo.objective}</p>
            <div class="demo-steps">
              ${demo.steps.map(step => `
                <div class="demo-step">
                  <h3>${step.title}</h3>
                  <p><strong>Objective:</strong> ${step.objective}</p>
                  <p><strong>Why this step?</strong> ${step.whyThisStep}</p>
                  <div class="check-understanding">
                    <strong>Check your thinking:</strong> ${step.checkForUnderstanding}
                  </div>
                </div>
              `).join('')}
            </div>
            <div class="transfer-challenge">
              <h3>Transfer Challenge</h3>
              <pre>${demo.transferChallenge.code}</pre>
            </div>
          </div>
        `;
      }
    }
  } catch (error) {
    console.error('Error rendering runtime lab:', error);
  }
}
```

### E. HTML Structure Additions (index.html)

```html
<!-- Add to index.html -->

<!-- Navigation additions -->
<nav>
  <!-- ... existing nav ... -->
  <a href="#learning-design">Learning Design</a>
  <a href="#runtime-lab">Runtime Lab</a>
</nav>

<!-- Pedagogy metadata display (add to objectives view) -->
<div id="pedagogyMetadata" class="pedagogy-section hidden">
  <div id="challengeObjective"></div>
  <div id="bloomBadge" class="bloom-badge"></div>
  <div id="commonMisconceptions">
    <h4>Common Misconceptions</h4>
    <ul></ul>
  </div>
</div>

<!-- Why this step section (add to tutorial view) -->
<div id="whyThisStep" class="why-this-step hidden">
  <!-- Populated by showWhyThisStep() -->
</div>

<!-- Prediction modal -->
<div id="predictionModal" class="modal hidden">
  <div class="modal-content">
    <h3>Check your thinking</h3>
    <p>Before we show you the solution, what approach do you think will work?</p>
    <textarea id="predictionResponse" rows="4"></textarea>
    <button id="submitPrediction">Submit</button>
  </div>
</div>

<!-- Reflection modal -->
<div id="reflectionModal" class="modal hidden">
  <!-- Populated by showReflectionScreen() -->
</div>

<!-- Rubric form -->
<div id="rubricForm" class="form-section hidden">
  <h3>Self-Assessment</h3>
  <form id="rubricFormElement">
    <label>Framing (1-5): <input type="number" min="1" max="5" name="framing"></label>
    <label>Invariants (1-5): <input type="number" min="1" max="5" name="invariants"></label>
    <label>Tradeoffs (1-5): <input type="number" min="1" max="5" name="tradeoffs"></label>
    <label>Debugging (1-5): <input type="number" min="1" max="5" name="debugging"></label>
    <label>Transfer (1-5): <input type="number" min="1" max="5" name="transfer"></label>
    <textarea name="notes" placeholder="Optional notes"></textarea>
    <button type="submit">Submit</button>
  </form>
</div>

<!-- Runtime Lab container -->
<div id="runtimeLabContainer" class="runtime-lab-container hidden">
  <!-- Populated by renderRuntimeLab() -->
</div>
```

### F. CSS Additions (styles.css)

```css
/* Add to styles.css */

/* Pedagogy section */
.pedagogy-section {
  background: rgba(30, 42, 58, 0.05);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
}

/* Bloom badges */
.bloom-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 8px 0;
}

.bloom-remember { background: #e3f2fd; color: #1976d2; }
.bloom-understand { background: #f3e5f5; color: #7b1fa2; }
.bloom-apply { background: #e8f5e9; color: #388e3c; }
.bloom-analyze { background: #fff3e0; color: #f57c00; }
.bloom-evaluate { background: #fce4ec; color: #c2185b; }
.bloom-create { background: #e0f2f1; color: #00796b; }

/* Why this step */
.why-this-step {
  background: rgba(0, 255, 136, 0.1);
  border-left: 3px solid var(--neon);
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.why-this-step h4 {
  margin: 0 0 8px 0;
  color: var(--navy);
  font-size: 0.9rem;
}

/* Reflection modal */
.reflection-modal {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
}

.reflection-prompt {
  margin-bottom: 20px;
}

.reflection-prompt label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.reflection-prompt textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid rgba(30, 42, 58, 0.2);
  border-radius: 6px;
  font-family: inherit;
}

/* Rubric form */
.rubric-form {
  max-width: 500px;
  margin: 0 auto;
}

.rubric-form label {
  display: block;
  margin-bottom: 12px;
}

.rubric-form input[type="number"] {
  width: 60px;
  margin-left: 8px;
}

/* Runtime Lab */
.runtime-lab {
  padding: 24px;
}

.demo-step {
  background: rgba(30, 42, 58, 0.05);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.check-understanding {
  background: rgba(0, 255, 136, 0.1);
  padding: 12px;
  border-radius: 4px;
  margin-top: 12px;
}

.transfer-challenge {
  background: rgba(30, 42, 58, 0.1);
  padding: 20px;
  border-radius: 8px;
  margin-top: 24px;
}

.transfer-challenge pre {
  background: var(--navy);
  color: var(--white);
  padding: 16px;
  border-radius: 6px;
  overflow-x: auto;
}
```

---

## IMPLEMENTATION PRIORITY

1. **Week 1**: Metadata foundation (question-bank.js, challenge metadata)
2. **Week 2**: Tracking layer (tracking-service.js, endpoints)
3. **Week 3**: UI components (pedagogy display, "Why this step?", reflection)
4. **Week 4**: Runtime Lab shells
5. **Week 5**: Analytics dashboard

---

## BACKWARD COMPATIBILITY

- All new features are optional/additive
- Existing challenges work without metadata (graceful degradation)
- Tracking functions return empty arrays if no data exists
- UI components check for data before displaying
- No breaking changes to existing APIs

---

## 6. PRODUCTION-GRADE LEARNING SYSTEM ENHANCEMENTS

This section upgrades INPACT from a "strong LXD portfolio layer" to a "production-grade learning system design" with adaptive feedback, scaffold fading, stable session tracking, continuous transfer, analytics-driven decisions, and inclusive UX.

### 6.1 FEEDBACK LOOP MECHANICS

#### A. Misconception-Aware Feedback System

**Problem**: Current architecture captures misconceptions but doesn't use them adaptively when learners fail check-for-understanding prompts.

**Solution**: Implement targeted feedback that addresses specific misconceptions based on learner responses.

**Data Model Enhancement** (tracking-service.js):

```javascript
// Enhanced attempt schema
{
  attemptId: "attempt-abc123", // Stable ID, created once per session
  challengeId: "js-1",
  userId: "user-123",
  status: "in-progress", // in-progress | completed | abandoned
  createdAt: "2026-02-10T15:30:00Z",
  completedAt: null,
  
  // Check-for-understanding responses
  checkResponses: [
    {
      stepId: "step-1",
      prompt: "What is the complement of 7 if target is 10?",
      response: "I think it's -3", // Incorrect
      timestamp: "2026-02-10T15:31:00Z",
      correct: false,
      misconceptionDetected: "complement-arithmetic-error",
      feedbackShown: {
        type: "misconception-hint",
        content: "The complement is what you add to 7 to get 10. Try: 7 + ? = 10",
        counterexample: "If target is 10 and we see 7, we need 3 (not -3). Here's why: 7 + 3 = 10"
      },
      retryAllowed: true,
      retryCount: 0
    }
  ],
  
  // Hint ladder tracking
  hintLadder: {
    currentLevel: 1, // 1-4
    hintsUsed: [
      {
        level: 1,
        type: "concept",
        content: "Think about what number, when added to the current number, equals the target",
        timestamp: "2026-02-10T15:32:00Z"
      }
    ],
    maxLevel: 4
  },
  
  // Error classification for adaptive feedback
  errorHistory: [
    {
      submissionId: "sub-1",
      code: "function twoSum(arr, target) { ... }",
      errorType: "logic", // syntax | logic | invariant | edge-case
      errorDetails: "Missing return statement",
      hintLevelSuggested: 2, // Process hint
      timestamp: "2026-02-10T15:35:00Z"
    },
    {
      submissionId: "sub-2",
      code: "function twoSum(arr, target) { return []; }",
      errorType: "invariant",
      errorDetails: "Solution doesn't maintain complement lookup invariant",
      hintLevelSuggested: 3, // Skeleton hint
      timestamp: "2026-02-10T15:40:00Z"
    }
  ]
}
```

**Feedback Flow Logic** (app.js):

```javascript
// Pseudocode for misconception-aware feedback
async function handleCheckForUnderstanding(stepId, userResponse) {
  const metadata = await getChallengeMetadata(currentChallengeId);
  const step = getStepMetadata(stepId);
  const attempt = getCurrentAttempt();
  
  // Evaluate response (can use AI or pattern matching)
  const evaluation = await evaluateResponse(userResponse, step.checkForUnderstanding);
  
  if (!evaluation.correct) {
    // Detect which misconception matches
    const matchedMisconception = detectMisconception(
      userResponse,
      metadata.misconceptions,
      step.commonMisconception
    );
    
    if (matchedMisconception) {
      // Show targeted feedback
      showMisconceptionFeedback({
        misconception: matchedMisconception,
        counterexample: getCounterexample(matchedMisconception),
        retryAllowed: true
      });
      
      // Track for analytics
      await saveCheckResponse(attempt.attemptId, {
        stepId,
        response: userResponse,
        correct: false,
        misconceptionDetected: matchedMisconception.id,
        feedbackShown: "misconception-hint"
      });
    } else {
      // Generic incorrect feedback
      showGenericFeedback("Not quite. Let's think about this differently...");
    }
  } else {
    // Correct response - proceed
    proceedToNextStep();
  }
}
```

**Event → Response Mapping**:

| Event | Condition | Response |
|-------|-----------|----------|
| Check-for-understanding incorrect | Misconception detected | Show targeted misconception hint + counterexample + retry |
| Check-for-understanding incorrect | No misconception match | Show generic hint + retry |
| Check-for-understanding correct | - | Proceed to next step |
| Code submission incorrect | Syntax error | Show syntax hint (Level 2) |
| Code submission incorrect | Logic error | Show process hint (Level 2) |
| Code submission incorrect | Invariant violation | Show skeleton hint (Level 3) |
| Code submission incorrect | Edge case failure | Show edge case hint (Level 2) |
| 3+ incorrect submissions | - | Offer full solution (Level 4) |

#### B. Hint Ladder Strategy

**Four-Level Hint System**:

```javascript
// Hint level definitions
const HINT_LEVELS = {
  1: {
    name: "Concept Hint",
    description: "No code, just conceptual guidance",
    example: "Think about what data structure allows O(1) lookups"
  },
  2: {
    name: "Process Hint",
    description: "Algorithm steps, no code",
    example: "1. Iterate through array. 2. For each number, calculate complement. 3. Check if complement exists in seen numbers."
  },
  3: {
    name: "Skeleton Hint",
    description: "Partial code structure",
    example: "function twoSum(arr, target) {\n  const seen = {};\n  // Your code here\n}"
  },
  4: {
    name: "Full Solution",
    description: "Complete working code with explanation",
    example: "function twoSum(arr, target) {\n  const seen = {};\n  for (let i = 0; i < arr.length; i++) {\n    const complement = target - arr[i];\n    if (complement in seen) {\n      return [seen[complement], i];\n    }\n    seen[arr[i]] = i;\n  }\n  return [];\n}"
  }
};

// Hint progression logic
function getNextHintLevel(currentLevel, errorType, retryCount) {
  // If syntax error, stay at Level 2 (process)
  if (errorType === "syntax" && currentLevel < 2) {
    return 2;
  }
  
  // If logic/invariant error, advance to Level 3 (skeleton)
  if ((errorType === "logic" || errorType === "invariant") && currentLevel < 3) {
    return 3;
  }
  
  // After 3 retries, offer Level 4 (full solution)
  if (retryCount >= 3 && currentLevel < 4) {
    return 4;
  }
  
  // Otherwise, increment by 1
  return Math.min(currentLevel + 1, 4);
}
```

**Tracking Hint Usage** (tracking-service.js):

```javascript
export async function recordHintUsage(userId, challengeId, attemptId, hintLevel, hintType) {
  const attempt = await getAttempt(userId, challengeId, attemptId);
  
  attempt.hintLadder.hintsUsed.push({
    level: hintLevel,
    type: hintType, // concept | process | skeleton | solution
    timestamp: new Date().toISOString()
  });
  
  attempt.hintLadder.currentLevel = Math.max(
    attempt.hintLadder.currentLevel,
    hintLevel
  );
  
  await saveAttempt(userId, challengeId, attemptId, attempt);
  
  // Update hint dependency metric
  await updateHintDependencyMetric(userId);
}
```

#### C. Retry Loop with Error Classification

**Error Classification System**:

```javascript
// Error classification function
async function classifyError(userCode, expectedOutput, actualOutput, testCases) {
  // Syntax errors
  if (hasSyntaxError(userCode)) {
    return {
      errorType: "syntax",
      severity: "high",
      nextHintLevel: 2, // Process hint
      message: "There's a syntax error in your code. Check for missing brackets, semicolons, or typos."
    };
  }
  
  // Logic errors (wrong algorithm)
  if (hasLogicError(userCode, expectedOutput, actualOutput)) {
    return {
      errorType: "logic",
      severity: "medium",
      nextHintLevel: 2, // Process hint
      message: "Your approach is on the right track, but there's a logical issue. Think about the algorithm steps."
    };
  }
  
  // Invariant violations (data structure misuse)
  if (hasInvariantViolation(userCode, testCases)) {
    return {
      errorType: "invariant",
      severity: "high",
      nextHintLevel: 3, // Skeleton hint
      message: "The data structure isn't maintaining the correct invariant. Review how you're storing and retrieving values."
    };
  }
  
  // Edge case failures
  if (failsEdgeCases(userCode, testCases)) {
    return {
      errorType: "edge-case",
      severity: "low",
      nextHintLevel: 2, // Process hint
      message: "Your solution works for most cases, but consider edge cases like empty arrays or single elements."
    };
  }
  
  return {
    errorType: "unknown",
    severity: "medium",
    nextHintLevel: 2,
    message: "Let's review your approach step by step."
  };
}
```

### 6.2 SCAFFOLD FADING LOGIC

**Mastery-Based Scaffold Adjustment**:

```javascript
// Scaffold fading rules
const SCAFFOLD_RULES = {
  // Early challenges (conceptMastery < 0.5)
  beginner: {
    predictionRequired: true,
    reflectionRequired: true,
    hintAvailability: "always", // Hints always available
    guidedBreakdown: true, // Full step-by-step breakdown
    checkForUnderstanding: "required", // Must answer before proceeding
    transferPrompt: "guided" // Transfer challenge with hints
  },
  
  // Mid-level (0.5 <= conceptMastery < 0.75)
  intermediate: {
    predictionRequired: false, // Optional but recommended
    reflectionRequired: true,
    hintAvailability: "on-demand", // Hints available but not pushed
    guidedBreakdown: true, // Still get breakdown but can skip steps
    checkForUnderstanding: "optional", // Can skip but recommended
    transferPrompt: "semi-guided" // Transfer with minimal hints
  },
  
  // Advanced (conceptMastery >= 0.75)
  advanced: {
    predictionRequired: false,
    reflectionRequired: false, // Optional, shorter prompts
    hintAvailability: "limited", // Max 2 hints per challenge
    guidedBreakdown: false, // No breakdown, independent build first
    checkForUnderstanding: "none", // No forced checks
    transferPrompt: "independent" // Transfer challenge, no hints
  }
};

// Determine scaffold level based on mastery
function getScaffoldLevel(conceptMastery, challengeConcepts) {
  // Get average mastery for challenge concepts
  const avgMastery = challengeConcepts.reduce((sum, concept) => {
    return sum + (conceptMastery[concept] || 0);
  }, 0) / challengeConcepts.length;
  
  if (avgMastery < 0.5) return "beginner";
  if (avgMastery < 0.75) return "intermediate";
  return "advanced";
}

// Apply scaffold rules to UI
function applyScaffoldRules(scaffoldLevel, challengeMetadata) {
  const rules = SCAFFOLD_RULES[scaffoldLevel];
  
  // Show/hide UI elements based on rules
  if (rules.predictionRequired) {
    document.getElementById('predictionGate').classList.remove('hidden');
    document.getElementById('predictionGate').setAttribute('required', 'true');
  } else {
    document.getElementById('predictionGate').classList.add('optional');
  }
  
  if (rules.hintAvailability === "limited") {
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.dataset.maxHints = "2";
    hintBtn.dataset.hintsUsed = "0";
  }
  
  if (!rules.guidedBreakdown) {
    // Skip to independent build phase
    skipToPhase("independentBuild");
  }
  
  // Adjust reflection prompts length
  if (scaffoldLevel === "advanced") {
    challengeMetadata.phases.reflection.prompts = challengeMetadata.phases.reflection.prompts.slice(0, 1);
  }
}
```

**Mastery Threshold Rules**:

```javascript
// Mastery calculation and thresholds
function calculateConceptMastery(userId, concept) {
  const attempts = getAttemptsForConcept(userId, concept);
  
  if (attempts.length === 0) return 0;
  
  // Factors:
  // - Completion rate (40%)
  // - Hint dependency (30%) - lower is better
  // - Transfer success (20%)
  // - Time to complete (10%) - faster is better (normalized)
  
  const completionRate = attempts.filter(a => a.status === "completed").length / attempts.length;
  const avgHintDependency = 1 - (attempts.reduce((sum, a) => sum + a.hintLadder.currentLevel, 0) / (attempts.length * 4));
  const transferSuccessRate = attempts.filter(a => a.transfers.some(t => t.completed)).length / attempts.length;
  const avgTime = attempts.reduce((sum, a) => sum + a.metrics.timeToComplete, 0) / attempts.length;
  const timeScore = Math.max(0, 1 - (avgTime / 3600)); // Normalize to 1 hour max
  
  const mastery = (
    completionRate * 0.4 +
    avgHintDependency * 0.3 +
    transferSuccessRate * 0.2 +
    timeScore * 0.1
  );
  
  return Math.min(1, Math.max(0, mastery));
}
```

### 6.3 STABLE ATTEMPT / SESSION MODEL

**Attempt Lifecycle**:

```javascript
// Attempt schema (REVISED - single attemptId per session)
{
  attemptId: "attempt-abc123", // Generated once, reused for entire session
  challengeId: "js-1",
  userId: "user-123",
  status: "in-progress", // in-progress | completed | abandoned
  createdAt: "2026-02-10T15:30:00Z",
  startedAt: "2026-02-10T15:30:00Z",
  completedAt: null,
  abandonedAt: null,
  
  // All events reference this same attemptId
  predictions: [
    {
      predictionId: "pred-1", // Internal ID for this prediction
      attemptId: "attempt-abc123", // References parent attempt
      timestamp: "2026-02-10T15:31:00Z",
      prompt: "...",
      response: "..."
    }
  ],
  
  hints: [
    {
      hintId: "hint-1",
      attemptId: "attempt-abc123",
      level: 1,
      timestamp: "2026-02-10T15:32:00Z"
    }
  ],
  
  submissions: [
    {
      submissionId: "sub-1",
      attemptId: "attempt-abc123",
      code: "...",
      timestamp: "2026-02-10T15:35:00Z",
      correct: false,
      errorClassification: { ... }
    }
  ],
  
  reflections: [
    {
      reflectionId: "ref-1",
      attemptId: "attempt-abc123",
      timestamp: "2026-02-10T15:45:00Z",
      responses: [ ... ]
    }
  ],
  
  rubrics: [
    {
      rubricId: "rub-1",
      attemptId: "attempt-abc123",
      timestamp: "2026-02-10T15:46:00Z",
      scores: { ... }
    }
  ],
  
  transfers: [
    {
      transferId: "trans-1",
      attemptId: "attempt-abc123",
      transferChallengeId: "js-2",
      timestamp: "2026-02-10T16:00:00Z",
      completed: false
    }
  ]
}
```

**Attempt Management Functions** (tracking-service.js):

```javascript
// Create attempt (called once when challenge starts)
export async function createAttempt(userId, challengeId) {
  const attemptId = `attempt-${userId}-${challengeId}-${Date.now()}`;
  
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
    errorHistory: []
  };
  
  await saveAttempt(userId, challengeId, attemptId, attempt);
  return attemptId;
}

// Get current attempt (or create if doesn't exist)
export async function getOrCreateAttempt(userId, challengeId) {
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
}

// Close attempt (complete or abandon)
export async function closeAttempt(userId, challengeId, attemptId, status) {
  const attempt = await getAttempt(userId, challengeId, attemptId);
  
  if (status === "completed") {
    attempt.status = "completed";
    attempt.completedAt = new Date().toISOString();
  } else if (status === "abandoned") {
    attempt.status = "abandoned";
    attempt.abandonedAt = new Date().toISOString();
  }
  
  await saveAttempt(userId, challengeId, attemptId, attempt);
}
```

**Client-Side Attempt Management** (app.js):

```javascript
// Global attempt tracking
let currentAttemptId = null;

// When challenge starts
async function startChallenge(challengeId) {
  currentAttemptId = await getOrCreateAttempt(currentUser.id, challengeId);
  // All subsequent events use this attemptId
}

// When saving any event
async function savePrediction(response) {
  await fetch('/api/save-prediction', {
    method: 'POST',
    body: JSON.stringify({
      userId: currentUser.id,
      challengeId: currentChallengeId,
      attemptId: currentAttemptId, // Reuse same ID
      prompt: "...",
      response
    })
  });
}
```

### 6.4 TRANSFER AS A CONTINUOUS THREAD

**Transfer Types and Integration**:

```javascript
// Enhanced challenge metadata with continuous transfer
{
  // ... existing metadata ...
  
  phases: {
    // ... existing phases ...
    
    // Micro-transfers within guided phase
    guidedConstruction: {
      objective: "Build solution with guidance",
      steps: ["step-4", "step-5", "step-6"],
      microTransfers: [
        {
          stepId: "step-4",
          transferType: "near", // near | far
          prompt: "Now apply the same hash map lookup to find if a number's double exists in the array",
          challenge: {
            task: "Given [1, 2, 3, 4], find if any number's double exists",
            relation: "Uses same lookup pattern, different condition"
          }
        }
      ]
    },
    
    // Interleaved challenges
    interleavedChallenges: [
      {
        challengeId: "js-7", // Array Intersection
        transferType: "near",
        insertAfter: "step-5", // Show after step 5
        relation: "Uses similar hash map pattern for set intersection"
      }
    ],
    
    // Variant examples
    variantExamples: [
      {
        stepId: "step-3",
        variants: [
          {
            input: [2, 7, 11, 15],
            target: 9,
            explanation: "Standard case"
          },
          {
            input: [3, 3],
            target: 6,
            explanation: "Duplicate numbers case"
          },
          {
            input: [1, 2, 3],
            target: 10,
            explanation: "No solution case"
          }
        ]
      }
    ]
  }
}
```

**Transfer Success Tracking**:

```javascript
// Track transfer attempts and success
export async function recordTransferAttempt(
  userId,
  challengeId,
  attemptId,
  transferChallengeId,
  transferType,
  completed
) {
  const attempt = await getAttempt(userId, challengeId, attemptId);
  
  attempt.transfers.push({
    transferId: `trans-${Date.now()}`,
    attemptId, // Reference parent attempt
    transferChallengeId,
    transferType, // near | far
    completed,
    timestamp: new Date().toISOString()
  });
  
  await saveAttempt(userId, challengeId, attemptId, attempt);
  
  // Update transfer success rate
  if (completed) {
    await updateTransferSuccessRate(userId, challengeId, transferType);
  }
}

// Calculate transfer success impact on mastery
function updateMasteryFromTransfer(userId, concept, transferType, success) {
  const mastery = getConceptMastery(userId, concept);
  
  // Near transfer success: +0.05 mastery
  // Far transfer success: +0.10 mastery (harder, more valuable)
  const increment = transferType === "near" ? 0.05 : 0.10;
  
  if (success) {
    updateConceptMastery(userId, concept, Math.min(1, mastery + increment));
  }
}
```

### 6.5 ANALYTICS → DECISION ENGINE

**Decision Rules** (user-service.js):

```javascript
// Analytics-driven recommendation engine
export async function getLearningRecommendations(userId) {
  const profile = await getLearningProfile(userId);
  const recommendations = [];
  
  // Rule 1: High hint dependency → remediation
  if (profile.learningProfile.hintDependency > 0.6) {
    recommendations.push({
      type: "remediation",
      priority: "high",
      message: "You're using many hints. Let's strengthen the fundamentals.",
      action: {
        type: "suggest-challenge",
        challengeIds: getRemediationChallenges(profile.learningProfile.conceptMastery),
        reason: "High hint dependency suggests need for concept reinforcement"
      }
    });
  }
  
  // Rule 2: Low transfer success → inject near-transfer
  if (profile.learningProfile.transferSuccessRate < 0.5) {
    recommendations.push({
      type: "transfer-support",
      priority: "medium",
      message: "Let's practice applying patterns to similar problems.",
      action: {
        type: "inject-transfer",
        transferType: "near",
        count: 2, // Inject 2 near-transfer challenges
        reason: "Low transfer success indicates need for more practice with pattern application"
      }
    });
  }
  
  // Rule 3: Low prediction accuracy → require prediction gate
  if (profile.learningProfile.predictionAccuracy < 0.4) {
    recommendations.push({
      type: "prediction-gate",
      priority: "high",
      message: "Let's practice thinking through problems before coding.",
      action: {
        type: "require-prediction",
        duration: 3, // Next 3 challenges
        reason: "Low prediction accuracy suggests need for more deliberate planning"
      }
    });
  }
  
  // Rule 4: Concept mastery gaps → targeted practice
  const weakConcepts = Object.entries(profile.learningProfile.conceptMastery)
    .filter(([concept, mastery]) => mastery < 0.6)
    .map(([concept]) => concept);
  
  if (weakConcepts.length > 0) {
    recommendations.push({
      type: "targeted-practice",
      priority: "medium",
      message: `Focus on: ${weakConcepts.join(", ")}`,
      action: {
        type: "suggest-challenges",
        challengeIds: getChallengesForConcepts(weakConcepts),
        reason: "Low mastery in these concepts"
      }
    });
  }
  
  return recommendations;
}

// Apply recommendations to next challenge
export async function applyRecommendations(userId, challengeId) {
  const recommendations = await getLearningRecommendations(userId);
  const metadata = getChallengeMetadata(challengeId);
  
  // Apply prediction gate requirement
  const predictionGateRec = recommendations.find(r => r.type === "prediction-gate");
  if (predictionGateRec) {
    metadata.predictionRequired = true;
  }
  
  // Inject transfer challenges
  const transferRec = recommendations.find(r => r.type === "transfer-support");
  if (transferRec) {
    metadata.injectedTransfers = generateNearTransferChallenges(challengeId, transferRec.action.count);
  }
  
  return metadata;
}
```

**State Machine for Learning Progression**:

```javascript
// Learning state machine
const LEARNING_STATES = {
  "concept-introduction": {
    entry: ["show-objective", "show-prerequisites"],
    exit: ["check-prerequisite-mastery"],
    next: "concept-isolation"
  },
  "concept-isolation": {
    entry: ["show-concept-explanation", "show-examples"],
    exit: ["check-for-understanding"],
    next: "mental-model"
  },
  "mental-model": {
    entry: ["show-mental-model", "show-why-this-step"],
    exit: ["check-mental-model-understanding"],
    next: "guided-construction"
  },
  "guided-construction": {
    entry: ["show-step-by-step", "show-micro-transfer"],
    exit: ["check-code-submission"],
    next: (attempt) => {
      // Decision point: based on hint dependency
      if (attempt.hintLadder.currentLevel <= 1) {
        return "independent-build";
      } else {
        return "remediation-needed";
      }
    }
  },
  "independent-build": {
    entry: ["hide-guidance", "show-transfer-challenge"],
    exit: ["check-completion"],
    next: "reflection"
  },
  "remediation-needed": {
    entry: ["show-remediation-challenge", "show-concept-review"],
    exit: ["check-remediation-completion"],
    next: "guided-construction" // Retry
  },
  "reflection": {
    entry: ["show-reflection-prompts"],
    exit: ["check-reflection-submission"],
    next: "transfer"
  },
  "transfer": {
    entry: ["show-transfer-challenge"],
    exit: ["check-transfer-completion"],
    next: "complete"
  }
};

// State transition logic
function getNextState(currentState, attempt, profile) {
  const stateDef = LEARNING_STATES[currentState];
  
  if (typeof stateDef.next === "function") {
    return stateDef.next(attempt, profile);
  }
  
  return stateDef.next;
}
```

### 6.6 ACCESSIBILITY & INCLUSIVE DESIGN

**Accessible Learning Experience Considerations**:

```html
<!-- Enhanced HTML with ARIA labels -->
<div id="reflectionModal" class="modal hidden" role="dialog" aria-labelledby="reflection-title" aria-modal="true">
  <div class="modal-content">
    <h3 id="reflection-title">Reflection</h3>
    <form id="reflectionForm" aria-label="Reflection form">
      <div class="reflection-prompt">
        <label for="reflection-0" id="reflection-0-label">
          What mental model did you use?
        </label>
        <textarea 
          id="reflection-0"
          rows="3"
          aria-labelledby="reflection-0-label"
          aria-describedby="reflection-0-hint"
          aria-required="true"
        ></textarea>
        <span id="reflection-0-hint" class="sr-only">
          Describe the mental model or approach you used to solve this problem
        </span>
      </div>
      <!-- ... more prompts ... -->
      <button type="submit" aria-label="Submit reflection">
        Submit Reflection
      </button>
    </form>
  </div>
</div>

<!-- Rubric form with accessible inputs -->
<form id="rubricForm" aria-label="Self-assessment rubric">
  <fieldset>
    <legend>Rate your understanding (1-5)</legend>
    <div class="rubric-item">
      <label for="framing">
        Framing: How well did you understand the problem?
      </label>
      <input 
        type="range" 
        id="framing" 
        name="framing" 
        min="1" 
        max="5" 
        value="3"
        aria-valuemin="1"
        aria-valuemax="5"
        aria-valuenow="3"
        aria-label="Framing score"
      />
      <output for="framing" id="framing-output">3</output>
    </div>
    <!-- ... more items ... -->
  </fieldset>
</form>
```

**Keyboard Navigation**:

```javascript
// Keyboard navigation for modals
function setupKeyboardNavigation() {
  // ESC to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal:not(.hidden)');
      if (openModal) {
        closeModal(openModal);
      }
    }
  });
  
  // Tab trapping in modals
  function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }
}
```

**Inclusive Language and Microcopy**:

```javascript
// Anxiety-reducing feedback messages
const FEEDBACK_MESSAGES = {
  incorrect: {
    beginner: "Not quite yet, but you're on the right track! Let's think about this together.",
    intermediate: "Close! There's a small issue to fix. Want a hint?",
    advanced: "There's a bug here. Can you spot it?"
  },
  
  hint: {
    level1: "Here's a gentle nudge in the right direction...",
    level2: "Let's break this down step by step...",
    level3: "Here's a code structure to get you started...",
    level4: "Here's the solution with an explanation..."
  },
  
  encouragement: [
    "Every expert was once a beginner. You're making progress!",
    "Struggling is part of learning. You've got this!",
    "Take your time. Understanding is more important than speed."
  ]
};

// Non-judgmental error messages
function getErrorMessage(errorType, scaffoldLevel) {
  const messages = FEEDBACK_MESSAGES.incorrect[scaffoldLevel];
  
  // Never use: "Wrong", "Incorrect", "You failed"
  // Always use: "Not quite", "Close", "Let's try a different approach"
  
  return messages || "Let's try a different approach.";
}
```

**CSS for Accessibility**:

```css
/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Focus indicators */
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 3px solid var(--neon);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .bloom-badge {
    border: 2px solid currentColor;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.7 REVISED DATA MODELS SUMMARY

**Complete Attempt Schema** (Final):

```javascript
{
  attemptId: "attempt-abc123", // Stable, created once
  challengeId: "js-1",
  userId: "user-123",
  status: "in-progress",
  createdAt: "2026-02-10T15:30:00Z",
  completedAt: null,
  
  // All events reference same attemptId
  predictions: [...],
  hints: [...],
  submissions: [...],
  reflections: [...],
  rubrics: [...],
  transfers: [...],
  
  // Feedback loop data
  hintLadder: {
    currentLevel: 1,
    hintsUsed: [...],
    maxLevel: 4
  },
  checkResponses: [...],
  errorHistory: [...],
  
  // Metrics
  metrics: {
    hintCount: 2,
    timeToComplete: 1800,
    predictionAccuracy: "high",
    transferSuccess: false,
    errorClassifications: {
      syntax: 0,
      logic: 1,
      invariant: 1,
      edgeCase: 0
    }
  }
}
```

**Enhanced Endpoints**:

```javascript
// NEW: Get learning recommendations
GET /api/learning-recommendations?userId=user-123
Response: {
  recommendations: [
    {
      type: "remediation",
      priority: "high",
      message: "...",
      action: { ... }
    }
  ]
}

// NEW: Get next hint level
GET /api/next-hint-level?attemptId=attempt-abc123&errorType=logic
Response: {
  level: 2,
  hint: "...",
  type: "process"
}

// NEW: Classify error
POST /api/classify-error
Body: {
  attemptId: "attempt-abc123",
  code: "...",
  expectedOutput: "...",
  actualOutput: "..."
}
Response: {
  errorType: "logic",
  nextHintLevel: 2,
  message: "..."
}

// NEW: Get scaffold level
GET /api/scaffold-level?userId=user-123&challengeId=js-1
Response: {
  level: "intermediate",
  rules: {
    predictionRequired: false,
    hintAvailability: "on-demand",
    ...
  }
}
```

---

## 7. IMPLEMENTATION PRIORITY (REVISED)

1. **Week 1-2**: Stable attempt model + basic feedback loops
2. **Week 3**: Hint ladder + error classification
3. **Week 4**: Scaffold fading logic
4. **Week 5**: Transfer threading + micro-transfers
5. **Week 6**: Analytics → decision engine
6. **Week 7**: Accessibility enhancements

---

## 8. BACKWARD COMPATIBILITY (ENHANCED)

- All new features are optional/additive
- Existing challenges work without metadata (graceful degradation)
- Attempt model: old code using `Date.now()` IDs still works (migration path provided)
- Feedback loops: if no misconception data, falls back to generic feedback
- Scaffold fading: if no mastery data, defaults to "beginner" level
- Analytics: if no recommendation data, system proceeds normally
- Accessibility: all enhancements are progressive (works without, better with)

