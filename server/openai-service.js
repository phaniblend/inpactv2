import Anthropic from '@anthropic-ai/sdk';

let anthropicClient = null;

function getAnthropicClient() {
  if (!anthropicClient) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable is missing or empty');
    }
    anthropicClient = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return anthropicClient;
}

function fixJsonNewlines(jsonStr) {
  let result = '';
  let inString = false;
  let escaped = false;
  
  for (let i = 0; i < jsonStr.length; i++) {
    const char = jsonStr[i];
    if (escaped) { result += char; escaped = false; continue; }
    if (char === '\\') { result += char; escaped = true; continue; }
    if (char === '"') { inString = !inString; result += char; continue; }
    if (inString) {
      if (char === '\n') result += '\\n';
      else if (char === '\r') result += '\\r';
      else if (char === '\t') result += '\\t';
      else result += char;
    } else {
      result += char;
    }
  }
  return result;
}

function extractJSON(text) {
  // Remove markdown code blocks if present
  let cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  cleaned = fixJsonNewlines(cleaned);
  return JSON.parse(cleaned);
}

// ============================================================================
// LEARNING OBJECTIVES GENERATION
// ============================================================================

export async function generateLearningObjectives(task, technology) {
  try {
    const client = getAnthropicClient();

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1500,
      messages: [
        {
          role: "user",
          content: `Analyze this coding task and identify the CONCRETE TECHNICAL SKILLS a beginner will learn by completing it.

Task: "${task}"
Technology: ${technology}

Generate 6-10 learning objectives that describe REUSABLE SKILLS, not task-specific outcomes.

RULES:
- Each objective should name a SPECIFIC technical concept or language feature
- Focus on skills that transfer to other projects
- Be concrete: mention actual syntax, methods, patterns by name
- Write for complete beginners who may not know these concepts yet

BAD (too abstract/task-specific):
- "Implement the twoSum algorithm" (just describes the task)
- "Solve the problem efficiently" (vague)
- "Build an optimized solution" (doesn't say what they'll learn)

GOOD (concrete, transferable skills):
- "Use JavaScript objects as hash maps for O(1) key-value lookups"
- "Iterate through arrays using for loops with index tracking"
- "Access array elements by index using bracket notation (arr[i])"
- "Store and retrieve values from objects using dynamic keys (obj[variable])"
- "Use the 'in' operator to check if a key exists in an object"
- "Return early from a function when a condition is met"
- "Calculate values using arithmetic operators (subtraction for complements)"

Output format - just the numbered list, no headers:
1. Skill description
2. Skill description
...`
        }
      ]
    });

    return message.content[0].text;
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}

// ============================================================================
// TASK DECOMPOSITION - CODING TASKS ONLY
// ============================================================================

export async function decomposeTask(task, technology, breakdown = 'sequential') {
  try {
    const client = getAnthropicClient();

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: `Break down this coding project into implementation tasks.

Project: ${task}
Technology: ${technology}

RULES:
1. Include ONE setup task at the start (environment, dependencies, project init)
2. All other tasks must be CODING tasks that require writing actual code
3. Each coding task should be a complete, teachable unit (function, component, feature)
4. DO NOT include trivial tasks like "create a file" or "name a function"
5. Tasks should build on each other logically
6. 5-8 tasks total

BAD tasks (too trivial):
- "Create a new file called app.js"
- "Name the function twoSum"
- "Add a comment"

GOOD tasks (meaningful coding):
- "Set up development environment with Node.js"
- "Implement the twoSum function using hash map lookup"
- "Add input validation for edge cases"

Return ONLY valid JSON array, no other text:
["Task 1: ...", "Task 2: ...", "Task 3: ..."]`
        }
      ]
    });

    return extractJSON(message.content[0].text);
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}

// ============================================================================
// TUTORIAL GENERATION - 10 SCREEN SPINE
// ============================================================================

export async function generateTutorialSteps(atomicTask, projectContext) {
  try {
    const client = getAnthropicClient();
    const technology = projectContext.technology;

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 5000,
      messages: [
        {
          role: "user",
          content: `Create a 10-screen tutorial for this EXACT task:

=== TASK ===
${atomicTask}

=== CONTEXT ===
Project: ${projectContext.task}
Technology: ${technology}

=== CRITICAL ===
Tutorial MUST be for "${atomicTask}" exactly. Do NOT substitute a different topic.

=== TONE ===
Senior engineer to junior peer. Calm, precise. Focus on WHY, not line-by-line narration. 1-2 sentence explanations. No hype words.

=== 10 SCREENS ===

1. problem-context: What this task requires (NO code)
2. input-output: Concrete input → output example
3. approach: Strategy via different domain analogy
4. signature: Function interface
5. data-structure: Key construct needed
6. iteration: Traversal pattern
7. core-logic: Main decision step with complete code
8. pattern-summary: Name pattern, other uses (NO code)
9. implementation: Starter code for learner
10. solution: Complete reference code

=== JSON FORMAT ===

Return ONLY this JSON structure:

{
  "atomicTask": "${atomicTask}",
  "technology": "${technology}",
  "totalScreens": 10,
  "screens": [
    {
      "screenNumber": 1,
      "screenType": "problem-context",
      "title": "Problem Context",
      "content": {
        "goal": "What we need to build",
        "context": "When this is useful"
      }
    },
    {
      "screenNumber": 2,
      "screenType": "input-output",
      "title": "Expected Behavior",
      "content": {
        "input": "const nums = [2, 7, 11, 15];\\nconst target = 9;",
        "output": "[0, 1]",
        "explanation": "Because nums[0] + nums[1] = 9"
      }
    },
    {
      "screenNumber": 3,
      "screenType": "approach",
      "title": "Approach",
      "content": {
        "domain": "Inventory System",
        "explanation": "Like checking if a complementary part exists in stock",
        "code": "// inventory lookup example"
      }
    },
    {
      "screenNumber": 4,
      "screenType": "signature",
      "title": "Function Signature",
      "content": {
        "code": "function name(params) { }",
        "parameters": [{"name": "param", "description": "what it is"}],
        "returns": "what it returns"
      }
    },
    {
      "screenNumber": 5,
      "screenType": "data-structure",
      "title": "Data Structure",
      "content": {
        "structure": "Hash Map",
        "reasoning": "O(1) lookup for complements",
        "code": "const seen = {};"
      }
    },
    {
      "screenNumber": 6,
      "screenType": "iteration",
      "title": "Iteration",
      "content": {
        "strategy": "Single pass",
        "reasoning": "Check and store in one loop",
        "code": "for (let i = 0; i < arr.length; i++) { }"
      }
    },
    {
      "screenNumber": 7,
      "screenType": "core-logic",
      "title": "Core Logic",
      "content": {
        "reasoning": "Key insight explanation",
        "steps": ["Calculate complement", "Check if exists", "Return or store"],
        "code": "// complete function here",
        "walkthrough": {
          "description": "Let's trace through with nums = [2, 7, 11, 15], target = 9",
          "iterations": [
            {
              "step": "i = 0, nums[0] = 2",
              "action": "complement = 9 - 2 = 7. Is 7 in seen? No (seen is empty). Store seen[2] = 0",
              "seenState": "seen = { 2: 0 }"
            },
            {
              "step": "i = 1, nums[1] = 7",
              "action": "complement = 9 - 7 = 2. Is 2 in seen? YES! seen[2] = 0. Return [0, 1]",
              "seenState": "Found! Return indices [0, 1]"
            }
          ]
        },
        "objectExplanation": "The seen object stores each number as a KEY and its index as the VALUE. To check if a number exists, use: if (number in seen). To get its index: seen[number]. To store: seen[number] = index."
      }
    },
    {
      "screenNumber": 8,
      "screenType": "pattern-summary",
      "title": "Pattern Summary",
      "content": {
        "patternName": "Complement Lookup",
        "description": "Use hash map for O(1) complement checks",
        "applications": ["Finding pairs", "Detecting duplicates"]
      }
    },
    {
      "screenNumber": 9,
      "screenType": "implementation",
      "title": "Implementation",
      "content": {
        "instruction": "Implement using the pattern above",
        "starterCode": "function name(params) {\\n  // your code\\n}",
        "testCase": "test case here"
      }
    },
    {
      "screenNumber": 10,
      "screenType": "solution",
      "title": "Reference Solution",
      "content": {
        "code": "// complete solution",
        "complexity": "Time: O(n), Space: O(n)"
      }
    }
  ]
}

Use \\n for newlines in code strings. Write all code in ${technology}.`
        }
      ]
    });

    const parsed = extractJSON(message.content[0].text);
    console.log(`Tutorial generated for: "${parsed.atomicTask}"`);
    return parsed;
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}

// ============================================================================
// ASK MENTOR - Contextual Q&A
// ============================================================================

export async function askMentor(question, screen, tutorial, atomicTask) {
  try {
    const client = getAnthropicClient();

    const screenContent = JSON.stringify(screen.content || {});
    
    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 500,
      messages: [
        {
          role: "user",
          content: `You are a patient coding mentor helping a beginner.

CONTEXT:
- Task: ${atomicTask}
- Current screen: ${screen.screenType} - "${screen.title}"
- Screen content: ${screenContent}

STUDENT'S QUESTION:
${question}

RULES:
- Answer in 2-4 sentences max
- Use simple language, no jargon
- If they're confused about code, explain with a real-world analogy
- If asking about syntax, show a tiny example
- Be encouraging but not condescending
- Stay focused on the current screen context

Answer:`
        }
      ]
    });

    return message.content[0].text;
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}

// ============================================================================
// CODE VALIDATION
// ============================================================================

export async function validateUserCode(userCode, tutorial, atomicTask) {
  try {
    const client = getAnthropicClient();

    const solutionScreen = tutorial.screens?.find(s => s.screenType === 'solution');
    const solution = solutionScreen?.content?.code || '';
    
    const implScreen = tutorial.screens?.find(s => s.screenType === 'implementation');
    const instruction = implScreen?.content?.instruction || 'Complete the implementation';

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 800,
      messages: [
        {
          role: "user",
          content: `Review this code submission.

Task: ${instruction}

Submitted:
${userCode}

Reference:
${solution}

Return ONLY JSON:
{"correct": true, "score": 85, "feedback": [{"type": "success", "message": "..."}], "suggestion": "...", "encouragement": "..."}`
        }
      ]
    });

    return extractJSON(message.content[0].text);
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}

// ============================================================================
// HINT GENERATION
// ============================================================================

export async function generateHint(userCode, tutorial, hintNumber, previousHints) {
  try {
    const client = getAnthropicClient();

    const solutionScreen = tutorial.screens?.find(s => s.screenType === 'solution');
    const solution = solutionScreen?.content?.code || '';

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: `Give hint ${hintNumber}/3 for this code attempt.

Current code:
${userCode}

Solution (don't reveal directly):
${solution}

Previous hints: ${JSON.stringify(previousHints)}

Hint 1 = general direction, Hint 2 = more specific, Hint 3 = nearly there.

Return ONLY JSON:
{"hint": "...", "encouragement": "..."}`
        }
      ]
    });

    return extractJSON(message.content[0].text);
  } catch (error) {
    console.error('Anthropic API Error:', error);
    throw error;
  }
}
