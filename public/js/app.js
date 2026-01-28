// ============================================================================
// QUESTION BANK - 100+ Coding Interview Questions
// ============================================================================

const questionBank = {
  "JavaScript": {
    icon: "🟨",
    description: "Core JavaScript concepts and algorithms",
    questions: [
      { id: "js-1", title: "Two Sum", difficulty: "Easy", frequency: "Very High", task: "Implement twoSum function that finds two numbers in an array that add up to a target" },
      { id: "js-2", title: "Three Sum", difficulty: "Medium", frequency: "High", task: "Find all unique triplets in an array that sum to zero" },
      { id: "js-3", title: "Maximum Subarray", difficulty: "Medium", frequency: "High", task: "Find the contiguous subarray with the largest sum using Kadane's algorithm" },
      { id: "js-4", title: "Merge Two Sorted Arrays", difficulty: "Easy", frequency: "Very High", task: "Merge two sorted arrays into one sorted array" },
      { id: "js-5", title: "Array Deduplication", difficulty: "Easy", frequency: "Very High", task: "Remove duplicates from an array using multiple methods" },
      { id: "js-6", title: "Flatten Nested Array", difficulty: "Medium", frequency: "High", task: "Flatten a deeply nested array without using Array.flat()" },
      { id: "js-7", title: "Array Intersection", difficulty: "Easy", frequency: "High", task: "Find common elements between two arrays" },
      { id: "js-8", title: "Rotate Array", difficulty: "Medium", frequency: "Medium", task: "Rotate an array by k positions to the right" },
      { id: "js-9", title: "Find Missing Number", difficulty: "Easy", frequency: "High", task: "Find the missing number in an array containing 1 to n" },
      { id: "js-10", title: "Move Zeroes", difficulty: "Easy", frequency: "High", task: "Move all zeroes to the end while maintaining order of other elements" },
      { id: "js-11", title: "Reverse String", difficulty: "Easy", frequency: "Very High", task: "Reverse a string using multiple approaches" },
      { id: "js-12", title: "Valid Palindrome", difficulty: "Easy", frequency: "Very High", task: "Check if a string is a palindrome ignoring non-alphanumeric characters" },
      { id: "js-13", title: "Valid Anagram", difficulty: "Easy", frequency: "High", task: "Determine if two strings are anagrams of each other" },
      { id: "js-14", title: "Longest Substring Without Repeating", difficulty: "Medium", frequency: "Very High", task: "Find length of longest substring without repeating characters" },
      { id: "js-15", title: "String Compression", difficulty: "Medium", frequency: "Medium", task: "Compress a string using counts of repeated characters" },
      { id: "js-16", title: "First Non-Repeating Character", difficulty: "Easy", frequency: "High", task: "Find the first character that doesn't repeat in a string" },
      { id: "js-17", title: "Longest Common Prefix", difficulty: "Easy", frequency: "Medium", task: "Find the longest common prefix among an array of strings" },
      { id: "js-18", title: "Deep Clone Object", difficulty: "Medium", frequency: "Very High", task: "Implement deep clone for nested objects without using JSON methods" },
      { id: "js-19", title: "Object Comparison", difficulty: "Medium", frequency: "High", task: "Check if two objects are deeply equal" },
      { id: "js-20", title: "Group Array by Property", difficulty: "Medium", frequency: "High", task: "Group an array of objects by a specific property" },
      { id: "js-21", title: "Frequency Counter", difficulty: "Easy", frequency: "High", task: "Count frequency of elements in an array using an object" },
      { id: "js-22", title: "Object Flatten", difficulty: "Medium", frequency: "Medium", task: "Flatten a nested object into a single-level object with dot notation keys" },
      { id: "js-23", title: "Implement Debounce", difficulty: "Medium", frequency: "Very High", task: "Create a debounce function that delays invoking a function" },
      { id: "js-24", title: "Implement Throttle", difficulty: "Medium", frequency: "Very High", task: "Create a throttle function that limits function calls to once per interval" },
      { id: "js-25", title: "Function Currying", difficulty: "Medium", frequency: "High", task: "Implement a curry function that transforms f(a,b,c) into f(a)(b)(c)" },
      { id: "js-26", title: "Implement Bind", difficulty: "Medium", frequency: "High", task: "Create your own implementation of Function.prototype.bind" },
      { id: "js-27", title: "Memoization", difficulty: "Medium", frequency: "High", task: "Implement a memoize function to cache expensive function results" },
      { id: "js-28", title: "Promise.all Implementation", difficulty: "Medium", frequency: "High", task: "Implement your own Promise.all" },
      { id: "js-29", title: "Sequential Promise Execution", difficulty: "Medium", frequency: "High", task: "Execute an array of promises sequentially" },
      { id: "js-30", title: "Event Delegation", difficulty: "Easy", frequency: "High", task: "Implement event delegation for dynamically added elements" },
      { id: "js-31", title: "Infinite Scroll", difficulty: "Medium", frequency: "High", task: "Implement infinite scroll using Intersection Observer" },
      { id: "js-32", title: "Form Validation", difficulty: "Easy", frequency: "High", task: "Create a form validation system with real-time feedback" }
    ]
  },

  "React": {
    icon: "⚛️",
    description: "React components, hooks, and patterns",
    questions: [
      { id: "react-1", title: "Todo List Component", difficulty: "Easy", frequency: "Very High", task: "Build a Todo list with add, delete, and toggle complete functionality" },
      { id: "react-2", title: "Counter with Hooks", difficulty: "Easy", frequency: "Very High", task: "Create a counter component using useState hook" },
      { id: "react-3", title: "Controlled Form Input", difficulty: "Easy", frequency: "Very High", task: "Build a controlled form with multiple input types" },
      { id: "react-4", title: "Search Filter Component", difficulty: "Easy", frequency: "High", task: "Create a search component that filters a list in real-time" },
      { id: "react-5", title: "Accordion Component", difficulty: "Medium", frequency: "High", task: "Build an accordion with single or multiple open panels" },
      { id: "react-6", title: "Modal Component", difficulty: "Medium", frequency: "Very High", task: "Create a reusable modal with portal and focus trap" },
      { id: "react-7", title: "Tabs Component", difficulty: "Medium", frequency: "High", task: "Build a tabs component with dynamic content" },
      { id: "react-8", title: "Dropdown Select", difficulty: "Medium", frequency: "High", task: "Create a custom dropdown select component" },
      { id: "react-9", title: "Star Rating Component", difficulty: "Easy", frequency: "High", task: "Build an interactive star rating component" },
      { id: "react-10", title: "Image Carousel", difficulty: "Medium", frequency: "High", task: "Create an image carousel with navigation and auto-play" },
      { id: "react-11", title: "Custom useFetch Hook", difficulty: "Medium", frequency: "Very High", task: "Create a custom hook for data fetching with loading and error states" },
      { id: "react-12", title: "Custom useDebounce Hook", difficulty: "Medium", frequency: "High", task: "Build a useDebounce hook for debounced values" },
      { id: "react-13", title: "Custom useLocalStorage Hook", difficulty: "Medium", frequency: "High", task: "Create a hook that syncs state with localStorage" },
      { id: "react-14", title: "useReducer Todo App", difficulty: "Medium", frequency: "High", task: "Refactor a todo app to use useReducer instead of useState" },
      { id: "react-15", title: "Custom useClickOutside Hook", difficulty: "Medium", frequency: "High", task: "Build a hook to detect clicks outside an element" },
      { id: "react-16", title: "Theme Context Provider", difficulty: "Medium", frequency: "High", task: "Implement dark/light theme switching with Context API" },
      { id: "react-17", title: "Shopping Cart with Context", difficulty: "Medium", frequency: "High", task: "Build a shopping cart using Context for state management" },
      { id: "react-18", title: "Auth Context", difficulty: "Medium", frequency: "High", task: "Create an authentication context with login/logout" },
      { id: "react-19", title: "Optimize List Rendering", difficulty: "Medium", frequency: "High", task: "Use React.memo and useMemo to optimize a large list" },
      { id: "react-20", title: "Error Boundary", difficulty: "Medium", frequency: "High", task: "Implement an error boundary component" }
    ]
  },

  "TypeScript": {
    icon: "🔷",
    description: "TypeScript types, generics, and patterns",
    questions: [
      { id: "ts-1", title: "Generic Array Functions", difficulty: "Medium", frequency: "High", task: "Implement type-safe array utility functions with generics" },
      { id: "ts-2", title: "API Response Types", difficulty: "Medium", frequency: "Very High", task: "Define types for API responses with success and error variants" },
      { id: "ts-3", title: "Type Guards", difficulty: "Medium", frequency: "High", task: "Implement type guards for runtime type checking" },
      { id: "ts-4", title: "Mapped Types", difficulty: "Medium", frequency: "Medium", task: "Create utility types using mapped types" },
      { id: "ts-5", title: "Discriminated Unions", difficulty: "Medium", frequency: "High", task: "Model state machines using discriminated unions" },
      { id: "ts-6", title: "Generic React Component", difficulty: "Medium", frequency: "High", task: "Create a generic List component with TypeScript" },
      { id: "ts-7", title: "Utility Type Implementation", difficulty: "Hard", frequency: "Medium", task: "Implement Pick, Omit, and Record from scratch" },
      { id: "ts-8", title: "Event Handler Types", difficulty: "Easy", frequency: "High", task: "Type React event handlers correctly" }
    ]
  },

  "CSS": {
    icon: "🎨",
    description: "CSS layouts, animations, and responsive design",
    questions: [
      { id: "css-1", title: "Flexbox Holy Grail Layout", difficulty: "Easy", frequency: "Very High", task: "Create a holy grail layout using Flexbox" },
      { id: "css-2", title: "CSS Grid Dashboard", difficulty: "Medium", frequency: "High", task: "Build a responsive dashboard layout with CSS Grid" },
      { id: "css-3", title: "Center a Div", difficulty: "Easy", frequency: "Very High", task: "Center an element horizontally and vertically using multiple methods" },
      { id: "css-4", title: "Responsive Navigation", difficulty: "Medium", frequency: "High", task: "Create a responsive navbar with hamburger menu" },
      { id: "css-5", title: "CSS-only Dropdown", difficulty: "Medium", frequency: "High", task: "Build a dropdown menu using only CSS" },
      { id: "css-6", title: "Card Component", difficulty: "Easy", frequency: "High", task: "Style a card component with hover effects" },
      { id: "css-7", title: "Loading Spinner", difficulty: "Easy", frequency: "High", task: "Create a CSS-only loading spinner animation" },
      { id: "css-8", title: "Sticky Header", difficulty: "Easy", frequency: "High", task: "Implement a sticky header that changes on scroll" },
      { id: "css-9", title: "Custom Checkbox", difficulty: "Medium", frequency: "Medium", task: "Style a custom checkbox without JavaScript" },
      { id: "css-10", title: "Truncate Text", difficulty: "Easy", frequency: "High", task: "Truncate text with ellipsis for single and multiple lines" }
    ]
  },

  "Node.js": {
    icon: "🟢",
    description: "Node.js APIs, middleware, and backend patterns",
    questions: [
      { id: "node-1", title: "REST API CRUD", difficulty: "Medium", frequency: "Very High", task: "Build a REST API with CRUD operations using Express" },
      { id: "node-2", title: "JWT Authentication", difficulty: "Medium", frequency: "Very High", task: "Implement JWT-based authentication middleware" },
      { id: "node-3", title: "Rate Limiter", difficulty: "Medium", frequency: "High", task: "Create a rate limiting middleware" },
      { id: "node-4", title: "File Upload Handler", difficulty: "Medium", frequency: "High", task: "Handle file uploads with validation and storage" },
      { id: "node-5", title: "Error Handling Middleware", difficulty: "Medium", frequency: "High", task: "Create centralized error handling middleware" },
      { id: "node-6", title: "Request Validation", difficulty: "Medium", frequency: "High", task: "Implement request body validation middleware" },
      { id: "node-7", title: "WebSocket Chat", difficulty: "Medium", frequency: "Medium", task: "Build a real-time chat using WebSockets" },
      { id: "node-8", title: "API Pagination", difficulty: "Easy", frequency: "High", task: "Implement cursor-based pagination" }
    ]
  },

  "Data Structures": {
    icon: "🏗️",
    description: "Implement common data structures from scratch",
    questions: [
      { id: "ds-1", title: "Implement Stack", difficulty: "Easy", frequency: "High", task: "Implement a stack with push, pop, peek operations" },
      { id: "ds-2", title: "Implement Queue", difficulty: "Easy", frequency: "High", task: "Implement a queue with enqueue and dequeue" },
      { id: "ds-3", title: "Linked List", difficulty: "Medium", frequency: "High", task: "Implement a singly linked list with common operations" },
      { id: "ds-4", title: "Binary Search Tree", difficulty: "Medium", frequency: "Medium", task: "Implement BST with insert, search, and delete" },
      { id: "ds-5", title: "Hash Table", difficulty: "Medium", frequency: "High", task: "Implement a hash table with collision handling" },
      { id: "ds-6", title: "LRU Cache", difficulty: "Hard", frequency: "High", task: "Implement an LRU cache with O(1) get and put" },
      { id: "ds-7", title: "Trie", difficulty: "Medium", frequency: "Medium", task: "Implement a trie for autocomplete functionality" }
    ]
  },

  "System Design": {
    icon: "🏛️",
    description: "Frontend system design questions",
    questions: [
      { id: "sd-1", title: "Design Autocomplete", difficulty: "Medium", frequency: "Very High", task: "Design and implement an autocomplete search component" },
      { id: "sd-2", title: "Design Infinite Scroll Feed", difficulty: "Medium", frequency: "High", task: "Design a social media feed with infinite scroll" },
      { id: "sd-3", title: "Design Image Gallery", difficulty: "Medium", frequency: "Medium", task: "Design a responsive image gallery with lazy loading" },
      { id: "sd-4", title: "Design Poll Widget", difficulty: "Easy", frequency: "Medium", task: "Design a real-time poll widget" },
      { id: "sd-5", title: "Design Chat Interface", difficulty: "Medium", frequency: "High", task: "Design a chat UI with message threading" },
      { id: "sd-6", title: "Design Notification System", difficulty: "Medium", frequency: "Medium", task: "Design a toast notification system" },
      { id: "sd-7", title: "Design Kanban Board", difficulty: "Medium", frequency: "Medium", task: "Design a drag-and-drop kanban board" }
    ]
  }
};

// ============================================================================
// DOM ELEMENTS
// ============================================================================

const form = document.getElementById('objectivesForm');
const taskInput = document.getElementById('task');
const technologyInput = document.getElementById('technology');
const generateBtn = document.getElementById('generateBtn');
const mainHeader = document.getElementById('mainHeader');
const globalLoadingOverlay = document.getElementById('globalLoadingOverlay');


const resultsDiv = document.getElementById('results');
const objectivesList = document.getElementById('objectives');

const startBuildingBtn = document.getElementById('startBuildingBtn');
const breakdownResults = document.getElementById('breakdownResults');
const tasksList = document.getElementById('tasksList');

const tutorialView = document.getElementById('tutorialView');
const backToTasks = document.getElementById('backToTasks');
const tutorialTaskTitle = document.getElementById('tutorialTaskTitle');
const currentStepNum = document.getElementById('currentStepNum');
const totalSteps = document.getElementById('totalSteps');
const stepProgressFill = document.getElementById('stepProgressFill');

const prevStepBtn = document.getElementById('prevStepBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const backToObjectives = document.getElementById('backToObjectives');
const newSearchBtn = document.getElementById('newSearchBtn');
const startNewBtn = document.getElementById('startNewBtn');
const retryBtn = document.getElementById('retryBtn');

const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');

// Question Bank Elements
const questionBankSection = document.getElementById('questionBankSection');
const questionBankContainer = document.getElementById('questionBankContainer');

// ============================================================================
// LOADING OVERLAY UTILITIES
// ============================================================================

let loadingTimeout = null;

// Cache for preloaded tutorials
let preloadedTutorials = {};
let preloadedTasks = null;

function showGlobalLoading() {
    // Clear any existing timeout
    if (loadingTimeout) {
        clearTimeout(loadingTimeout);
    }
    
    // Show loading after 1ms delay
    loadingTimeout = setTimeout(() => {
        if (globalLoadingOverlay) {
            globalLoadingOverlay.classList.remove('hidden');
        }
    }, 1);
}

function hideGlobalLoading() {
    // Clear timeout if loading hasn't shown yet
    if (loadingTimeout) {
        clearTimeout(loadingTimeout);
        loadingTimeout = null;
    }
    
    // Hide loading overlay
    if (globalLoadingOverlay) {
        globalLoadingOverlay.classList.add('hidden');
    }
}

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

let currentTask = null;
let currentTechnology = null;
let currentAtomicTask = null;
let currentTutorial = null;
let currentScreenIndex = 0;
let hintCount = 0;
let previousHints = [];
let completedTasks = [];
let studentCodeByTask = {}; // Store student's code submissions by task
let allTasks = []; // Store all tasks from the breakdown
let monacoEditor = null; // Monaco editor instance
let currentEditorTaskIndex = 0; // Current task being worked on in editor

// ============================================================================
// INITIALIZE QUESTION BANK
// ============================================================================

function initQuestionBank() {
    if (!questionBankContainer) return;
    
    let html = '';
    
    for (const [tech, data] of Object.entries(questionBank)) {
        html += `
            <div class="qb-category">
                <div class="qb-category-header" onclick="toggleCategory('${tech}')">
                    <div class="qb-category-title">
                        <span class="qb-icon">${data.icon}</span>
                        <h3>${tech}</h3>
                        <span class="qb-count">${data.questions.length} questions</span>
                    </div>
                    <span class="qb-toggle">▼</span>
                </div>
                <div class="qb-questions" id="qb-${tech.replace(/\s+/g, '-')}">
                    ${data.questions.map(q => `
                        <button class="qb-question" onclick="selectQuestion('${tech}', '${q.id}')">
                            <div class="qb-question-header">
                                <span class="qb-question-title">${q.title}</span>
                                <span class="qb-difficulty qb-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
                            </div>
                            <p class="qb-question-task">${q.task}</p>
                            <span class="qb-frequency">${q.frequency} frequency</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    questionBankContainer.innerHTML = html;
}

function toggleCategory(tech) {
    const questionsDiv = document.getElementById(`qb-${tech.replace(/\s+/g, '-')}`);
    const header = questionsDiv.previousElementSibling;
    const toggle = header.querySelector('.qb-toggle');
    
    questionsDiv.classList.toggle('expanded');
    toggle.textContent = questionsDiv.classList.contains('expanded') ? '▲' : '▼';
}

function selectQuestion(tech, questionId) {
    const category = questionBank[tech];
    const question = category.questions.find(q => q.id === questionId);
    
    if (question) {
        currentTask = question.task;
        currentTechnology = tech === "Data Structures" || tech === "System Design" ? "JavaScript" : tech;
        
        // Fill in the form (for reference)
        if (taskInput) taskInput.value = question.task;
        if (technologyInput) technologyInput.value = currentTechnology;
        
        // Go directly to generating objectives
        generateObjectivesForQuestion(question, currentTechnology);
    }
}

async function generateObjectivesForQuestion(question, technology) {
    hideAll();
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/generate-objectives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task: question.task, technology })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to generate objectives');
        
        displayObjectives(data);
        
    } catch (error) {
        displayError(error.message);
    } finally {
        hideGlobalLoading();
    }
}

// ============================================================================
// SETUP TASK DETECTION
// ============================================================================

const SETUP_KEYWORDS = [
    'install', 'set up', 'setup', 'create project', 'create react app',
    'create-react-app', 'initialize', 'init', 'configure', 'configuration',
    'npm init', 'npx create', 'download', 'environment', 'dependencies',
    'node_modules', 'package.json'
];

function isSetupTask(taskText) {
    const lowerTask = taskText.toLowerCase();
    return SETUP_KEYWORDS.some(keyword => lowerTask.includes(keyword));
}

function getSetupInstructions(taskText, technology) {
    const searchQuery = encodeURIComponent(`${taskText} ${technology} tutorial`);
    const youtubeLink = `https://www.youtube.com/results?search_query=${searchQuery}`;
    
    return {
        title: taskText,
        goal: 'Set up a professional development environment',
        youtubeLink: youtubeLink,
        why: `Modern ${technology} development relies on external libraries and tools. When you write code, you'll use packages that others have built — things like testing frameworks, build tools, and utility libraries. A proper setup lets you track dependencies, share your project with others, and run scripts for testing and building your code.`,
        instructions: [
            'Open your terminal or command prompt',
            'Navigate to your project folder (or create one)',
            'Run the initialization command for your package manager',
            'Install any required dependencies',
            'Verify the setup by running a test command'
        ],
        verification: 'You should see the expected config files in your project folder and be able to run basic commands without errors'
    };
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

form.addEventListener('submit', handleSubmit);
startBuildingBtn.addEventListener('click', handleStartBuilding);
backToTasks.addEventListener('click', showTaskBreakdown);
backToObjectives.addEventListener('click', showObjectives);
newSearchBtn.addEventListener('click', resetToStart);
startNewBtn.addEventListener('click', resetToStart);
retryBtn.addEventListener('click', resetToStart);
prevStepBtn.addEventListener('click', () => navigateScreen(-1));
nextStepBtn.addEventListener('click', () => navigateScreen(1));

// Initialize question bank on page load
document.addEventListener('DOMContentLoaded', () => {
    initQuestionBank();
    handleURLParameters();
});

// ============================================================================
// URL PARAMETER HANDLING
// ============================================================================

function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const task = urlParams.get('task');
    const technology = urlParams.get('technology');
    
    if (task && technology) {
        // Populate form fields
        const decodedTask = decodeURIComponent(task);
        const decodedTech = decodeURIComponent(technology);
        
        if (taskInput) taskInput.value = decodedTask;
        if (technologyInput) technologyInput.value = decodedTech;
        
        // Only auto-submit if form is visible (initial page state)
        // Don't auto-submit if results are already showing
        const formVisible = form && !form.classList.contains('hidden');
        const resultsVisible = resultsDiv && !resultsDiv.classList.contains('hidden');
        
        if (formVisible && !resultsVisible) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                // Trigger form submission programmatically
                const submitEvent = new Event('submit', { 
                    cancelable: true, 
                    bubbles: true 
                });
                form.dispatchEvent(submitEvent);
            }, 100);
        }
    }
}

// ============================================================================
// PHASE 1: GENERATE LEARNING OBJECTIVES
// ============================================================================

async function handleSubmit(e) {
    e.preventDefault();
    
    currentTask = taskInput.value.trim();
    currentTechnology = technologyInput.value.trim();
    
    // Update URL without reloading page
    const url = new URL(window.location);
    url.searchParams.set('task', encodeURIComponent(currentTask));
    url.searchParams.set('technology', encodeURIComponent(currentTechnology));
    window.history.pushState({}, '', url);
    
    hideAll();
    generateBtn.disabled = true;
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/generate-objectives', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ task: currentTask, technology: currentTechnology })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to generate objectives');
        
        displayObjectives(data);
        
    } catch (error) {
        displayError(error.message);
    } finally {
        generateBtn.disabled = false;
        hideGlobalLoading();
    }
}

function displayObjectives(data) {
    document.getElementById('resultTask').textContent = data.task;
    document.getElementById('resultTech').textContent = data.technology;
    document.getElementById('objectives').textContent = data.objectives;
    
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    if (questionBankSection) questionBankSection.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Preload task breakdown and tutorials in the background
    preloadTaskBreakdownAndTutorials();
}

// ============================================================================
// PHASE 2: TASK BREAKDOWN
// ============================================================================

// Preload task breakdown and tutorials in background
async function preloadTaskBreakdownAndTutorials() {
    try {
        // Get task breakdown
        const response = await fetch('/api/decompose-task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                task: currentTask, 
                technology: currentTechnology,
                breakdown: 'sequential'
            })
        });
        
        const data = await response.json();
        if (!response.ok) return; // Silently fail if breakdown fails
        
        preloadedTasks = data.tasks;
        
        // Preload tutorials for all non-setup tasks
        const nonSetupTasks = data.tasks.filter(task => !isSetupTask(task));
        
        // Preload tutorials in parallel (but limit concurrency to avoid overwhelming server)
        const preloadPromises = nonSetupTasks.map(async (taskText) => {
            try {
                const tutorialResponse = await fetch('/api/generate-tutorial', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        atomicTask: taskText,
                        projectContext: { task: currentTask, technology: currentTechnology }
                    })
                });
                
                const tutorialData = await tutorialResponse.json();
                if (tutorialResponse.ok && tutorialData.tutorial) {
                    preloadedTutorials[taskText] = tutorialData.tutorial;
                }
            } catch (error) {
                // Silently fail - we'll generate on demand if preload fails
                console.log('Preload failed for task:', taskText, error);
            }
        });
        
        // Don't await - let it run in background
        Promise.all(preloadPromises).then(() => {
            console.log('Tutorial preloading completed');
        });
        
    } catch (error) {
        // Silently fail - we'll generate on demand if preload fails
        console.log('Preload task breakdown failed:', error);
    }
}

async function handleStartBuilding() {
    resultsDiv.classList.add('hidden');
    startBuildingBtn.disabled = true;
    showGlobalLoading();
    
    try {
        // Check if we have preloaded tasks
        if (preloadedTasks) {
            displayTaskBreakdown(preloadedTasks);
            hideGlobalLoading();
            return;
        }
        
        // Fallback: generate breakdown if not preloaded
        const response = await fetch('/api/decompose-task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                task: currentTask, 
                technology: currentTechnology,
                breakdown: 'sequential'
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to decompose task');
        
        displayTaskBreakdown(data.tasks);
        
    } catch (error) {
        displayError(error.message);
        resultsDiv.classList.remove('hidden');
    } finally {
        startBuildingBtn.disabled = false;
        hideGlobalLoading();
    }
}

function displayTaskBreakdown(tasks) {
    tasksList.innerHTML = '';
    allTasks = tasks; // Store tasks for editor view
    
    const section = createTaskSection('Your Learning Roadmap', '🚀', tasks);
    tasksList.appendChild(section);
    updateTaskProgress();
    
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    if (questionBankSection) questionBankSection.classList.add('hidden');
    breakdownResults.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createTaskSection(title, icon, tasks) {
    const section = document.createElement('div');
    section.className = 'task-section';
    
    section.innerHTML = `
        <div class="task-section-header">
            <div class="task-section-title">
                <span class="task-icon">${icon}</span>
                <h3>${title}</h3>
            </div>
        </div>
    `;
    
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-button-container';
    
    tasks.forEach((task, index) => {
        const isSetup = isSetupTask(task);
        const taskButton = createTaskButton(task, index + 1, isSetup);
        taskContainer.appendChild(taskButton);
    });
    
    section.appendChild(taskContainer);
    return section;
}

function createTaskButton(taskText, number, isSetup = false) {
    const isCompleted = completedTasks.includes(taskText);
    const button = document.createElement('button');
    button.className = `task-button ${isCompleted ? 'task-completed' : 'task-not-started'}`;
    button.dataset.taskText = taskText;
    
    const stateIcon = isCompleted ? '✓' : (isSetup ? '⚙️' : '○');
    const stateLabel = isCompleted ? 'COMPLETED' : (isSetup ? 'SETUP' : 'START');
    
    button.innerHTML = `
        <div class="task-button-content">
            <div class="task-button-header">
                <span class="task-number">${number}</span>
                <span class="task-state-icon">${stateIcon}</span>
            </div>
            <div class="task-button-text">${taskText}</div>
            <div class="task-button-footer">
                <span class="task-state-label">${stateLabel}</span>
                <span class="task-arrow">→</span>
            </div>
        </div>
    `;
    
    button.addEventListener('click', () => handleTaskClick(taskText));
    return button;
}

function updateTaskProgress() {
    const totalTasks = document.querySelectorAll('.task-button').length;
    const completed = completedTasks.length;
    
    const progressCount = document.getElementById('progressCount');
    const progressBarFill = document.getElementById('progressBarFill');
    
    if (progressCount) progressCount.textContent = `${completed} of ${totalTasks}`;
    if (progressBarFill) {
        progressBarFill.style.width = `${totalTasks > 0 ? (completed / totalTasks) * 100 : 0}%`;
    }
}

// ============================================================================
// PHASE 3: TUTORIAL GENERATION
// ============================================================================

async function handleTaskClick(taskText) {
    currentAtomicTask = taskText;
    
    if (isSetupTask(taskText)) {
        showGlobalLoading();
        // Small delay to show loading for setup tasks too
        setTimeout(() => {
        displaySetupTask(taskText);
            hideGlobalLoading();
        }, 10);
        return;
    }
    
    breakdownResults.classList.add('hidden');
    showGlobalLoading();
    
    try {
        // Check if tutorial is preloaded
        if (preloadedTutorials[taskText]) {
            currentTutorial = preloadedTutorials[taskText];
            currentScreenIndex = 0;
            hintCount = 0;
            previousHints = [];
            
            displayTutorial();
            hideGlobalLoading();
            return;
        }
        
        // Generate tutorial if not preloaded
        const response = await fetch('/api/generate-tutorial', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                atomicTask: taskText,
                projectContext: { task: currentTask, technology: currentTechnology }
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to generate tutorial');
        
        currentTutorial = data.tutorial;
        currentScreenIndex = 0;
        hintCount = 0;
        previousHints = [];
        
        displayTutorial();
        
    } catch (error) {
        displayError(error.message);
        breakdownResults.classList.remove('hidden');
    } finally {
        hideGlobalLoading();
    }
}

// ============================================================================
// SETUP TASK DISPLAY
// ============================================================================

function displaySetupTask(taskText) {
    const setupInfo = getSetupInstructions(taskText, currentTechnology);
    
    tutorialTaskTitle.textContent = setupInfo.title;
    currentStepNum.textContent = '1';
    totalSteps.textContent = '1';
    stepProgressFill.style.width = '100%';
    
    const stepContent = document.getElementById('stepContent');
    stepContent.innerHTML = `
        <div class="screen-container screen-setup">
            <div class="screen-header">
                <span class="screen-number">1</span>
                <span class="screen-type-label">Environment Setup</span>
            </div>
            <div class="screen-body">
                <div class="setup-goal-section">
                    <div class="setup-label">Goal</div>
                    <p class="setup-goal-text">${setupInfo.goal}</p>
                </div>
                
                <div class="setup-why-section">
                    <div class="setup-label">Why</div>
                    <p class="setup-why-text">${setupInfo.why}</p>
                </div>
                
                <div class="setup-intro">
                    <strong>Before you start coding, you'll need to set up your environment.</strong><br>
                    Complete each step below and check it off when done.
                </div>
                
                <div class="setup-options">
                    <div class="setup-option">
                        <div class="setup-option-icon">📺</div>
                        <div class="setup-option-content">
                            <h4>Setup your own environment</h4>
                            <p>Watch the tutorial and set up your local environment. This gives you full control over your development setup and helps you learn the fundamentals.</p>
                            <a href="${setupInfo.youtubeLink}" target="_blank" rel="noopener noreferrer" class="setup-option-link">
                        ▶ Watch setup tutorials on YouTube
                    </a>
                        </div>
                </div>
                
                    <div class="setup-option">
                        <div class="setup-option-icon">💻</div>
                        <div class="setup-option-content">
                            <h4>Use online editor</h4>
                            <p>Don't wanna setup the env now? No problem, you can use the online editor with the env setup for you already.</p>
                            <button id="useOnlineEditorBtn" class="setup-option-btn">
                                Start coding now →
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="setup-checklist">
                    ${setupInfo.instructions.map((inst, i) => `
                        <div class="setup-instruction">
                            <input type="checkbox" id="setup-${i}" class="setup-checkbox">
                            <label for="setup-${i}">${inst}</label>
                        </div>
                    `).join('')}
                </div>
                
                <div class="setup-verification">
                    <h4>✅ How to verify:</h4>
                    <p>${setupInfo.verification}</p>
                </div>
            </div>
        </div>
    `;
    
    const checkboxes = stepContent.querySelectorAll('.setup-checkbox');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            const allChecked = Array.from(checkboxes).every(c => c.checked);
            nextStepBtn.disabled = !allChecked;
            if (allChecked && !completedTasks.includes(taskText)) {
                completedTasks.push(taskText);
            }
        });
    });
    
    prevStepBtn.style.display = 'none';
    nextStepBtn.disabled = true;
    nextStepBtn.textContent = 'Complete all steps →';
    nextStepBtn.onclick = () => showTaskBreakdown();
    
    // Add event listener for online editor button
    const useOnlineEditorBtn = document.getElementById('useOnlineEditorBtn');
    if (useOnlineEditorBtn) {
        useOnlineEditorBtn.onclick = () => {
            // Find first non-setup task (Task 2+)
            let firstCodingTask = null;
            let firstCodingTaskIndex = -1;
            
            for (let i = 0; i < allTasks.length; i++) {
                if (!isSetupTask(allTasks[i])) {
                    firstCodingTask = allTasks[i];
                    firstCodingTaskIndex = i;
                    break;
                }
            }
            
            if (firstCodingTask) {
                openOnlineEditor(firstCodingTask);
            } else {
                // No coding tasks found, show error
                alert('No coding tasks available. Please complete setup first.');
            }
        };
    }
    
    document.querySelector('.step-navigation').style.display = 'flex';
    document.querySelector('.step-progress').style.display = 'block';
    
    breakdownResults.classList.add('hidden');
    tutorialView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// TUTORIAL DISPLAY - 10 SCREEN SPINE
// ============================================================================

function displayTutorial() {
    tutorialTaskTitle.textContent = currentAtomicTask;
    
    const screens = currentTutorial.screens || [];
    totalSteps.textContent = screens.length || 10;
    
    document.querySelector('.step-navigation').style.display = 'flex';
    document.querySelector('.step-progress').style.display = 'block';
    
    renderScreen(currentScreenIndex);
    
    breakdownResults.classList.add('hidden');
    tutorialView.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderScreen(index) {
    const screens = currentTutorial.screens || [];
    const screen = screens[index];
    
    if (!screen) {
        console.error('Screen not found at index:', index);
        return;
    }
    
    currentStepNum.textContent = index + 1;
    const progress = ((index + 1) / screens.length) * 100;
    stepProgressFill.style.width = `${progress}%`;
    
    // Show Previous button even on first screen - it will go back to roadmap
    prevStepBtn.style.display = 'inline-block';
    prevStepBtn.disabled = false;
    
    nextStepBtn.textContent = index === screens.length - 1 ? 'Complete Task ✓' : 'Next →';
    nextStepBtn.disabled = false;
    nextStepBtn.onclick = () => navigateScreen(1);
    
    const stepContent = document.getElementById('stepContent');
    let screenHTML = getScreenHTML(screen);
    
    // Add mentor section
    screenHTML += `
        <div class="mentor-section">
            <div class="mentor-query-container">
                <textarea 
                    id="mentorQuery" 
                    class="mentor-query-input" 
                    placeholder="Confused about something? Ask your mentor..."
                    rows="2"
                ></textarea>
                <button id="askMentorBtn" class="btn-mentor">Ask Mentor</button>
            </div>
            <div id="mentorResponse" class="mentor-response hidden"></div>
        </div>
    `;
    
    stepContent.innerHTML = screenHTML;
    
    // Setup mentor button
    const askMentorBtn = document.getElementById('askMentorBtn');
    if (askMentorBtn) {
        askMentorBtn.addEventListener('click', () => askMentor(screen));
    }
    
    // Setup practice screen
    if (screen.screenType === 'now-you-try' || screen.screenType === 'implementation') {
        setupPracticeScreen(screen);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getScreenHTML(screen, isEditorView = false) {
    const type = screen.screenType;
    const content = screen.content || {};
    const num = screen.screenNumber || '';
    
    switch (type) {
        case 'problem-framing':
        case 'problem-context':
            const goalText = content.goal || content.context || content.explanation || '';
            const contextText = content.context || content.explanation || content.goal || '';
            // If we have a goal, use it; otherwise try context/explanation
            const displayText = goalText || contextText || JSON.stringify(content, null, 2);
            return `
                <div class="screen-container screen-problem-context">
                    <div class="screen-header">
                        <span class="screen-number">${num || '1'}</span>
                        <span class="screen-type-label">PROBLEM CONTEXT</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Problem Context'}</h2>
                    <div class="screen-body no-code">
                        ${displayText ? `<p class="goal-text">${displayText}</p>` : '<p>No content available for this screen.</p>'}
                        ${content.constraints ? `<p class="constraints-text"><strong>Constraints:</strong> ${content.constraints}</p>` : ''}
                    </div>
                </div>
            `;
            
        case 'concrete-example':
        case 'input-output':
            return `
                <div class="screen-container screen-input-output">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Expected Behavior</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Expected Behavior'}</h2>
                    <div class="screen-body">
                        <div class="example-io">
                            <div class="io-section input-section">
                                <h4>Input</h4>
                                <pre class="code-block"><code>${escapeHtml(content.input || '')}</code></pre>
                            </div>
                            <div class="io-arrow">→</div>
                            <div class="io-section output-section">
                                <h4>Output</h4>
                                <pre class="code-block result"><code>${escapeHtml(content.output || '')}</code></pre>
                            </div>
                        </div>
                        <p class="explanation-text">${content.explanation || ''}</p>
                    </div>
                </div>
            `;
            
        case 'analogy':
        case 'approach':
            return `
                <div class="screen-container screen-approach">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Approach</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Approach'}</h2>
                    <div class="screen-body">
                        ${content.domain ? `<p class="domain-label"><strong>${content.domain}</strong></p>` : ''}
                        <p class="explanation-text">${content.explanation || content.analogyExplanation || ''}</p>
                        ${content.code ? `<pre class="code-block"><code>${escapeHtml(content.code)}</code></pre>` : ''}
                    </div>
                </div>
            `;
            
        case 'skeleton':
        case 'signature':
            return `
                <div class="screen-container screen-signature">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Function Signature</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Function Signature'}</h2>
                    <div class="screen-body">
                        <p class="instruction-text" style="margin-bottom: 20px; font-size: 1rem; line-height: 1.6; color: #333;">
                            <strong>Let's start creating the function!</strong> Here's the function signature you'll be working with. 
                            This shows you the function name, what parameters it takes, and what it should return. 
                            Don't worry about the implementation yet - we'll build that step by step together.
                        </p>
                        <pre class="code-block"><code>${escapeHtml(content.code || '')}</code></pre>
                        ${content.parameters ? `
                            <div class="parameters-list">
                                <h4>Parameters</h4>
                                <p style="font-size: 0.9rem; color: #666; margin-bottom: 12px;">
                                    These are the inputs your function will receive:
                                </p>
                                <ul>
                                    ${content.parameters.map(p => `<li><code>${p.name}</code> — ${p.description}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${content.returns ? `
                            <div class="returns-section" style="margin-top: 20px;">
                                <p class="returns-text"><strong>Returns:</strong> ${content.returns}</p>
                                <p style="font-size: 0.9rem; color: #666; margin-top: 8px;">
                                    This is what your function should give back when it's done.
                                </p>
                            </div>
                        ` : ''}
                        <p class="instruction-text" style="margin-top: 24px; padding: 16px; background: rgba(0, 212, 255, 0.1); border-radius: 8px; border-left: 3px solid #00d4ff; font-size: 0.95rem; color: #333;">
                            <strong>What's next?</strong> We'll walk through building this function together. 
                            Click "Continue" to see how we approach solving this step by step!
                        </p>
                    </div>
                </div>
            `;
            
        case 'key-construct':
        case 'data-structure':
            return `
                <div class="screen-container screen-data-structure">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Data Structure</span>
                    </div>
                    <h2 class="screen-title">${content.structure || screen.title || 'Storage Strategy'}</h2>
                    <div class="screen-body">
                        <p class="reasoning-text">${content.reasoning || content.whyNeeded || ''}</p>
                        <pre class="code-block"><code>${escapeHtml(content.code || '')}</code></pre>
                    </div>
                </div>
            `;
            
        case 'control-flow':
        case 'iteration':
            return `
                <div class="screen-container screen-iteration">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Iteration</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Iteration Strategy'}</h2>
                    <div class="screen-body">
                        ${content.strategy ? `<p class="strategy-label"><strong>${content.strategy}</strong></p>` : ''}
                        <p class="reasoning-text">${content.reasoning || content.explanation || ''}</p>
                        <pre class="code-block"><code>${escapeHtml(content.code || '')}</code></pre>
                    </div>
                </div>
            `;
            
        case 'core-logic':
            return `
                <div class="screen-container screen-core-logic">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Core Logic</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Core Logic'}</h2>
                    <div class="screen-body">
                        <p class="reasoning-text">${content.reasoning || content.explanation || ''}</p>
                        ${content.steps ? `
                            <ol class="logic-steps">
                                ${content.steps.map(s => `<li>${s}</li>`).join('')}
                            </ol>
                        ` : ''}
                        <pre class="code-block"><code>${escapeHtml(content.code || '')}</code></pre>
                        ${content.walkthrough ? `
                            <div class="walkthrough-section">
                                <h4>Step-by-Step Example</h4>
                                <p class="walkthrough-description">${content.walkthrough.description || ''}</p>
                                <div class="iteration-trace">
                                    ${(content.walkthrough.iterations || []).map(iter => `
                                        <div class="iteration-step">
                                            <div class="iteration-header">${iter.step}</div>
                                            <div class="iteration-action">${iter.action}</div>
                                            <div class="iteration-state"><code>${iter.seenState}</code></div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            
        case 'pattern-summary':
            return `
                <div class="screen-container screen-pattern-summary">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Pattern Summary</span>
                    </div>
                    <h2 class="screen-title">${content.patternName || screen.title || 'Pattern Summary'}</h2>
                    <div class="screen-body no-code">
                        <p class="pattern-description">${content.description || content.definition || ''}</p>
                        ${content.applications || content.otherApplications ? `
                            <div class="applications-list">
                                <h4>Other applications</h4>
                                <ul>
                                    ${(content.applications || content.otherApplications).map(a => `<li>${a}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
            
        case 'now-you-try':
        case 'implementation':
            return `
                <div class="screen-container screen-implementation">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Implementation</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Implementation'}</h2>
                    <div class="screen-body">
                        <p class="instruction-text">${content.instruction || ''}</p>
                        ${content.testCase ? `<p class="test-case"><strong>Test:</strong> <code>${content.testCase}</code></p>` : ''}
                        
                        ${!isEditorView ? `
                        <div class="code-editor-container">
                            <textarea id="codeEditor" class="code-editor" spellcheck="false">${escapeHtml(content.starterCode || '// Your code here')}</textarea>
                        </div>
                        
                        <div id="validationFeedback" class="validation-feedback hidden"></div>
                        <div id="hintDisplay" class="hint-display hidden"></div>
                        ` : ''}
                        
                        <div class="practice-actions">
                            ${!isEditorView ? '<button id="checkCodeBtn" class="btn-primary">Check Code</button>' : ''}
                            <button id="showHintBtn" class="btn-secondary">Hint (${hintCount}/3)</button>
                            <button id="showSolutionBtn" class="btn-secondary">View Solution</button>
                        </div>
                    </div>
                </div>
            `;
            
        case 'solution':
            return `
                <div class="screen-container screen-solution">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Reference Solution</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Reference Solution'}</h2>
                    <div class="screen-body">
                        <pre class="code-block"><code>${escapeHtml(content.code || '')}</code></pre>
                        ${content.complexity ? `<p class="complexity-note"><strong>Complexity:</strong> ${content.complexity}</p>` : ''}
                    </div>
                </div>
            `;
            
        default:
            return `
                <div class="screen-container">
                    <h2>${screen.title || 'Step'}</h2>
                    <div class="screen-body">
                        <p>${JSON.stringify(content)}</p>
                    </div>
                </div>
            `;
    }
}

function setupPracticeScreen(screen) {
    const checkBtn = document.getElementById('checkCodeBtn');
    const hintBtn = document.getElementById('showHintBtn');
    const solutionBtn = document.getElementById('showSolutionBtn');
    
    if (checkBtn) checkBtn.addEventListener('click', validateCode);
    if (hintBtn) hintBtn.addEventListener('click', requestHint);
    if (solutionBtn) solutionBtn.addEventListener('click', showSolution);
}

// Setup practice screen buttons for editor view (uses Monaco editor instead of textarea)
function setupPracticeScreenForEditor(screen) {
    const checkBtn = document.getElementById('checkCodeBtn');
    const hintBtn = document.getElementById('showHintBtn');
    const solutionBtn = document.getElementById('showSolutionBtn');
    
    if (checkBtn) {
        // Remove any existing listeners by cloning
        const newCheckBtn = checkBtn.cloneNode(true);
        checkBtn.parentNode.replaceChild(newCheckBtn, checkBtn);
        newCheckBtn.addEventListener('click', () => {
            if (monacoEditor) {
                const code = monacoEditor.getValue();
                validateCodeForEditor(code, screen);
            } else {
                validateCode();
            }
        });
    }
    
    if (hintBtn) {
        const newHintBtn = hintBtn.cloneNode(true);
        hintBtn.parentNode.replaceChild(newHintBtn, hintBtn);
        newHintBtn.addEventListener('click', () => {
            if (monacoEditor) {
                const code = monacoEditor.getValue();
                requestHintForEditor(code, screen);
            } else {
                requestHint();
            }
        });
    }
    
    if (solutionBtn) {
        const newSolutionBtn = solutionBtn.cloneNode(true);
        solutionBtn.parentNode.replaceChild(newSolutionBtn, solutionBtn);
        newSolutionBtn.addEventListener('click', () => {
            showSolutionForEditor(screen);
        });
    }
}

async function validateCodeForEditor(userCode, screen) {
    if (!userCode || !userCode.trim()) {
        const output = document.getElementById('editorOutputContent');
        if (output) {
            output.innerHTML = '<span style="color: #f87171;">⚠️ Please write some code first!</span>';
        }
        return;
    }
    
    const checkBtn = document.getElementById('checkCodeBtn');
    if (checkBtn) {
        checkBtn.disabled = true;
        checkBtn.textContent = 'Checking...';
    }
    
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/validate-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userCode,
                tutorial: currentTutorial,
                atomicTask: currentAtomicTask
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Validation failed');
        
        const output = document.getElementById('editorOutputContent');
        const validation = data.validation;
        
        if (output) {
            if (validation && validation.correct) {
                output.innerHTML = '<span style="color: #00ff88;">✅ Correct! Great job! Your code meets all the requirements.</span>';
                if (currentAtomicTask && !completedTasks.includes(currentAtomicTask)) {
                    completedTasks.push(currentAtomicTask);
                }
                updateEditorProgressIndicator();
            } else if (validation && validation.feedback && validation.feedback.length > 0) {
                const feedbackMessages = validation.feedback.map(f => f.message || f).join('\n');
                output.innerHTML = `<div style="color: #f87171;">
                    <strong>⚠️ Not quite right. Here's what to improve:</strong><br>
                    ${feedbackMessages.split('\n').map(msg => `• ${msg}`).join('<br>')}
                    ${validation.suggestion ? `<br><br><strong>Suggestion:</strong> ${validation.suggestion}` : ''}
                    ${validation.encouragement ? `<br><br><em>${validation.encouragement}</em>` : ''}
                </div>`;
            } else {
                output.innerHTML = `<span style="color: #f87171;">⚠️ ${validation?.message || 'Not quite right. Keep trying!'}</span>`;
            }
        }
    } catch (error) {
        console.error('Code validation error:', error);
        const output = document.getElementById('editorOutputContent');
        if (output) {
            output.innerHTML = `<span style="color: #f87171;">Error: ${error.message}</span>`;
        }
    } finally {
        if (checkBtn) {
            checkBtn.disabled = false;
            checkBtn.textContent = 'Check Code';
        }
        hideGlobalLoading();
    }
}

async function requestHintForEditor(userCode, screen) {
    if (hintCount >= 3) {
        const output = document.getElementById('editorOutputContent');
        if (output) {
            output.innerHTML = '<span style="color: #666;">You\'ve used all 3 hints. Try working through the problem step by step!</span>';
        }
        return;
    }
    
    const hintBtn = document.getElementById('showHintBtn');
    if (hintBtn) {
        hintBtn.disabled = true;
        hintBtn.textContent = 'Loading hint...';
    }
    
    showGlobalLoading();
    
    try {
        hintCount++;
        const response = await fetch('/api/generate-hint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userCode: userCode || '',
                tutorial: currentTutorial,
                hintNumber: hintCount,
                previousHints: previousHints
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to generate hint');
        
        previousHints.push(data.hint.hint);
        showHintForEditor(data.hint);
        
    } catch (error) {
        console.error('Hint error:', error);
        const output = document.getElementById('editorOutputContent');
        if (output) {
            output.innerHTML = `<span style="color: #f87171;">Error: ${error.message}</span>`;
        }
    } finally {
        if (hintBtn) {
            hintBtn.disabled = false;
            hintBtn.textContent = hintCount >= 3 ? 'No more hints' : `Hint (${hintCount}/3)`;
        }
        hideGlobalLoading();
    }
}

function showHintForEditor(hint) {
    const hintDisplay = document.getElementById('hintDisplay');
    const output = document.getElementById('editorOutputContent');
    
    if (hintDisplay) {
        hintDisplay.classList.remove('hidden');
        hintDisplay.innerHTML = `
            <h4>💡 Hint ${hintCount}/3</h4>
            <p>${hint.hint}</p>
        `;
    }
    
    if (output) {
        output.innerHTML = `<div style="color: #00d4ff;">
            <strong>💡 Hint ${hintCount}/3:</strong><br>
            ${hint.hint}
        </div>`;
    }
}

function showSolutionForEditor(screen) {
    const solutionScreen = currentTutorial.screens?.find(s => s.screenType === 'solution');
    const output = document.getElementById('editorOutputContent');
    
    if (solutionScreen && solutionScreen.content && solutionScreen.content.code) {
        const solutionCode = solutionScreen.content.code.replace(/\\n/g, '\n');
        
        // Update Monaco editor with solution
        if (monacoEditor) {
            monacoEditor.setValue(solutionCode);
        }
        
        if (output) {
            output.innerHTML = '<span style="color: #00d4ff;">📖 Solution loaded into editor. Study it and try to understand each part!</span>';
        }
    } else if (output) {
        output.innerHTML = '<span style="color: #666;">Solution not available for this task.</span>';
    }
}

// ============================================================================
// NAVIGATION
// ============================================================================

function navigateScreen(direction) {
    const screens = currentTutorial.screens || [];
    const newIndex = currentScreenIndex + direction;
    
    // If going back from first screen, return to roadmap
    if (newIndex < 0) {
        showGlobalLoading();
        setTimeout(() => {
            showTaskBreakdown();
            hideGlobalLoading();
        }, 10);
        return;
    }
    
    showGlobalLoading();
    
    if (newIndex >= screens.length) {
        if (!completedTasks.includes(currentAtomicTask)) {
            completedTasks.push(currentAtomicTask);
        }
        setTimeout(() => {
        showTaskBreakdown();
            hideGlobalLoading();
        }, 10);
        return;
    }
    
    currentScreenIndex = newIndex;
    setTimeout(() => {
    renderScreen(currentScreenIndex);
        hideGlobalLoading();
    }, 10);
}

function showTaskBreakdown() {
    showGlobalLoading();
    tutorialView.classList.add('hidden');
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    if (questionBankSection) questionBankSection.classList.add('hidden');
    breakdownResults.classList.remove('hidden');
    
    refreshTaskList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => hideGlobalLoading(), 50);
}

function refreshTaskList() {
    document.querySelectorAll('.task-button').forEach(button => {
        const taskText = button.dataset.taskText;
        const isCompleted = completedTasks.includes(taskText);
        
        button.className = `task-button ${isCompleted ? 'task-completed' : 'task-not-started'}`;
        
        const stateIcon = button.querySelector('.task-state-icon');
        const stateLabel = button.querySelector('.task-state-label');
        
        if (isCompleted) {
            if (stateIcon) stateIcon.textContent = '✓';
            if (stateLabel) stateLabel.textContent = 'COMPLETED';
        }
    });
    
    updateTaskProgress();
}

function showObjectives() {
    showGlobalLoading();
    breakdownResults.classList.add('hidden');
    tutorialView.classList.add('hidden');
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    if (questionBankSection) questionBankSection.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => hideGlobalLoading(), 50);
}

// ============================================================================
// ASK MENTOR
// ============================================================================

async function askMentor(screen) {
    const queryInput = document.getElementById('mentorQuery');
    const askBtn = document.getElementById('askMentorBtn');
    const mentorModal = document.getElementById('mentorModal');
    const mentorModalBody = document.getElementById('mentorModalBody');
    
    const question = queryInput ? queryInput.value.trim() : '';
    
    if (!question) {
        // Show error in modal
        if (mentorModal && mentorModalBody) {
            mentorModal.classList.remove('hidden');
            mentorModalBody.innerHTML = '<p class="mentor-error">Please type a question first.</p>';
        }
        return;
    }
    
    // Visual feedback: disable button and show loading state
    if (askBtn) {
        askBtn.disabled = true;
        askBtn.textContent = 'Asking...';
        askBtn.style.opacity = '0.7';
        askBtn.style.cursor = 'not-allowed';
    }
    
    // Show modal with loading state
    if (mentorModal && mentorModalBody) {
        mentorModal.classList.remove('hidden');
        mentorModalBody.innerHTML = '<div class="mentor-loading"><div class="global-spinner" style="margin: 0 auto; width: 40px; height: 40px;"></div><p style="margin-top: 20px;">Your mentor is thinking...</p></div>';
    }
    
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/ask-mentor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question,
                screen,
                tutorial: currentTutorial,
                atomicTask: currentAtomicTask
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to get response');
        
        // Show response in modal
        if (mentorModal && mentorModalBody) {
            mentorModalBody.innerHTML = `
                <div class="mentor-answer">
                    <strong>Mentor:</strong>
                    <p>${data.answer}</p>
                </div>
            `;
        }
        
        // Clear input
        if (queryInput) {
            queryInput.value = '';
        }
        
    } catch (error) {
        if (mentorModal && mentorModalBody) {
            mentorModalBody.innerHTML = `<p class="mentor-error">Error: ${error.message}</p>`;
        }
    } finally {
        if (askBtn) {
            askBtn.disabled = false;
            askBtn.textContent = 'Ask Mentor';
            askBtn.style.opacity = '1';
            askBtn.style.cursor = 'pointer';
        }
        hideGlobalLoading();
    }
}

async function askMentorForEditor(screen) {
    const queryInput = document.getElementById('editorMentorQuery');
    const askBtn = document.getElementById('editorAskMentorBtn');
    const mentorModal = document.getElementById('mentorModal');
    const mentorModalBody = document.getElementById('mentorModalBody');
    
    const question = queryInput ? queryInput.value.trim() : '';
    
    if (!question) {
        // Show error in modal
        if (mentorModal && mentorModalBody) {
            mentorModal.classList.remove('hidden');
            mentorModalBody.innerHTML = '<p class="mentor-error">Please type a question first.</p>';
        }
        return;
    }
    
    // Visual feedback: disable button and show loading state
    if (askBtn) {
        askBtn.disabled = true;
        askBtn.textContent = 'Asking...';
        askBtn.style.opacity = '0.7';
        askBtn.style.cursor = 'not-allowed';
    }
    
    // Show modal with loading state
    if (mentorModal && mentorModalBody) {
        mentorModal.classList.remove('hidden');
        mentorModalBody.innerHTML = '<div class="mentor-loading"><div class="global-spinner" style="margin: 0 auto; width: 40px; height: 40px;"></div><p style="margin-top: 20px;">Your mentor is thinking...</p></div>';
    }
    
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/ask-mentor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                question,
                screen,
                tutorial: currentTutorial,
                atomicTask: currentAtomicTask
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to get response');
        
        // Show response in modal
        if (mentorModal && mentorModalBody) {
            mentorModalBody.innerHTML = `
                <div class="mentor-answer">
                    <strong>Mentor:</strong>
                    <p>${data.answer}</p>
                </div>
            `;
        }
        
        // Clear input
        if (queryInput) {
            queryInput.value = '';
        }
        
    } catch (error) {
        if (mentorModal && mentorModalBody) {
            mentorModalBody.innerHTML = `<p class="mentor-error">Error: ${error.message}</p>`;
        }
    } finally {
        if (askBtn) {
            askBtn.disabled = false;
            askBtn.textContent = 'Ask Mentor';
            askBtn.style.opacity = '1';
            askBtn.style.cursor = 'pointer';
        }
        hideGlobalLoading();
    }
}

// ============================================================================
// CODE VALIDATION
// ============================================================================

async function validateCode() {
    const editor = document.getElementById('codeEditor');
    const userCode = editor ? editor.value.trim() : '';
    
    if (!userCode) {
        showValidationFeedback({
            correct: false,
            feedback: [{ type: 'error', message: 'Please write some code first!' }],
            encouragement: 'Give it a try!'
        });
        return;
    }
    
    const checkBtn = document.getElementById('checkCodeBtn');
    if (checkBtn) {
        checkBtn.disabled = true;
        checkBtn.textContent = 'Checking...';
    }
    
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/validate-code', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userCode,
                tutorial: currentTutorial,
                atomicTask: currentAtomicTask
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Validation failed');
        
        showValidationFeedback(data.validation);
        
    } catch (error) {
        showValidationFeedback({
            correct: false,
            feedback: [{ type: 'error', message: error.message }],
            suggestion: 'Try again or continue.',
            encouragement: 'Keep going!'
        });
    } finally {
        if (checkBtn) {
            checkBtn.disabled = false;
            checkBtn.textContent = 'Check Code';
        }
        hideGlobalLoading();
    }
}

function showValidationFeedback(validation) {
    const feedback = document.getElementById('validationFeedback');
    if (!feedback) return;
    
    feedback.innerHTML = `
        <div class="${validation.correct ? 'feedback-success' : 'feedback-error'}">
            <h4>${validation.correct ? '✅ Correct!' : '⚠️ Not quite right'}</h4>
            ${validation.feedback ? `
                <ul>
                    ${validation.feedback.map(f => `<li class="feedback-${f.type}">${f.message}</li>`).join('')}
                </ul>
            ` : ''}
            ${validation.suggestion ? `<p class="suggestion">💡 ${validation.suggestion}</p>` : ''}
            ${validation.encouragement ? `<p class="encouragement">${validation.encouragement}</p>` : ''}
        </div>
    `;
    feedback.classList.remove('hidden');
}

// ============================================================================
// HINT SYSTEM
// ============================================================================

async function requestHint() {
    const editor = document.getElementById('codeEditor');
    const userCode = editor ? editor.value.trim() : '';
    
    hintCount++;
    
    if (hintCount > 3) {
        const hintDisplay = document.getElementById('hintDisplay');
        if (hintDisplay) {
            hintDisplay.innerHTML = '<p>You\'ve used all 3 hints! Try the solution button.</p>';
            hintDisplay.classList.remove('hidden');
        }
        return;
    }
    
    const hintBtn = document.getElementById('showHintBtn');
    if (hintBtn) {
        hintBtn.disabled = true;
        hintBtn.textContent = 'Thinking...';
    }
    
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/generate-hint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userCode,
                tutorial: currentTutorial,
                hintNumber: hintCount,
                previousHints
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to get hint');
        
        previousHints.push(data.hint.hint);
        showHint(data.hint);
        
    } catch (error) {
        displayError(error.message);
    } finally {
        if (hintBtn) {
            hintBtn.disabled = false;
            hintBtn.textContent = hintCount >= 3 ? 'No more hints' : `Hint (${hintCount}/3)`;
        }
        hideGlobalLoading();
    }
}

function showHint(hint) {
    const hintDisplay = document.getElementById('hintDisplay');
    if (!hintDisplay) return;
    
    hintDisplay.innerHTML = `
        <div class="hint-content">
            <h4>💡 Hint ${hintCount}/3</h4>
            <p>${hint.hint}</p>
            ${hint.encouragement ? `<p class="hint-encouragement">${hint.encouragement}</p>` : ''}
        </div>
    `;
    hintDisplay.classList.remove('hidden');
}

// ============================================================================
// SOLUTION
// ============================================================================

function showSolution() {
    const solutionScreen = currentTutorial.screens?.find(s => s.screenType === 'solution');
    const solution = solutionScreen?.content?.code || '';
    
    if (!solution) {
        const feedback = document.getElementById('validationFeedback');
        if (feedback) {
            feedback.innerHTML = '<div class="feedback-error"><p>Solution not available.</p></div>';
            feedback.classList.remove('hidden');
        }
        return;
    }
    
    const confirmed = confirm('Are you sure you want to see the solution? Try hints first!');
    
    if (confirmed) {
        const editor = document.getElementById('codeEditor');
        if (editor) {
            editor.value = solution.replace(/\\n/g, '\n');
        }
        
        const feedback = document.getElementById('validationFeedback');
        if (feedback) {
            feedback.innerHTML = `
                <div class="solution-shown">
                    <h4>📖 Solution Revealed</h4>
                    <p>Study the code and make sure you understand each part.</p>
                </div>
            `;
            feedback.classList.remove('hidden');
        }
    }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/\\n/g, '\n');
}

function displayError(message) {
    errorMessage.textContent = message;
    errorDiv.classList.remove('hidden');
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetToStart() {
    showGlobalLoading();
    hideAll();
    mainHeader.classList.remove('hidden');
    form.classList.remove('hidden');
    if (questionBankSection) questionBankSection.classList.remove('hidden');
    form.reset();
    currentTask = null;
    currentTechnology = null;
    currentAtomicTask = null;
    currentTutorial = null;
    currentScreenIndex = 0;
    hintCount = 0;
    previousHints = [];
    completedTasks = [];
    taskInput.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => hideGlobalLoading(), 50);
}

function hideAll() {
    resultsDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    breakdownResults.classList.add('hidden');
    tutorialView.classList.add('hidden');
    const onlineEditorView = document.getElementById('onlineEditorView');
    if (onlineEditorView) onlineEditorView.classList.add('hidden');
}

// ============================================================================
// ONLINE EDITOR FUNCTIONALITY
// ============================================================================

async function openOnlineEditor(taskText) {
    // Hide tutorial view and breakdown view, show editor view
    tutorialView.classList.add('hidden');
    breakdownResults.classList.add('hidden');
    const onlineEditorView = document.getElementById('onlineEditorView');
    if (!onlineEditorView) return;
    
    onlineEditorView.classList.remove('hidden');
    
    // Find the current task index
    currentEditorTaskIndex = allTasks.findIndex(t => t === taskText);
    if (currentEditorTaskIndex === -1) currentEditorTaskIndex = 0;
    
    // If this is a setup task, skip to the first non-setup task
    if (isSetupTask(taskText)) {
        let nextTaskIndex = currentEditorTaskIndex + 1;
        while (nextTaskIndex < allTasks.length && isSetupTask(allTasks[nextTaskIndex])) {
            nextTaskIndex++;
        }
        if (nextTaskIndex < allTasks.length) {
            taskText = allTasks[nextTaskIndex];
            currentEditorTaskIndex = nextTaskIndex;
            // Reset tutorial state to force reload of the new task
            currentTutorial = null;
            currentAtomicTask = null;
        } else {
            // No non-setup tasks found, show message
            const editorTutorialContent = document.getElementById('editorTutorialContent');
            if (editorTutorialContent) {
                editorTutorialContent.innerHTML = '<p style="color: #666; padding: 20px;">All tasks are setup tasks. Please complete setup first.</p>';
            }
            return;
        }
    }
    
    // Initialize Monaco editor if not already done
    if (!monacoEditor) {
        await initializeMonacoEditor();
    }
    
    // Load tutorial for this task if not already loaded (skip for setup tasks)
    if (!isSetupTask(taskText) && (!currentTutorial || currentAtomicTask !== taskText)) {
        // Show friendly loading message in tutorial pane
        const editorTutorialContent = document.getElementById('editorTutorialContent');
        if (editorTutorialContent) {
            editorTutorialContent.innerHTML = `
                <div style="padding: 40px 20px; text-align: center; color: #666;">
                    <div style="font-size: 3rem; margin-bottom: 20px;">✨</div>
                    <h3 style="color: #333; margin-bottom: 16px; font-size: 1.3rem;">We're crafting your personalized tutorial!</h3>
                    <p style="font-size: 1rem; line-height: 1.6; max-width: 500px; margin: 0 auto;">
                        We're working on <strong>"${taskText}"</strong> right now, creating step-by-step guidance just for you. 
                        This usually takes about a minute - we'll be with you soon!
                    </p>
                    <div style="margin-top: 30px;">
                        <div class="global-spinner" style="margin: 0 auto; width: 40px; height: 40px;"></div>
                    </div>
                </div>
            `;
        }
        
        showGlobalLoading();
        try {
            const response = await fetch('/api/generate-tutorial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    atomicTask: taskText,
                    projectContext: { task: currentTask, technology: currentTechnology }
                })
            });
            
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to generate tutorial');
            
            currentTutorial = data.tutorial;
            currentAtomicTask = taskText;
            // Explicitly set to first screen
            currentScreenIndex = 0;
            
            // Force immediate render of first screen
            if (currentTutorial && currentTutorial.screens && currentTutorial.screens.length > 0) {
                if (editorTutorialContent && currentTutorial.screens[0]) {
                    try {
                        editorTutorialContent.innerHTML = getScreenHTML(currentTutorial.screens[0]);
                    } catch (error) {
                        console.error('Error rendering first screen immediately:', error);
                    }
                }
            }
        } catch (error) {
            displayError(error.message);
            if (editorTutorialContent) {
                editorTutorialContent.innerHTML = `
                    <div style="padding: 40px 20px; text-align: center; color: #f87171;">
                        <h3>Oops! Something went wrong</h3>
                        <p>${error.message}</p>
                        <p style="margin-top: 20px; font-size: 0.9rem; color: #666;">Please try again or refresh the page.</p>
                    </div>
                `;
            }
            hideGlobalLoading();
            return;
        } finally {
            hideGlobalLoading();
        }
    }
    
    // Ensure screen index is properly initialized
    if (currentTutorial && currentTutorial.screens && currentTutorial.screens.length > 0) {
        if (currentScreenIndex < 0 || currentScreenIndex >= currentTutorial.screens.length) {
            currentScreenIndex = 0;
        }
        // Ensure first screen is rendered if not already
        const editorTutorialContent = document.getElementById('editorTutorialContent');
        if (editorTutorialContent && !editorTutorialContent.innerHTML.trim()) {
            const screen = currentTutorial.screens[currentScreenIndex];
            if (screen) {
                try {
                    editorTutorialContent.innerHTML = getScreenHTML(screen);
                } catch (error) {
                    console.error('Error rendering screen in fallback:', error);
                }
            }
        }
    }
    
    // Update editor view (this will refresh everything)
    updateEditorView();
    updateEditorProgressIndicator();
    updateEditorCode();
}

async function initializeMonacoEditor() {
    return new Promise((resolve, reject) => {
        if (typeof monaco !== 'undefined' && monaco.editor) {
            // Monaco already loaded
            createEditorInstance(resolve, reject);
        } else if (typeof require !== 'undefined') {
            // Use require.js
            require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
            require(['vs/editor/editor.main'], () => {
                createEditorInstance(resolve, reject);
            });
        } else {
            // Wait a bit for script to load
            setTimeout(() => {
                if (typeof monaco !== 'undefined' && monaco.editor) {
                    createEditorInstance(resolve, reject);
                } else {
                    reject(new Error('Monaco editor failed to load'));
                }
            }, 1000);
        }
    });
}

function createEditorInstance(resolve, reject) {
    const editorContainer = document.getElementById('monacoEditor');
    if (!editorContainer) {
        reject(new Error('Editor container not found'));
        return;
    }
    
    const language = currentTechnology === 'JavaScript' || currentTechnology === 'JS' ? 'javascript' :
                   currentTechnology === 'TypeScript' || currentTechnology === 'TS' ? 'typescript' :
                   currentTechnology === 'Python' ? 'python' : 'javascript';
    
    monacoEditor = monaco.editor.create(editorContainer, {
        value: getCodeForCurrentTask(),
        language: language,
        theme: 'vs-dark',
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true
    });
    
    resolve();
}

function updateEditorView() {
    const editorTutorialTitle = document.getElementById('editorTutorialTitle');
    const editorTutorialContent = document.getElementById('editorTutorialContent');
    const editorCodeTitle = document.getElementById('editorCodeTitle');
    const editorLanguage = document.getElementById('editorLanguage');
    const editorPrevBtn = document.getElementById('editorPrevBtn');
    const editorNextBtn = document.getElementById('editorNextBtn');
    
    if (editorTutorialTitle) {
        editorTutorialTitle.textContent = currentAtomicTask || 'Tutorial';
    }
    
    if (editorCodeTitle) {
        editorCodeTitle.textContent = currentAtomicTask || 'Code Editor';
    }
    
    if (editorLanguage) {
        editorLanguage.textContent = currentTechnology || 'JavaScript';
    }
    
    // Render current tutorial screen
    if (currentTutorial && currentTutorial.screens && currentTutorial.screens.length > 0) {
        // Ensure we have a valid screen index
        if (currentScreenIndex < 0 || currentScreenIndex >= currentTutorial.screens.length) {
            currentScreenIndex = 0;
        }
        
        const screen = currentTutorial.screens[currentScreenIndex];
        
        if (screen && editorTutorialContent) {
            try {
                let screenHTML = getScreenHTML(screen, true); // true = isEditorView
                if (screenHTML && screenHTML.trim()) {
                    // Add mentor section for editor view
                    screenHTML += `
                        <div class="mentor-section">
                            <div class="mentor-query-container">
                                <textarea 
                                    id="editorMentorQuery" 
                                    class="mentor-query-input" 
                                    placeholder="Stuck on something from this screen? Ask your mentor for help! For example: 'What does console.log do?' or 'How do left and right pointers work in binary search?'"
                                    rows="3"
                                ></textarea>
                                <button id="editorAskMentorBtn" class="btn-mentor">Ask Mentor</button>
                            </div>
                            <div id="editorMentorResponse" class="mentor-response hidden"></div>
                        </div>
                    `;
                    
                    editorTutorialContent.innerHTML = screenHTML;
                    
                    // Setup practice screen buttons if this is an implementation screen
                    if (screen.screenType === 'now-you-try' || screen.screenType === 'implementation') {
                        setupPracticeScreenForEditor(screen);
                    }
                    
                    // Setup mentor button for editor view
                    const editorAskMentorBtn = document.getElementById('editorAskMentorBtn');
                    if (editorAskMentorBtn) {
                        editorAskMentorBtn.addEventListener('click', () => askMentorForEditor(screen));
                    }
                } else {
                    console.warn('getScreenHTML returned empty string for screen:', screen);
                    editorTutorialContent.innerHTML = `<div class="screen-container"><p>Screen ${currentScreenIndex + 1}: ${screen.screenType || 'Unknown'}</p></div>`;
                }
            } catch (error) {
                console.error('Error rendering screen:', error, screen);
                editorTutorialContent.innerHTML = `<div class="screen-container"><p>Error rendering screen. Screen type: ${screen.screenType || 'Unknown'}</p></div>`;
            }
        } else if (editorTutorialContent) {
            // If screen not found, show first screen
            const firstScreen = currentTutorial.screens[0];
            if (firstScreen) {
                currentScreenIndex = 0;
                try {
                    editorTutorialContent.innerHTML = getScreenHTML(firstScreen);
                } catch (error) {
                    console.error('Error rendering first screen:', error);
                    editorTutorialContent.innerHTML = '<p style="color: #666; padding: 20px;">Error loading tutorial content.</p>';
                }
            } else {
                editorTutorialContent.innerHTML = '<p style="color: #666; padding: 20px;">No tutorial screens available.</p>';
            }
        }
        
        // Update navigation buttons
        if (editorPrevBtn) {
            editorPrevBtn.disabled = currentScreenIndex === 0;
            editorPrevBtn.style.opacity = currentScreenIndex === 0 ? '0.5' : '1';
        }
        
        if (editorNextBtn) {
            const isLastScreen = currentScreenIndex >= currentTutorial.screens.length - 1;
            editorNextBtn.textContent = isLastScreen ? 'Complete →' : 'Continue →';
        }
    } else if (editorTutorialContent) {
        // Show loading or placeholder if tutorial not loaded
        if (!currentTutorial) {
            editorTutorialContent.innerHTML = '<p style="color: #666; padding: 20px;">Loading tutorial content...</p>';
        } else {
            editorTutorialContent.innerHTML = '<p style="color: #666; padding: 20px;">No tutorial screens available. Tutorial loaded but has no screens.</p>';
        }
    }
}

function updateEditorProgressIndicator() {
    const indicator = document.getElementById('editorProgressIndicator');
    if (!indicator || !allTasks.length) return;
    
    // Only update if indicator is visible
    if (indicator.classList.contains('hidden') && !indicator.classList.contains('visible')) {
        return;
    }
    
    let html = '<div style="font-weight: 600; margin-bottom: 12px; color: rgba(255,255,255,0.9); font-size: 0.85rem;">🚀 Your Learning Roadmap</div>';
    
    allTasks.forEach((task, index) => {
        const isCurrent = index === currentEditorTaskIndex;
        const isCompleted = completedTasks.includes(task);
        const isSetup = isSetupTask(task);
        
        let status = '';
        if (isSetup) {
            status = 'SETUP';
        } else if (isCompleted) {
            status = '✓';
        } else if (index < currentEditorTaskIndex) {
            status = '○';
        }
        
        const taskClass = isCurrent ? 'current' : (isCompleted ? 'completed' : '');
        html += `
            <div class="editor-progress-task ${taskClass}" data-task-index="${index}" style="cursor: pointer;">
                <strong>Task ${index + 1}:</strong> ${task} ${status ? `<span style="float: right;">${status}</span>` : ''}
            </div>
        `;
    });
    
    indicator.innerHTML = html;
    
    // Add click handlers for task navigation
    indicator.querySelectorAll('.editor-progress-task').forEach(taskEl => {
        taskEl.addEventListener('click', () => {
            const taskIndex = parseInt(taskEl.dataset.taskIndex);
            if (taskIndex !== undefined && taskIndex !== currentEditorTaskIndex) {
                switchToTask(taskIndex);
            }
        });
    });
}

async function switchToTask(taskIndex) {
    if (taskIndex < 0 || taskIndex >= allTasks.length) return;
    
    const taskText = allTasks[taskIndex];
    
    // Skip setup tasks - find next non-setup task
    if (isSetupTask(taskText)) {
        let nextTaskIndex = taskIndex + 1;
        while (nextTaskIndex < allTasks.length && isSetupTask(allTasks[nextTaskIndex])) {
            nextTaskIndex++;
        }
        if (nextTaskIndex < allTasks.length) {
            return switchToTask(nextTaskIndex);
        } else {
            // No more non-setup tasks
            const onlineEditorView = document.getElementById('onlineEditorView');
            if (onlineEditorView) onlineEditorView.classList.add('hidden');
            showTaskBreakdown();
            return;
        }
    }
    
    currentEditorTaskIndex = taskIndex;
    currentAtomicTask = taskText;
    
    // Load tutorial for this task if needed (only for non-setup tasks)
    if (!currentTutorial || currentAtomicTask !== taskText) {
        // Show friendly loading message in tutorial pane
        const editorTutorialContent = document.getElementById('editorTutorialContent');
        if (editorTutorialContent) {
            editorTutorialContent.innerHTML = `
                <div style="padding: 40px 20px; text-align: center; color: #666;">
                    <div style="font-size: 3rem; margin-bottom: 20px;">✨</div>
                    <h3 style="color: #333; margin-bottom: 16px; font-size: 1.3rem;">We're crafting your personalized tutorial!</h3>
                    <p style="font-size: 1rem; line-height: 1.6; max-width: 500px; margin: 0 auto;">
                        We're working on <strong>"${taskText}"</strong> right now, creating step-by-step guidance just for you. 
                        This usually takes about a minute - we'll be with you soon!
                    </p>
                    <div style="margin-top: 30px;">
                        <div class="global-spinner" style="margin: 0 auto; width: 40px; height: 40px;"></div>
                    </div>
                </div>
            `;
        }
        
        showGlobalLoading();
        try {
            const response = await fetch('/api/generate-tutorial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    atomicTask: taskText,
                    projectContext: { task: currentTask, technology: currentTechnology }
                })
            });
            
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to generate tutorial');
            
            currentTutorial = data.tutorial;
            currentScreenIndex = 0;
            
            // Force immediate render of first screen
            if (currentTutorial && currentTutorial.screens && currentTutorial.screens.length > 0) {
                if (editorTutorialContent && currentTutorial.screens[0]) {
                    try {
                        editorTutorialContent.innerHTML = getScreenHTML(currentTutorial.screens[0]);
                    } catch (error) {
                        console.error('Error rendering first screen in switchToTask:', error);
                    }
                }
            }
        } catch (error) {
            displayError(error.message);
            if (editorTutorialContent) {
                editorTutorialContent.innerHTML = `
                    <div style="padding: 40px 20px; text-align: center; color: #f87171;">
                        <h3>Oops! Something went wrong</h3>
                        <p>${error.message}</p>
                        <p style="margin-top: 20px; font-size: 0.9rem; color: #666;">Please try again or refresh the page.</p>
                    </div>
                `;
            }
            hideGlobalLoading();
            return;
        } finally {
            hideGlobalLoading();
        }
    }
    
    // Ensure screen index is valid and screen is rendered
    if (currentTutorial && currentTutorial.screens && currentTutorial.screens.length > 0) {
        if (currentScreenIndex < 0 || currentScreenIndex >= currentTutorial.screens.length) {
            currentScreenIndex = 0;
        }
        // Ensure screen is rendered if not already
        const editorTutorialContent = document.getElementById('editorTutorialContent');
        if (editorTutorialContent && (!editorTutorialContent.innerHTML.trim() || editorTutorialContent.innerHTML.includes('Loading'))) {
            const screen = currentTutorial.screens[currentScreenIndex];
            if (screen) {
                try {
                    editorTutorialContent.innerHTML = getScreenHTML(screen);
                } catch (error) {
                    console.error('Error rendering screen in switchToTask fallback:', error);
                }
            }
        }
    }
    
    // Update views
    updateEditorView();
    updateEditorProgressIndicator();
    updateEditorCode();
}

function updateProgressCodeView() {
    const progressCodeView = document.getElementById('progressCodeView');
    const progressCodeContent = document.getElementById('progressCodeContent');
    if (!progressCodeView || !progressCodeContent) return;
    
    // Need to load tutorials for all tasks to get their code
    // For now, show accumulated code from student submissions and current task
    let html = '';
    
    allTasks.forEach((task, index) => {
        const isCurrent = index === currentEditorTaskIndex;
        const isCompleted = completedTasks.includes(task);
        const isSetup = isSetupTask(task);
        
        const sectionClass = isCurrent ? 'current' : (isCompleted ? 'completed' : '');
        
        // Get code for this task
        let taskCode = '';
        if (studentCodeByTask[task]) {
            // Use student's submitted code
            taskCode = studentCodeByTask[task];
        } else if (isCurrent && currentTutorial && currentTutorial.screens) {
            // For current task, get solution code from tutorial
            const solutionScreen = currentTutorial.screens.find(s => s.screenType === 'solution');
            if (solutionScreen && solutionScreen.content && solutionScreen.content.code) {
                taskCode = solutionScreen.content.code.replace(/\\n/g, '\n');
            } else {
                const implScreen = currentTutorial.screens.find(s => s.screenType === 'implementation');
                if (implScreen && implScreen.content && implScreen.content.starterCode) {
                    taskCode = implScreen.content.starterCode.replace(/\\n/g, '\n');
                }
            }
        } else if (isSetup) {
            // Setup tasks get boilerplate
            taskCode = getBoilerplateCode(currentTechnology);
        } else if (index < currentEditorTaskIndex) {
            // For previous tasks, show placeholder (in future, load their tutorials)
            taskCode = `// Task ${index + 1} code\n// (Code will be shown here once you complete this task)`;
        }
        
        if (taskCode || index <= currentEditorTaskIndex) {
            const codeToShow = taskCode || `// Task ${index + 1}: ${task}\n// Code will appear here`;
            html += `
                <div class="progress-code-task-section ${sectionClass}" data-task-index="${index}">
                    <div class="progress-code-task-header">
                        Task ${index + 1}: ${task} ${isCurrent ? '<span class="progress-code-highlight">(Current - Highlighted)</span>' : ''}
                    </div>
                    <pre class="progress-code-content">${escapeHtml(codeToShow)}</pre>
                </div>
            `;
        }
    });
    
    progressCodeContent.innerHTML = html;
    
    // Add click handlers for two-way navigation
    progressCodeContent.querySelectorAll('.progress-code-task-section').forEach(section => {
        section.addEventListener('click', () => {
            const taskIndex = parseInt(section.dataset.taskIndex);
            if (taskIndex !== undefined && taskIndex !== currentEditorTaskIndex) {
                switchToTask(taskIndex);
            }
        });
    });
}

function getBoilerplateCode(technology) {
    const tech = technology || currentTechnology || 'JavaScript';
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('javascript') || techLower === 'js') {
        return `// Welcome! Your JavaScript environment is ready.
// You can use all standard JavaScript features and Node.js APIs.

// Start coding your solution below:
function solution() {
    // Your code here
    return null;
}

// Test your code
console.log("Running your code...");
console.log("Result:", solution());

// Example: Try running this
console.log("Hello, World!");`;
    } else if (techLower.includes('typescript') || techLower === 'ts') {
        return `// Welcome! Your TypeScript environment is ready.
// TypeScript is compiled to JavaScript automatically.

// Start coding your solution below:
function solution(): any {
    // Your code here
    return null;
}

// Test your code
console.log("Running your code...");
console.log("Result:", solution());

// Example: Try running this
console.log("Hello, World!");`;
    } else if (techLower.includes('react')) {
        return `// Welcome! Your React + Vite environment is ready.
// This is a complete React app setup - you can import components, use hooks, etc.

import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Hello, React!</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            {/* Your code here */}
        </div>
    );
}

export default App;

// Note: This runs in a React environment with Vite.
// You can use all React features: hooks, components, JSX, etc.`;
    } else if (techLower.includes('node') || techLower.includes('nodejs')) {
        return `// Welcome! Your Node.js environment is ready.
// You have access to Node.js built-in modules (fs, path, http, etc.)

// Start coding your solution below:
function solution() {
    // Your code here
    return null;
}

// Test your code
console.log("Running your code...");
console.log("Result:", solution());

// Example: Try running this
console.log("Hello, World!");

// You can use Node.js modules:
// const fs = require('fs');
// const path = require('path');`;
    } else if (techLower.includes('python')) {
        return `# Welcome! Your Python environment is ready.
# You can use all standard Python libraries.

# Start coding your solution below:
def solution():
    # Your code here
    return None

# Test your code
print("Running your code...")
print("Result:", solution())

# Example: Try running this
print("Hello, World!")`;
    } else {
        // Default JavaScript
        return `// Welcome! Your environment is ready to go.
// Start coding your solution below:

function solution() {
    // Your code here
    return null;
}

// Test your code
console.log("Running your code...");
console.log("Result:", solution());`;
    }
}

function getCodeForCurrentTask() {
    const currentTaskText = allTasks[currentEditorTaskIndex];
    if (!currentTaskText) {
        // If no task, return boilerplate
        return getBoilerplateCode(currentTechnology);
    }
    
    // If it's a setup task, return boilerplate code
    if (isSetupTask(currentTaskText)) {
        return getBoilerplateCode(currentTechnology);
    }
    
    // If student has submitted code for this task, use it
    if (studentCodeByTask[currentTaskText]) {
        return studentCodeByTask[currentTaskText];
    }
    
    // Otherwise, get the solution code from tutorial
    if (currentTutorial && currentTutorial.screens) {
        const solutionScreen = currentTutorial.screens.find(s => s.screenType === 'solution');
        if (solutionScreen && solutionScreen.content && solutionScreen.content.code) {
            return solutionScreen.content.code.replace(/\\n/g, '\n');
        }
        
        // If no solution screen, get from implementation screen
        const implScreen = currentTutorial.screens.find(s => s.screenType === 'implementation');
        if (implScreen && implScreen.content && implScreen.content.starterCode) {
            return implScreen.content.starterCode.replace(/\\n/g, '\n');
        }
    }
    
    // Fallback to boilerplate
    return getBoilerplateCode(currentTechnology);
}

function updateEditorCode() {
    if (!monacoEditor) return;
    
    const code = getCodeForCurrentTask();
    monacoEditor.setValue(code);
}

// Event listeners for editor view
document.addEventListener('DOMContentLoaded', () => {
    // Floating editor button
    const floatingEditorBtn = document.getElementById('floatingEditorBtn');
    if (floatingEditorBtn) {
        floatingEditorBtn.addEventListener('click', () => {
            // Find first non-setup task
            if (allTasks && allTasks.length > 0) {
                const firstNonSetupTask = allTasks.find(task => !isSetupTask(task));
                if (firstNonSetupTask) {
                    openOnlineEditor(firstNonSetupTask);
                } else {
                    // If all tasks are setup, just open with first task
                    openOnlineEditor(allTasks[0]);
                }
            } else {
                // Fallback: show error or use current task
                alert('Please wait for tasks to load, or start a new learning path.');
            }
        });
    }
    
    const backFromEditorBtn = document.getElementById('backFromEditorBtn');
    const editorPrevBtn = document.getElementById('editorPrevBtn');
    const editorNextBtn = document.getElementById('editorNextBtn');
    const runCodeBtn = document.getElementById('runCodeBtn');
    const checkCodeEditorBtn = document.getElementById('checkCodeEditorBtn');
    
    if (backFromEditorBtn) {
        backFromEditorBtn.addEventListener('click', () => {
            const onlineEditorView = document.getElementById('onlineEditorView');
            if (onlineEditorView) onlineEditorView.classList.add('hidden');
            tutorialView.classList.remove('hidden');
        });
    }
    
    const toggleEditorBtn = document.getElementById('toggleEditorBtn');
    if (toggleEditorBtn) {
        let isEditorVisible = true;
        toggleEditorBtn.addEventListener('click', () => {
            isEditorVisible = !isEditorVisible;
            const editorCodePane = document.querySelector('.editor-code-pane');
            const editorLayout = document.querySelector('.editor-layout');
            
            if (isEditorVisible) {
                // Show editor
                if (editorCodePane) editorCodePane.classList.remove('hidden');
                if (editorLayout) editorLayout.classList.remove('editor-full-width');
                toggleEditorBtn.textContent = '💻 Hide Editor';
                toggleEditorBtn.classList.add('active');
            } else {
                // Hide editor
                if (editorCodePane) editorCodePane.classList.add('hidden');
                if (editorLayout) editorLayout.classList.add('editor-full-width');
                toggleEditorBtn.textContent = '💻 Show Editor';
                toggleEditorBtn.classList.remove('active');
            }
        });
    }
    
    if (editorPrevBtn) {
        editorPrevBtn.addEventListener('click', () => {
            if (!currentTutorial || !currentTutorial.screens) return;
            
            if (currentScreenIndex > 0) {
                currentScreenIndex--;
                updateEditorView();
            } else {
                // If on first screen, go back to roadmap
                const onlineEditorView = document.getElementById('onlineEditorView');
                if (onlineEditorView) onlineEditorView.classList.add('hidden');
                showTaskBreakdown();
            }
        });
    }
    
    if (editorNextBtn) {
        editorNextBtn.addEventListener('click', async () => {
            if (!currentTutorial || !currentTutorial.screens) {
                console.warn('No tutorial or screens available');
                return;
            }
            
            if (currentScreenIndex < currentTutorial.screens.length - 1) {
                currentScreenIndex++;
                updateEditorView();
            } else {
                // If on last screen, mark as complete and go to next task or roadmap
                if (currentAtomicTask && !completedTasks.includes(currentAtomicTask)) {
                    completedTasks.push(currentAtomicTask);
                }
                updateEditorProgressIndicator();
                
                // Go to next non-setup task or back to roadmap
                let nextTaskIndex = currentEditorTaskIndex + 1;
                // Skip setup tasks
                while (nextTaskIndex < allTasks.length && isSetupTask(allTasks[nextTaskIndex])) {
                    nextTaskIndex++;
                }
                
                if (nextTaskIndex < allTasks.length) {
                    await switchToTask(nextTaskIndex);
                } else {
                    const onlineEditorView = document.getElementById('onlineEditorView');
                    if (onlineEditorView) onlineEditorView.classList.add('hidden');
                    showTaskBreakdown();
                }
            }
        });
    }
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', async () => {
            if (!monacoEditor) return;
            
            const code = monacoEditor.getValue();
            const output = document.getElementById('editorOutputContent');
            const runBtn = document.getElementById('runCodeBtn');
            
            if (!code.trim()) {
                if (output) {
                    output.textContent = 'Please write some code first!';
                }
                return;
            }
            
            if (runBtn) {
                runBtn.disabled = true;
                runBtn.textContent = 'Running...';
            }
            
            if (output) {
                output.textContent = 'Running your code...';
            }
            
            showGlobalLoading();
            
            try {
                const response = await fetch('/api/run-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        code: code,
                        language: currentTechnology || 'JavaScript'
                    })
                });
                
                // Check if response is JSON
                const contentType = response.headers.get('content-type');
                let data;
                
                if (contentType && contentType.includes('application/json')) {
                    data = await response.json();
                } else {
                    // If not JSON, read as text to see what we got
                    const text = await response.text();
                    throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}`);
                }
                
                if (!response.ok) {
                    throw new Error(data.error || data.message || 'Code execution failed');
                }
                
                if (output) {
                    if (data.error) {
                        output.innerHTML = `<span style="color: #f87171;">Error: ${data.error}</span>`;
                    } else if (data.output) {
                        output.textContent = data.output;
                    } else {
                        output.textContent = 'Code executed successfully (no output)';
                    }
                }
            } catch (error) {
                console.error('Code execution error:', error);
                if (output) {
                    output.innerHTML = `<span style="color: #f87171;">Error: ${error.message}</span>`;
                }
            } finally {
                if (runBtn) {
                    runBtn.disabled = false;
                    runBtn.textContent = '► Run Code';
                }
                hideGlobalLoading();
            }
        });
    }
    
    if (checkCodeEditorBtn) {
        checkCodeEditorBtn.addEventListener('click', async () => {
            if (!monacoEditor) {
                const output = document.getElementById('editorOutputContent');
                if (output) {
                    output.innerHTML = '<span style="color: #f87171;">Error: Editor not initialized</span>';
                }
                return;
            }
            
            const code = monacoEditor.getValue().trim();
            if (!code) {
                const output = document.getElementById('editorOutputContent');
                if (output) {
                    output.innerHTML = '<span style="color: #f87171;">⚠️ Please write some code first!</span>';
                }
                return;
            }
            
            // Save student code
            const currentTask = allTasks[currentEditorTaskIndex];
            if (currentTask) {
                studentCodeByTask[currentTask] = code;
            }
            
            // Check if tutorial is loaded
            if (!currentTutorial) {
                const output = document.getElementById('editorOutputContent');
                if (output) {
                    output.innerHTML = '<span style="color: #f87171;">Error: Tutorial not loaded. Please wait...</span>';
                }
                return;
            }
            
            // Update button state
            checkCodeEditorBtn.disabled = true;
            checkCodeEditorBtn.textContent = 'Checking...';
            
            const output = document.getElementById('editorOutputContent');
            if (output) {
                output.textContent = 'Checking your code against the task requirements...';
            }
            
            showGlobalLoading();
            
            try {
                const response = await fetch('/api/validate-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userCode: code,
                        tutorial: currentTutorial,
                        atomicTask: currentTask || allTasks[currentEditorTaskIndex]
                    })
                });
                
                // Check content type
                const contentType = response.headers.get('content-type');
                let data;
                
                if (contentType && contentType.includes('application/json')) {
                    data = await response.json();
                } else {
                    const text = await response.text();
                    throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}`);
                }
                
                if (!response.ok) {
                    throw new Error(data.error || data.message || 'Validation failed');
                }
                
                if (output) {
                    const validation = data.validation;
                    if (validation && validation.correct) {
                        output.innerHTML = '<span style="color: #00ff88;">✅ Correct! Great job! Your code meets all the requirements.</span>';
                        if (currentTask && !completedTasks.includes(currentTask)) {
                            completedTasks.push(currentTask);
                        }
                        updateEditorProgressIndicator();
                    } else if (validation && validation.feedback && validation.feedback.length > 0) {
                        // Show detailed feedback
                        const feedbackMessages = validation.feedback.map(f => f.message || f).join('\n');
                        output.innerHTML = `<div style="color: #f87171;">
                            <strong>⚠️ Not quite right. Here's what to improve:</strong><br>
                            ${feedbackMessages.split('\n').map(msg => `• ${msg}`).join('<br>')}
                            ${validation.suggestion ? `<br><br><strong>Suggestion:</strong> ${validation.suggestion}` : ''}
                            ${validation.encouragement ? `<br><br><em>${validation.encouragement}</em>` : ''}
                        </div>`;
                    } else {
                        output.innerHTML = `<span style="color: #f87171;">⚠️ ${validation?.message || 'Not quite right. Keep trying!'}</span>`;
                    }
                }
            } catch (error) {
                console.error('Code validation error:', error);
                if (output) {
                    output.innerHTML = `<span style="color: #f87171;">Error: ${error.message}</span>`;
                }
            } finally {
                checkCodeEditorBtn.disabled = false;
                checkCodeEditorBtn.textContent = 'Check Code';
                hideGlobalLoading();
            }
        });
    }
    
    if (progressToggleBtn) {
        let isProgressVisible = false;
        progressToggleBtn.addEventListener('click', () => {
            isProgressVisible = !isProgressVisible;
            const progressIndicator = document.getElementById('editorProgressIndicator');
            
            if (isProgressVisible) {
                // Show progress indicator (roadmap)
                if (progressIndicator) {
                    progressIndicator.classList.add('visible');
                    progressIndicator.classList.remove('hidden');
                    updateEditorProgressIndicator();
                }
                progressToggleBtn.classList.add('active');
                progressToggleBtn.textContent = '📊 Hide Roadmap';
            } else {
                // Hide progress indicator
                if (progressIndicator) {
                    progressIndicator.classList.remove('visible');
                    progressIndicator.classList.add('hidden');
                }
                progressToggleBtn.classList.remove('active');
                progressToggleBtn.textContent = '📊 Show Roadmap';
            }
        });
    }
    
    // Setup mentor modal close button
    const closeMentorModal = document.getElementById('closeMentorModal');
    const mentorModal = document.getElementById('mentorModal');
    if (closeMentorModal && mentorModal) {
        closeMentorModal.addEventListener('click', () => {
            mentorModal.classList.add('hidden');
        });
        
        // Close modal when clicking overlay
        const overlay = mentorModal.querySelector('.mentor-modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                mentorModal.classList.add('hidden');
            });
        }
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mentorModal.classList.contains('hidden')) {
                mentorModal.classList.add('hidden');
            }
        });
    }
});
