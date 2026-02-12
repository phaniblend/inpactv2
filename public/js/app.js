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

// Navigation elements
const topNav = document.getElementById('topNav');
const homeBtn = document.getElementById('homeBtn');
const loginBtn = document.getElementById('loginBtn');
const dashboardBtn = document.getElementById('dashboardBtn');
const runtimeLabBtn = document.getElementById('runtimeLabBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const dashboardView = document.getElementById('dashboardView');

// Auth modal elements
const authModal = document.getElementById('authModal');
const googleAuthBtn = document.getElementById('googleAuthBtn');
const nextTimeBtn = document.getElementById('nextTimeBtn');
const authModalMessage = document.getElementById('authModalMessage');

// Store form data temporarily when auth modal is shown
let pendingFormSubmission = null;


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
const customChallengeSection = document.getElementById('customChallengeSection');

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
// ATTEMPT MANAGEMENT (Stable Attempt Model)
// ============================================================================
let currentAttemptId = null;

// Create or get attempt when challenge starts
async function initializeAttempt(challengeId) {
  try {
    const userId = currentUser?.id || 'anonymous';
    const response = await fetch('/api/create-attempt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, challengeId })
    });
    
    const data = await response.json();
    if (data.success) {
      currentAttemptId = data.attemptId;
      return currentAttemptId;
    }
  } catch (error) {
    console.error('Error initializing attempt:', error);
  }
  return null;
}

// Close attempt when challenge completes or is abandoned
async function finalizeAttempt(status = 'completed') {
  if (!currentAttemptId || !currentTask) return;
  
  try {
    const userId = currentUser?.id || 'anonymous';
    await fetch('/api/close-attempt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        challengeId: currentTask,
        attemptId: currentAttemptId,
        status
      })
    });
  } catch (error) {
    console.error('Error finalizing attempt:', error);
  }
}

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
        
        await displayObjectives(data);
        
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
    // Use generic search query for Node.js project setup, not the full task description
    let searchQuery;
    if (technology.toLowerCase().includes('javascript') || technology.toLowerCase().includes('js') || technology.toLowerCase().includes('node')) {
        searchQuery = encodeURIComponent('how to set up Node.js project JavaScript');
    } else if (technology.toLowerCase().includes('react')) {
        searchQuery = encodeURIComponent('how to set up React project');
    } else if (technology.toLowerCase().includes('typescript')) {
        searchQuery = encodeURIComponent('how to set up TypeScript Node.js project');
    } else {
        // Fallback to generic Node.js setup
        searchQuery = encodeURIComponent('how to set up Node.js project');
    }
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
    
    // Check auth status first, then handle URL parameters
    // Add a small delay to ensure session is established after OAuth redirect
    setTimeout(async () => {
        const isAuthenticated = await checkAuthStatus();
        // Hide auth modal if user is already authenticated
        if (isAuthenticated && authModal) {
            hideAuthModal();
        }
        handleURLParameters();
    }, 100);
    
    // Auth modal event listeners
    if (googleAuthBtn) {
        googleAuthBtn.addEventListener('click', handleGoogleAuth);
    }
    
    if (nextTimeBtn) {
        nextTimeBtn.addEventListener('click', handleNextTime);
    }
    
    // Navigation event listeners
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            resetToStart();
            hideDashboard();
        });
    }
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = '/api/auth/google?redirect=' + encodeURIComponent(window.location.href);
        });
    }
    
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', () => {
            showDashboard();
        });
    }
    
    if (runtimeLabBtn) {
        runtimeLabBtn.addEventListener('click', () => {
            showRuntimeLab();
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Close modal on overlay click
    if (authModal) {
        const overlay = authModal.querySelector('.auth-modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => {
                // Don't close on overlay click - require user to choose an option
            });
        }
    }
});

// ============================================================================
// URL PARAMETER HANDLING
// ============================================================================

function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const task = urlParams.get('task');
    const technology = urlParams.get('technology');
    
    // Check if user just returned from OAuth
    const authError = urlParams.get('auth_error');
    if (authError) {
        console.error('Auth error:', authError);
        // Show error message or handle as needed
    }
    
    // After OAuth redirect (when coming back from Google), re-check auth status
    // This ensures the UI is updated even if the initial check happened too early
    if (!authError) {
        // Check if we just came back from OAuth (no auth_error means success)
        // Clean up URL parameters after handling them
        const url = new URL(window.location.href);
        if (url.searchParams.has('auth_error') || url.searchParams.has('redirect')) {
            // Remove auth-related query parameters
            url.searchParams.delete('auth_error');
            url.searchParams.delete('redirect');
            // Update URL without reload (cleaner UX)
            window.history.replaceState({}, '', url.pathname + (url.search || ''));
        }
        
        // Re-check auth status multiple times with increasing delays to ensure session is established
        // This handles cases where the session might take a moment to be available
        let retryCount = 0;
        const maxRetries = 3;
        const checkAuthWithRetry = async () => {
            const isAuthenticated = await checkAuthStatus();
            // If still not authenticated after redirect, retry
            if (retryCount < maxRetries && !isAuthenticated) {
                retryCount++;
                console.log(`Retrying auth check (${retryCount}/${maxRetries})...`);
                setTimeout(checkAuthWithRetry, 200 * retryCount); // Increasing delay: 200ms, 400ms, 600ms
            }
        };
        
        setTimeout(checkAuthWithRetry, 300);
    }
    
    // Check if there's a pending form submission from before OAuth
    const pendingFormData = sessionStorage.getItem('pendingFormSubmission');
    if (pendingFormData) {
        try {
            const formData = JSON.parse(pendingFormData);
            sessionStorage.removeItem('pendingFormSubmission');
            
            // Populate form and proceed
            if (taskInput) taskInput.value = formData.task;
            if (technologyInput) technologyInput.value = formData.technology;
            
            // Proceed with submission
            pendingFormSubmission = formData;
            proceedWithFormSubmission();
            return;
        } catch (error) {
            console.error('Error parsing pending form data:', error);
        }
    }
    
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
// BROWSER FINGERPRINTING FOR TRACKING
// ============================================================================

// Collect browser fingerprint data
function collectBrowserData() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('Browser fingerprint', 2, 2);
    }
    
    return {
        userAgent: navigator.userAgent || '',
        acceptLanguage: navigator.language || navigator.userLanguage || '',
        screenResolution: `${screen.width}x${screen.height}`,
        timezone: new Date().getTimezoneOffset().toString(),
        language: navigator.language || '',
        platform: navigator.platform || '',
        hardwareConcurrency: navigator.hardwareConcurrency || '',
        deviceMemory: navigator.deviceMemory || '',
        canvasFingerprint: canvas ? canvas.toDataURL().substring(0, 100) : '' // First 100 chars for consistency
    };
}

// Generate fingerprint on server side for consistency
async function getBrowserFingerprint() {
    const browserData = collectBrowserData();
    
    try {
        const response = await fetch('/api/generate-fingerprint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(browserData)
        });
        
        const data = await response.json();
        if (data.success && data.fingerprint) {
            return data.fingerprint;
        }
    } catch (error) {
        console.error('Error generating fingerprint:', error);
    }
    
    // Fallback: create a simple hash client-side
    const fingerprintString = Object.values(browserData).join('|');
    let hash = 0;
    for (let i = 0; i < fingerprintString.length; i++) {
        const char = fingerprintString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
}

// Show auth modal
async function showAuthModal() {
    if (!authModal) return;
    
    // Check if user is already authenticated before showing
    const isAuthenticated = await checkAuthStatus();
    if (isAuthenticated) {
        // User is already logged in, don't show modal
        hideAuthModal();
        return;
    }
    
    authModal.classList.remove('hidden');
    
    // Don't show the message when modal opens - only show it after they click "next time" multiple times
    hideAuthMessage();
}

// Hide auth modal
function hideAuthModal() {
    if (authModal) authModal.classList.add('hidden');
    hideAuthMessage();
}

// Show auth message
function showAuthMessage(message) {
    if (!authModalMessage) return;
    authModalMessage.textContent = message;
    authModalMessage.classList.remove('hidden');
    authModalMessage.classList.add('warning');
}

// Hide auth message
function hideAuthMessage() {
    if (authModalMessage) {
        authModalMessage.classList.add('hidden');
        authModalMessage.classList.remove('warning');
    }
}

// Handle "Next Time" button click
async function handleNextTime() {
    const fingerprint = await getBrowserFingerprint();
    
    try {
        const response = await fetch('/api/track-next-time', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fingerprint })
        });
        
        const data = await response.json();
        if (data.success) {
            if (data.isThirdTime) {
                showAuthMessage("Sorry friend, you say that all the time... why don't you register if you really like me? 😊");
            } else {
                hideAuthModal();
                // Proceed with form submission
                if (pendingFormSubmission) {
                    proceedWithFormSubmission();
                }
            }
        }
    } catch (error) {
        console.error('Error tracking next time:', error);
        // Still proceed even if tracking fails
        hideAuthModal();
        if (pendingFormSubmission) {
            proceedWithFormSubmission();
        }
    }
}

// Handle Google Auth
function handleGoogleAuth() {
    // Store pending form submission in session storage as fallback
    if (pendingFormSubmission) {
        sessionStorage.setItem('pendingFormSubmission', JSON.stringify(pendingFormSubmission));
    }
    
    // Redirect to Google OAuth
    const currentUrl = window.location.href;
    window.location.href = `/api/auth/google?redirect=${encodeURIComponent(currentUrl)}`;
}

// Proceed with actual form submission
function proceedWithFormSubmission() {
    if (!pendingFormSubmission) return;
    
    const { task, technology } = pendingFormSubmission;
    currentTask = task;
    currentTechnology = technology;
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('task', encodeURIComponent(currentTask));
    url.searchParams.set('technology', encodeURIComponent(currentTechnology));
    window.history.pushState({}, '', url);
    
    hideAll();
    generateBtn.disabled = true;
    showGlobalLoading();
    
    // Generate objectives
    fetch('/api/generate-objectives', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: currentTask, technology: currentTechnology })
    })
    .then(response => response.json())
    .then(async data => {
        if (!data.success && !data.objectives) throw new Error(data.error || 'Failed to generate objectives');
        await displayObjectives(data);
    })
    .catch(error => {
        displayError(error.message);
    })
    .finally(() => {
        generateBtn.disabled = false;
        hideGlobalLoading();
        pendingFormSubmission = null;
    });
}

// ============================================================================
// PHASE 1: GENERATE LEARNING OBJECTIVES
// ============================================================================

async function handleSubmit(e) {
    e.preventDefault();
    
    const task = taskInput.value.trim();
    const technology = technologyInput.value.trim();
    
    if (!task || !technology) {
        return;
    }
    
    // Store form data temporarily
    pendingFormSubmission = { task, technology };
    
    // Check if user is already authenticated before showing modal
    const isAuthenticated = await checkAuthStatus();
    
    if (isAuthenticated) {
        // User is already logged in, proceed directly
        proceedWithFormSubmission();
    } else {
        // User is not authenticated, show auth modal
        await showAuthModal();
    }
}

function formatObjectivesText(text) {
    if (!text) return '';
    
    // Split by lines to preserve structure
    const lines = text.split('\n');
    
    return lines.map(line => {
        if (!line.trim()) return line;
        
        let formatted = line;
        
        // Use a placeholder to avoid double-processing
        const placeholders = [];
        let placeholderIndex = 0;
        
        // Pattern 1: Code in parentheses like (arr[i]), (obj[variable]), etc.
        formatted = formatted.replace(/\(([a-zA-Z_$][a-zA-Z0-9_$\[\]().]+)\)/g, (match, code) => {
            const placeholder = `__CODE_${placeholderIndex++}__`;
            placeholders.push({ placeholder, replacement: `(<code>${code}</code>)` });
            return placeholder;
        });
        
        // Pattern 2: Technical notation like O(1), O(n), etc.
        formatted = formatted.replace(/\b(O\([^)]+\))/gi, (match) => {
            const placeholder = `__CODE_${placeholderIndex++}__`;
            placeholders.push({ placeholder, replacement: `<code>${match}</code>` });
            return placeholder;
        });
        
        // Pattern 3: Common language constructs and keywords (process longer terms first)
        const codeTerms = [
            'for loops', 'for loop', 'while loops', 'while loop', 'if statements', 'if statement',
            'hash maps', 'hash map', 'hash tables', 'hash table',
            'bracket notation', 'dot notation', 'arrow functions', 'arrow function',
            'template literals', 'template literal', 'spread operator',
            'event handlers', 'event handler',
            'O\\(1\\)', 'O\\(n\\)', 'O\\(log n\\)', 'O\\(n²\\)', 'O\\(n log n\\)',
            'async/await', 'objects', 'arrays', 'functions', 'methods', 'variables', 'constants',
            'destructuring', 'promises', 'callbacks', 'closures', 'scope',
            'useState', 'useEffect', 'useContext', 'hooks', 'components',
            'props', 'state', 'rendering', 'lifecycle',
            'TypeScript', 'JavaScript', 'React', 'Node.js', 'Express',
            'DOM', 'API', 'JSON', 'HTTP', 'REST', 'CRUD',
            'CSS', 'HTML', 'JSX', 'TSX'
        ];
        
        // Wrap code terms in <code> tags (case-insensitive, whole word)
        codeTerms.forEach(term => {
            const regex = new RegExp(`\\b(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'gi');
            formatted = formatted.replace(regex, (match) => {
                // Check if already processed
                if (match.includes('__CODE_')) return match;
                const placeholder = `__CODE_${placeholderIndex++}__`;
                placeholders.push({ placeholder, replacement: `<code>${match}</code>` });
                return placeholder;
            });
        });
        
        // Pattern 4: Method calls like .map(), .filter(), .reduce(), etc.
        formatted = formatted.replace(/\.([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g, (match, method) => {
            if (match.includes('__CODE_')) return match;
            const placeholder = `__CODE_${placeholderIndex++}__`;
            placeholders.push({ placeholder, replacement: `.<code>${method}</code>(` });
            return placeholder;
        });
        
        // Pattern 5: JavaScript keywords
        formatted = formatted.replace(/\b(in|typeof|instanceof|new|this|super|const|let|var)\b/gi, (match) => {
            if (match.includes('__CODE_')) return match;
            const placeholder = `__CODE_${placeholderIndex++}__`;
            placeholders.push({ placeholder, replacement: `<code>${match}</code>` });
            return placeholder;
        });
        
        // Replace all placeholders back
        placeholders.forEach(({ placeholder, replacement }) => {
            formatted = formatted.replace(placeholder, replacement);
        });
        
        return formatted;
    }).join('\n');
}

async function displayObjectives(data) {
    document.getElementById('resultTask').textContent = data.task;
    document.getElementById('resultTech').textContent = data.technology;
    
    // Format objectives with code highlighting
    const formattedObjectives = formatObjectivesText(data.objectives);
    document.getElementById('objectives').innerHTML = formattedObjectives;
    
    // Initialize attempt for this challenge
    // Use task as challengeId (we'll need to map this properly)
    const challengeId = getChallengeIdFromTask(data.task, data.technology);
    if (challengeId) {
        await initializeAttempt(challengeId);
        // Display pedagogy metadata
        await displayPedagogyMetadata(challengeId);
        
        // Get and apply scaffold level
        try {
            const userId = currentUser?.id || 'anonymous';
            const scaffoldResponse = await fetch(`/api/scaffold-level?userId=${userId}&challengeId=${challengeId}`);
            const scaffoldData = await scaffoldResponse.json();
            if (scaffoldData.success) {
                await applyScaffoldRules(scaffoldData.level, scaffoldData.rules);
            }
        } catch (error) {
            console.error('Error getting scaffold level:', error);
        }
    }
    
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    if (questionBankSection) questionBankSection.classList.add('hidden');
    if (customChallengeSection) customChallengeSection.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Preload task breakdown and tutorials in the background
    preloadTaskBreakdownAndTutorials();
}

// Helper to get challengeId from task (simplified - can be enhanced)
function getChallengeIdFromTask(task, technology) {
    // This is a simplified mapping - in production, you'd have a proper mapping
    // For now, we'll try to match based on task content
    const taskLower = task.toLowerCase();
    const techLower = technology.toLowerCase();
    
    if (taskLower.includes('twosum') || taskLower.includes('two sum')) {
        return 'js-1';
    }
    if (taskLower.includes('debounce')) {
        return 'js-24';
    }
    if (taskLower.includes('todo') && techLower.includes('react')) {
        return 'react-1';
    }
    
    // Try to find in question bank
    for (const [tech, data] of Object.entries(questionBank)) {
        const question = data.questions.find(q => 
            q.task.toLowerCase() === taskLower || 
            q.task.toLowerCase().includes(taskLower.substring(0, 20))
        );
        if (question) {
            return question.id;
        }
    }
    
    return null;
}

// ============================================================================
// PEDAGOGY DISPLAY FUNCTIONS
// ============================================================================

// Display pedagogy metadata (objective, Bloom level, misconceptions)
async function displayPedagogyMetadata(challengeId) {
    try {
        const response = await fetch(`/api/challenge-metadata/${challengeId}`);
        const data = await response.json();
        
        if (data.success && data.metadata) {
            const metadata = data.metadata;
            
            // Create or get pedagogy section
            let pedagogySection = document.getElementById('pedagogyMetadata');
            if (!pedagogySection) {
                pedagogySection = document.createElement('div');
                pedagogySection.id = 'pedagogyMetadata';
                pedagogySection.className = 'pedagogy-section';
                
                // Insert before objectives
                const objectivesSection = document.querySelector('.objectives-section');
                if (objectivesSection) {
                    objectivesSection.insertBefore(pedagogySection, objectivesSection.firstChild);
                }
            }
            
            let html = '';
            
            // Display objective
            if (metadata.objective) {
                html += `<div class="challenge-objective"><strong>Learning Objective:</strong> ${metadata.objective}</div>`;
            }
            
            // Display Bloom badge
            if (metadata.bloomLevel) {
                const bloomClass = metadata.bloomLevel.toLowerCase().replace(' ', '-');
                html += `<div class="bloom-badge bloom-${bloomClass}">${metadata.bloomLevel}</div>`;
            }
            
            // Display misconceptions
            if (metadata.misconceptions && metadata.misconceptions.length > 0) {
                html += `<div class="common-misconceptions"><h4>Common Misconceptions</h4><ul>`;
                metadata.misconceptions.forEach(m => {
                    html += `<li>${m}</li>`;
                });
                html += `</ul></div>`;
            }
            
            pedagogySection.innerHTML = html;
            pedagogySection.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error loading pedagogy metadata:', error);
    }
}

// Show "Why this step?" section
function showWhyThisStep(stepIndex) {
    const currentScreen = currentTutorial?.screens?.[stepIndex];
    if (!currentScreen) return;
    
    // Try to get whyThisStep from screen or generate from metadata
    let whyText = currentScreen.whyThisStep;
    if (!whyText && currentScreen.screenType) {
        // Generate contextual why based on screen type
        const whyTexts = {
            'problem-context': 'Understanding the problem context helps you see the bigger picture before diving into code.',
            'input-output': 'Seeing concrete examples helps you understand what the function should do.',
            'approach': 'Learning the approach before coding helps you build the right mental model.',
            'signature': 'Understanding the function signature clarifies what inputs and outputs you\'re working with.',
            'data-structure': 'Choosing the right data structure is crucial for efficient solutions.',
            'iteration': 'Understanding iteration patterns helps you process data systematically.',
            'core-logic': 'The core logic is where the main problem-solving happens.',
            'implementation': 'Now you get to build it yourself and apply what you\'ve learned.'
        };
        whyText = whyTexts[currentScreen.screenType] || 'This step builds on previous concepts to deepen your understanding.';
    }
    
    if (!whyText) return;
    
    let whySection = document.getElementById('whyThisStep');
    if (!whySection) {
        whySection = document.createElement('div');
        whySection.id = 'whyThisStep';
        whySection.className = 'why-this-step';
        
        // Insert into tutorial view
        const stepContent = document.getElementById('stepContent');
        if (stepContent) {
            stepContent.insertBefore(whySection, stepContent.firstChild);
        }
    }
    
    whySection.innerHTML = `
        <div style="display: flex; align-items: start; gap: 12px;">
            <span style="font-size: 1.5em;">💭</span>
            <div>
                <h4 style="margin: 0 0 8px 0; color: var(--navy);">Why this step?</h4>
                <p style="margin: 0; color: var(--text); line-height: 1.6;">${whyText}</p>
            </div>
        </div>
    `;
    whySection.classList.remove('hidden');
}

// Apply scaffold rules based on level
async function applyScaffoldRules(scaffoldLevel, rules) {
    // Apply prediction requirement
    if (!rules.predictionRequired) {
        // Hide prediction gate if not required
        const predictionGate = document.getElementById('predictionGate');
        if (predictionGate) {
            predictionGate.style.display = 'none';
        }
    }
    
    // Apply hint availability
    const hintBtn = document.getElementById('showHintBtn');
    if (hintBtn) {
        if (rules.hintAvailability === "limited") {
            hintBtn.dataset.maxHints = "2";
        } else if (rules.hintAvailability === "on-demand") {
            hintBtn.dataset.maxHints = "3";
        } else {
            hintBtn.dataset.maxHints = "4";
        }
    }
    
    // Apply guided breakdown
    if (!rules.guidedBreakdown) {
        // Skip to independent build phase
        // This would be handled in the tutorial flow
    }
    
    // Store scaffold rules for later use
    window.currentScaffoldRules = rules;
}

// Show prediction prompt before hint/solution
async function showPredictionPrompt() {
    if (!currentAttemptId) {
        // Try to initialize attempt
        const challengeId = getChallengeIdFromTask(currentTask, currentTechnology);
        if (challengeId) {
            await initializeAttempt(challengeId);
        }
    }
    
    // Check if prediction gate is required by recommendations
    if (window.predictionGateRequired && window.predictionGateCount > 0) {
        // Prediction is required - show it
    } else {
        // Check scaffold rules
        const scaffoldRules = window.currentScaffoldRules;
        if (scaffoldRules && !scaffoldRules.predictionRequired) {
            return; // Skip prediction if not required
        }
    }
    
    const predictionModal = document.getElementById('predictionModal');
    if (!predictionModal) {
        // Create modal if it doesn't exist
        createPredictionModal();
        return;
    }
    
    predictionModal.classList.remove('hidden');
    
    const submitBtn = predictionModal.querySelector('#submitPrediction');
    if (submitBtn) {
        submitBtn.onclick = async () => {
            const response = predictionModal.querySelector('#predictionResponse').value;
            
            if (!response.trim()) {
                alert('Please provide your prediction before proceeding.');
                return;
            }
            
            // Save prediction
            try {
                const userId = currentUser?.id || 'anonymous';
                await fetch('/api/save-prediction', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId,
                        challengeId: currentTask,
                        attemptId: currentAttemptId,
                        prompt: 'What approach do you think will work?',
                        response
                    })
                });
            } catch (error) {
                console.error('Error saving prediction:', error);
            }
            
            predictionModal.classList.add('hidden');
        };
    }
}

// Create prediction modal if it doesn't exist
function createPredictionModal() {
    const modal = document.createElement('div');
    modal.id = 'predictionModal';
    modal.className = 'modal hidden';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'prediction-title');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
        <div class="modal-content">
            <h3 id="prediction-title">Check your thinking</h3>
            <p>Before we show you the solution, what approach do you think will work?</p>
            <textarea id="predictionResponse" rows="4" placeholder="Describe your approach..." aria-label="Your prediction"></textarea>
            <button id="submitPrediction">Submit</button>
            <button id="closePredictionModal" class="modal-close" aria-label="Close dialog">Cancel</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add keyboard navigation
    setupModalKeyboardNavigation(modal);
    
    showPredictionPrompt();
}

// Setup keyboard navigation for modals
function setupModalKeyboardNavigation(modal) {
    const closeBtn = modal.querySelector('.modal-close, [aria-label*="Close"]');
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    // Focus trap
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
        if (e.key === 'Escape') {
            modal.classList.add('hidden');
            if (closeBtn) closeBtn.click();
        }
    });
    
    // Focus first element when modal opens
    const observer = new MutationObserver(() => {
        if (!modal.classList.contains('hidden') && firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 100);
        }
    });
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
}

// Show reflection screen after completion
async function showReflectionScreen() {
    if (!currentAttemptId) return;
    
    let reflectionModal = document.getElementById('reflectionModal');
    if (!reflectionModal) {
        reflectionModal = document.createElement('div');
        reflectionModal.id = 'reflectionModal';
        reflectionModal.className = 'modal hidden';
        document.body.appendChild(reflectionModal);
    }
    
    // Get reflection prompts from metadata
    const challengeId = getChallengeIdFromTask(currentTask, currentTechnology);
    let prompts = [
        'What mental model did you use?',
        'What would you do differently?',
        'Where else could you apply this pattern?'
    ];
    
    if (challengeId) {
        try {
            const response = await fetch(`/api/challenge-metadata/${challengeId}`);
            const data = await response.json();
            if (data.success && data.metadata?.phases?.reflection?.prompts) {
                prompts = data.metadata.phases.reflection.prompts;
            }
        } catch (error) {
            console.error('Error loading reflection prompts:', error);
        }
    }
    
    reflectionModal.innerHTML = `
        <div class="reflection-modal">
            <h3>Reflection</h3>
            <form id="reflectionForm">
                ${prompts.map((prompt, i) => `
                    <div class="reflection-prompt">
                        <label for="reflection-${i}">${prompt}</label>
                        <textarea id="reflection-${i}" rows="3" required></textarea>
                    </div>
                `).join('')}
                <button type="submit">Submit Reflection</button>
            </form>
        </div>
    `;
    
    reflectionModal.classList.remove('hidden');
    
    // Handle form submission
    const form = reflectionModal.querySelector('#reflectionForm');
    form.onsubmit = async (e) => {
        e.preventDefault();
        await submitReflection(prompts.length);
    };
}

// Submit reflection
async function submitReflection(promptCount) {
    const responses = [];
    for (let i = 0; i < promptCount; i++) {
        const el = document.getElementById(`reflection-${i}`);
        if (el) responses.push(el.value);
    }
    
    try {
        const userId = currentUser?.id || 'anonymous';
        await fetch('/api/save-reflection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId,
                challengeId: currentTask,
                attemptId: currentAttemptId,
                responses
            })
        });
        
        document.getElementById('reflectionModal').classList.add('hidden');
        
        // Finalize attempt
        await finalizeAttempt('completed');
    } catch (error) {
        console.error('Error submitting reflection:', error);
    }
}

// Check if all tasks are completed and show reflection
async function checkAndShowReflectionIfComplete() {
    if (!allTasks || allTasks.length === 0) return;
    
    const allCompleted = allTasks.every(task => completedTasks.includes(task));
    if (allCompleted && currentAttemptId) {
        // Get and apply recommendations
        await checkAndApplyRecommendations();
        
        // Small delay to let user see completion message
        setTimeout(() => {
            showReflectionScreen();
        }, 1500);
    }
}

// Check and apply learning recommendations
async function checkAndApplyRecommendations() {
    if (!currentUser?.id) return;
    
    try {
        const response = await fetch(`/api/learning-recommendations?userId=${currentUser.id}`);
        const data = await response.json();
        
        if (data.success && data.recommendations && data.recommendations.length > 0) {
            // Show recommendations
            showRecommendations(data.recommendations);
            
            // Apply recommendations automatically
            for (const rec of data.recommendations) {
                await applyRecommendation(rec);
            }
        }
    } catch (error) {
        console.error('Error getting recommendations:', error);
    }
}

// Show recommendations to user
function showRecommendations(recommendations) {
    // Create recommendations panel
    let recPanel = document.getElementById('recommendationsPanel');
    if (!recPanel) {
        recPanel = document.createElement('div');
        recPanel.id = 'recommendationsPanel';
        recPanel.className = 'recommendations-panel';
        recPanel.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            border: 2px solid var(--neon);
            border-radius: 12px;
            padding: 20px;
            max-width: 400px;
            box-shadow: 0 8px 32px rgba(30, 42, 58, 0.3);
            z-index: 10001;
        `;
        document.body.appendChild(recPanel);
    }
    
    const priorityColors = {
        high: '#f87171',
        medium: '#fbbf24',
        low: '#60a5fa'
    };
    
    let html = '<h3 style="margin: 0 0 16px 0; color: var(--navy);">💡 Learning Recommendations</h3>';
    recommendations.forEach((rec, i) => {
        html += `
            <div style="margin-bottom: 12px; padding: 12px; background: rgba(30, 42, 58, 0.05); border-radius: 6px; border-left: 3px solid ${priorityColors[rec.priority] || '#60a5fa'};">
                <strong style="color: ${priorityColors[rec.priority] || '#60a5fa'}; font-size: 0.85rem; text-transform: uppercase;">${rec.priority} Priority</strong>
                <p style="margin: 8px 0 0 0; color: var(--text); font-size: 0.95rem;">${rec.message}</p>
            </div>
        `;
    });
    html += '<button onclick="document.getElementById(\'recommendationsPanel\').remove()" style="margin-top: 12px; background: var(--navy); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">Got it</button>';
    
    recPanel.innerHTML = html;
    recPanel.style.display = 'block';
}

// Apply recommendation action
async function applyRecommendation(recommendation) {
    const action = recommendation.action;
    
    switch (action.type) {
        case "require-prediction":
            // Set prediction gate for next N challenges
            window.predictionGateRequired = true;
            window.predictionGateCount = action.duration || 3;
            break;
            
        case "inject-transfer":
            // Inject transfer challenges (handled in micro-transfer system)
            window.injectTransferChallenges = true;
            window.transferChallengeCount = action.count || 2;
            break;
            
        case "suggest-challenge":
        case "suggest-challenges":
            // Store suggested challenges for later
            window.suggestedChallenges = action.challengeIds || [];
            break;
            
        default:
            console.log('Recommendation action not implemented:', action.type);
    }
}

// Show misconception-aware feedback
async function showMisconceptionFeedbackIfNeeded(errorType, validation) {
    const challengeId = getChallengeIdFromTask(currentTask, currentTechnology);
    if (!challengeId || !currentAttemptId) return;
    
    try {
        const response = await fetch(`/api/challenge-metadata/${challengeId}`);
        const data = await response.json();
        
        if (data.success && data.metadata && data.metadata.misconceptions) {
            const misconceptions = data.metadata.misconceptions;
            
            // Try to detect misconception from error/feedback
            const errorText = JSON.stringify(validation?.feedback || validation?.message || '').toLowerCase();
            
            // Simple pattern matching for misconceptions (can be enhanced with AI)
            let detectedMisconception = null;
            for (const misconception of misconceptions) {
                const misconceptionLower = misconception.toLowerCase();
                // Check if error text suggests this misconception
                if (misconceptionLower.includes('nested loop') && errorText.includes('loop')) {
                    detectedMisconception = misconception;
                    break;
                } else if (misconceptionLower.includes('hash map') && (errorText.includes('object') || errorText.includes('map'))) {
                    detectedMisconception = misconception;
                    break;
                } else if (misconceptionLower.includes('always') && errorText.includes('wrong')) {
                    detectedMisconception = misconception;
                    break;
                }
            }
            
            if (detectedMisconception) {
                // Show targeted misconception feedback
                const output = document.getElementById('editorOutputContent');
                if (output) {
                    const currentContent = output.innerHTML;
                    output.innerHTML = currentContent + `
                        <div style="background: rgba(255, 193, 7, 0.1); border-left: 3px solid #ffc107; padding: 12px; margin-top: 12px; border-radius: 4px;">
                            <strong style="color: #ff9800;">💡 Common Misconception Detected:</strong>
                            <p style="margin: 8px 0 0 0; color: var(--text);">${detectedMisconception}</p>
                            <p style="margin: 8px 0 0 0; font-size: 0.9rem; color: var(--text-muted);">
                                This is a common misunderstanding. Let's clarify: ${detectedMisconception.split('(')[1]?.split(')')[0] || 'Review the concept and try again.'}
                            </p>
                        </div>
                    `;
                }
                
                // Save check response with misconception
                try {
                    const userId = currentUser?.id || 'anonymous';
                    await fetch('/api/save-check-response', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            userId,
                            challengeId,
                            attemptId: currentAttemptId,
                            stepId: currentAtomicTask || 'unknown',
                            response: errorText,
                            correct: false,
                            misconceptionDetected: detectedMisconception
                        })
                    });
                } catch (error) {
                    console.error('Error saving check response:', error);
                }
            }
        }
    } catch (error) {
        console.error('Error checking misconceptions:', error);
    }
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
    
    // Track challenge start if user is authenticated
    if (currentUser && currentTask && currentTechnology) {
        trackChallengeStart(currentTask, currentTechnology, tasks);
    }
    
    const section = createTaskSection('Your Learning Roadmap', '🚀', tasks);
    tasksList.appendChild(section);
    updateTaskProgress();
    
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    if (questionBankSection) questionBankSection.classList.add('hidden');
    if (customChallengeSection) customChallengeSection.classList.add('hidden');
    breakdownResults.classList.remove('hidden');
    // Show floating editor button when roadmap is visible
    const floatingEditorBtn = document.getElementById('floatingEditorBtn');
    if (floatingEditorBtn) floatingEditorBtn.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show toast instruction
    showToast('Click on each task below to view detailed instructions and start learning step by step.');
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
    
    // Open in editor view (split screen) instead of tutorial view
    await openOnlineEditor(taskText);
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
                
                <div class="setup-intro">
                    <strong>Before you start coding, you'll need to set up your environment.</strong><br>
                    Complete each step below and check it off when done.
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
                
                // Show reflection screen after completion
                // Check if this is the last task
                const allTasksCompleted = allTasks.every(t => completedTasks.includes(t));
                if (allTasksCompleted) {
                    // All tasks done - show reflection
                    setTimeout(() => {
                        showReflectionScreen();
                    }, 1000);
                }
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
    
    stepContent.innerHTML = screenHTML;
    
    // Show "Why this step?" for pedagogy visibility
    showWhyThisStep(index);
    
    // Setup mentor button (now in navigation)
    const askMentorBtn = document.getElementById('askMentorBtn');
    if (askMentorBtn) {
        askMentorBtn.addEventListener('click', () => askMentor(screen));
    }
    
    // Setup practice screen
    if (screen.screenType === 'now-you-try' || screen.screenType === 'implementation') {
        setupPracticeScreen(screen);
    }
    
    // Check for micro-transfers during guided construction
    checkAndShowMicroTransfer(screen, index);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Check and show micro-transfer if available
async function checkAndShowMicroTransfer(screen, screenIndex) {
    const challengeId = getChallengeIdFromTask(currentTask, currentTechnology);
    if (!challengeId) return;
    
    try {
        const response = await fetch(`/api/challenge-metadata/${challengeId}`);
        const data = await response.json();
        
        if (data.success && data.metadata?.phases?.guidedConstruction?.microTransfers) {
            const microTransfers = data.metadata.phases.guidedConstruction.microTransfers;
            
            // Find micro-transfer for this step
            const microTransfer = microTransfers.find(mt => 
                mt.stepId === `step-${screenIndex + 1}` || 
                screen.screenType === 'core-logic' || 
                screen.screenType === 'implementation'
            );
            
            if (microTransfer) {
                // Show micro-transfer prompt
                setTimeout(() => {
                    showMicroTransferPrompt(microTransfer);
                }, 2000); // Show after 2 seconds
            }
        }
    } catch (error) {
        console.error('Error checking micro-transfers:', error);
    }
}

// Show micro-transfer prompt
function showMicroTransferPrompt(microTransfer) {
    const stepContent = document.getElementById('stepContent');
    if (!stepContent) return;
    
    const microTransferDiv = document.createElement('div');
    microTransferDiv.className = 'micro-transfer-prompt';
    microTransferDiv.style.cssText = `
        background: rgba(0, 255, 136, 0.1);
        border-left: 3px solid var(--neon);
        padding: 16px;
        margin: 20px 0;
        border-radius: 6px;
    `;
    
    microTransferDiv.innerHTML = `
        <h4 style="margin: 0 0 8px 0; color: var(--navy);">🔄 Quick Transfer Challenge</h4>
        <p style="margin: 0 0 12px 0; color: var(--text);">${microTransfer.prompt}</p>
        <div style="background: rgba(30, 42, 58, 0.05); padding: 12px; border-radius: 4px; margin-bottom: 12px;">
            <strong>Challenge:</strong> ${microTransfer.challenge.task}
        </div>
        <p style="margin: 0 0 12px 0; font-size: 0.9rem; color: var(--text-muted);">
            ${microTransfer.challenge.relation}
        </p>
        <button onclick="handleMicroTransfer('${microTransfer.challenge.task}', '${microTransfer.transferType}')" 
                style="background: var(--navy); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
            Try This Transfer Challenge
        </button>
        <button onclick="this.parentElement.remove()" 
                style="background: transparent; color: var(--text-muted); border: 1px solid rgba(30, 42, 58, 0.2); padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-left: 8px;">
            Skip for Now
        </button>
    `;
    
    stepContent.appendChild(microTransferDiv);
}

// Handle micro-transfer challenge (global for onclick)
window.handleMicroTransfer = async function(transferTask, transferType) {
    // Save transfer attempt
    if (currentAttemptId) {
        try {
            const userId = currentUser?.id || 'anonymous';
            const challengeId = getChallengeIdFromTask(currentTask, currentTechnology);
            await fetch('/api/save-transfer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    challengeId: challengeId || currentTask,
                    transferChallengeId: `transfer-${Date.now()}`,
                    attemptId: currentAttemptId,
                    completed: false, // Will be updated when they complete it
                    transferType: transferType || "near"
                })
            });
        } catch (error) {
            console.error('Error saving transfer:', error);
        }
    }
    
    // Show transfer challenge (could open in new tab or inline)
    alert(`Transfer Challenge: ${transferTask}\n\nThis will help you apply the same pattern to a similar problem.`);
};

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
            const editorInstructions = isEditorView ? `
                <div class="editor-instructions" style="background: #e8f4f8; border-left: 4px solid #00ff88; padding: 16px; margin: 20px 0; border-radius: 8px;">
                    <p style="margin: 0 0 8px 0; font-weight: 600; color: #1e2a3a;">💡 Use the code editor on the right to write and test your code!</p>
                    <p style="margin: 0; font-size: 0.9rem; color: #5a6a7a;">Type your solution in the editor, then click "Run Code" to test it, or "Check Code" to validate your implementation.</p>
                </div>
            ` : '';
            
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
                        ${editorInstructions}
                        
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
                
                // Reset retry count and error state on success
                retryCount = 0;
                lastErrorType = null;
                // Don't reset hint level - keep it for next task
                
                if (currentAtomicTask && !completedTasks.includes(currentAtomicTask)) {
                    completedTasks.push(currentAtomicTask);
                    // Track task completion if user is authenticated
                    if (currentUser && currentTask && currentAtomicTask) {
                        trackTaskCompletion(currentTask, currentAtomicTask);
                    }
                    // Check if all tasks complete and show reflection
                    checkAndShowReflectionIfComplete();
                }
                updateEditorProgressIndicator();
            } else {
                // Code is incorrect - classify error and provide feedback
                retryCount++;
                
                // Classify error
                let errorType = "logic";
                let errorMessage = validation?.message || 'Not quite right. Keep trying!';
                
                // Try to classify based on validation feedback
                if (validation?.feedback) {
                    const feedbackText = JSON.stringify(validation.feedback).toLowerCase();
                    if (feedbackText.includes('syntax') || feedbackText.includes('parse') || feedbackText.includes('unexpected')) {
                        errorType = "syntax";
                    } else if (feedbackText.includes('undefined') || feedbackText.includes('null') || feedbackText.includes('cannot read')) {
                        errorType = "invariant";
                    } else if (feedbackText.includes('edge') || feedbackText.includes('boundary') || feedbackText.includes('empty')) {
                        errorType = "edge-case";
                    }
                }
                
                lastErrorType = errorType;
                
                // Classify error via API
                if (currentAttemptId) {
                    try {
                        const userId = currentUser?.id || 'anonymous';
                        const classifyResponse = await fetch('/api/classify-error', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                userId,
                                challengeId: getChallengeIdFromTask(currentTask, currentTechnology) || currentTask,
                                attemptId: currentAttemptId,
                                code: userCode,
                                expectedOutput: validation?.expectedOutput,
                                actualOutput: validation?.actualOutput,
                                errorMessage: errorMessage
                            })
                        });
                        
                        if (classifyResponse.ok) {
                            const classifyData = await classifyResponse.json();
                            if (classifyData.success) {
                                errorType = classifyData.errorType;
                                errorMessage = classifyData.message;
                                // Update hint level based on error classification
                                if (classifyData.nextHintLevel && classifyData.nextHintLevel > currentHintLevel) {
                                    currentHintLevel = classifyData.nextHintLevel - 1; // Will increment on next hint request
                                }
                            }
                        }
                    } catch (error) {
                        console.error('Error classifying error:', error);
                    }
                }
                
                // Show error feedback with classification
                const errorMessages = {
                    syntax: "There's a syntax error in your code. Check for typos, missing brackets, or incorrect syntax.",
                    logic: "Your approach is on the right track, but there's a logical issue. Review your algorithm steps.",
                    invariant: "The data structure isn't maintaining the correct state. Review how you're storing and retrieving values.",
                    "edge-case": "Your code works for most cases, but consider edge cases like empty inputs or boundary values.",
                    unknown: "Not quite right. Let's review your approach."
                };
                
                const baseMessage = errorMessages[errorType] || errorMessages.unknown;
                
                if (validation && validation.feedback && validation.feedback.length > 0) {
                    const feedbackMessages = validation.feedback.map(f => f.message || f).join('\n');
                    output.innerHTML = `<div style="color: #f87171;">
                        <strong>⚠️ ${baseMessage}</strong><br><br>
                        <strong>Feedback:</strong><br>
                        ${feedbackMessages.split('\n').map(msg => `• ${msg}`).join('<br>')}
                        ${validation.suggestion ? `<br><br><strong>Suggestion:</strong> ${validation.suggestion}` : ''}
                        ${validation.encouragement ? `<br><br><em>${validation.encouragement}</em>` : ''}
                        <br><br>
                        <button onclick="requestHintForEditor(monacoEditor?.getValue() || '', null)" style="background: var(--navy); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-top: 8px;">
                            💡 Get Hint (Level ${Math.min(currentHintLevel + 1, 4)}/4)
                        </button>
                    </div>`;
                } else {
                    output.innerHTML = `<div style="color: #f87171;">
                        <strong>⚠️ ${baseMessage}</strong><br>
                        <p>${errorMessage}</p>
                        <button onclick="requestHintForEditor(monacoEditor?.getValue() || '', null)" style="background: var(--navy); color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; margin-top: 8px;">
                            💡 Get Hint (Level ${Math.min(currentHintLevel + 1, 4)}/4)
                        </button>
                    </div>`;
                }
                
                // Check for misconceptions if we have metadata
                await showMisconceptionFeedbackIfNeeded(errorType, validation);
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

// Hint ladder state
let currentHintLevel = 0;
let retryCount = 0;
let lastErrorType = null;

// Reset hint state for new task
function resetHintState() {
    currentHintLevel = 0;
    retryCount = 0;
    lastErrorType = null;
    hintCount = 0;
    previousHints = [];
}

async function requestHintForEditor(userCode, screen) {
    const hintBtn = document.getElementById('showHintBtn');
    if (hintBtn) {
        hintBtn.disabled = true;
        hintBtn.textContent = 'Loading hint...';
    }
    
    showGlobalLoading();
    
    try {
        // Get next hint level based on error type and retry count
        let nextLevel = currentHintLevel + 1;
        if (lastErrorType) {
            const response = await fetch(`/api/next-hint-level?userId=${currentUser?.id || 'anonymous'}&challengeId=${getChallengeIdFromTask(currentTask, currentTechnology) || ''}&attemptId=${currentAttemptId || ''}&errorType=${lastErrorType}&retryCount=${retryCount}`);
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    nextLevel = data.level;
                }
            }
        }
        
        // Cap at level 4 (full solution)
        nextLevel = Math.min(nextLevel, 4);
        currentHintLevel = nextLevel;
        
        const hintTypes = {
            1: { type: "concept", name: "Concept Hint" },
            2: { type: "process", name: "Process Hint" },
            3: { type: "skeleton", name: "Skeleton Hint" },
            4: { type: "solution", name: "Full Solution" }
        };
        
        // Generate hint with appropriate level
        const response = await fetch('/api/generate-hint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userCode: userCode || '',
                tutorial: currentTutorial,
                hintNumber: currentHintLevel,
                previousHints: previousHints,
                hintLevel: currentHintLevel,
                hintType: hintTypes[currentHintLevel].type
            })
        });
        
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to generate hint');
        
        previousHints.push(data.hint.hint);
        hintCount++;
        
        // Record hint usage
        if (currentAttemptId) {
            try {
                const userId = currentUser?.id || 'anonymous';
                await fetch('/api/record-hint', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        userId,
                        challengeId: getChallengeIdFromTask(currentTask, currentTechnology) || currentTask,
                        attemptId: currentAttemptId,
                        hintLevel: currentHintLevel,
                        hintType: hintTypes[currentHintLevel].type,
                        hintContent: data.hint.hint
                    })
                });
            } catch (error) {
                console.error('Error recording hint:', error);
            }
        }
        
        showHintForEditor(data.hint, currentHintLevel, hintTypes[currentHintLevel].name);
        
    } catch (error) {
        console.error('Hint error:', error);
        const output = document.getElementById('editorOutputContent');
        if (output) {
            output.innerHTML = `<span style="color: #f87171;">Error: ${error.message}</span>`;
        }
    } finally {
        if (hintBtn) {
            const maxHints = 4; // 4 hint levels
            hintBtn.disabled = currentHintLevel >= maxHints;
            if (currentHintLevel >= maxHints) {
                hintBtn.textContent = 'Solution revealed';
            } else {
                hintBtn.textContent = `Hint ${currentHintLevel}/${maxHints}`;
            }
        }
        hideGlobalLoading();
    }
}

function showHintForEditor(hint, level = 1, levelName = "Hint") {
    const hintDisplay = document.getElementById('hintDisplay');
    const output = document.getElementById('editorOutputContent');
    
    const levelBadges = {
        1: { emoji: "💭", color: "#9b59b6", label: "Concept" },
        2: { emoji: "🔍", color: "#3498db", label: "Process" },
        3: { emoji: "🏗️", color: "#f39c12", label: "Skeleton" },
        4: { emoji: "✅", color: "#00ff88", label: "Solution" }
    };
    
    const badge = levelBadges[level] || levelBadges[1];
    
    if (hintDisplay) {
        hintDisplay.classList.remove('hidden');
        hintDisplay.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 1.2em;">${badge.emoji}</span>
                <h4 style="margin: 0; color: ${badge.color};">${badge.label} Hint (Level ${level}/4)</h4>
            </div>
            <p>${hint.hint}</p>
        `;
    }
    
    if (output) {
        output.innerHTML = `<div style="color: ${badge.color}; border-left: 3px solid ${badge.color}; padding-left: 12px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-size: 1.2em;">${badge.emoji}</span>
                <strong>${badge.label} Hint (Level ${level}/4):</strong>
            </div>
            <div style="margin-top: 8px;">${hint.hint}</div>
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
            // Track task completion if user is authenticated
            if (currentUser && currentTask && currentAtomicTask) {
                trackTaskCompletion(currentTask, currentAtomicTask);
            }
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
    if (customChallengeSection) customChallengeSection.classList.add('hidden');
    breakdownResults.classList.remove('hidden');
    
    // Show floating editor button when roadmap is visible
    const floatingEditorBtn = document.getElementById('floatingEditorBtn');
    if (floatingEditorBtn) floatingEditorBtn.classList.remove('hidden');
    
    refreshTaskList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show toast instruction
    showToast('Click on each task below to view detailed instructions and start learning step by step.');
    
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
    if (customChallengeSection) customChallengeSection.classList.add('hidden');
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

// ============================================================================
// AUTHENTICATION & USER MANAGEMENT
// ============================================================================

let currentUser = null;

// Check authentication status
async function checkAuthStatus() {
    try {
        const response = await fetch('/api/auth/status', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            console.error('Auth status check failed:', response.status, response.statusText);
            updateNavigationForAuth(false, null);
            return false;
        }
        
        const data = await response.json();
        console.log('Auth status response:', data);
        
        if (data.authenticated && data.user) {
            currentUser = data.user;
            updateNavigationForAuth(true, data.user);
            console.log('User authenticated:', data.user.name || data.user.email);
            return true;
        } else {
            currentUser = null;
            updateNavigationForAuth(false, null);
            console.log('User not authenticated');
            return false;
        }
    } catch (error) {
        console.error('Error checking auth status:', error);
        updateNavigationForAuth(false, null);
        return false;
    }
}

// Update navigation based on auth status
function updateNavigationForAuth(isAuthenticated, user) {
    console.log('Updating navigation for auth:', { isAuthenticated, user: user ? { name: user.name, email: user.email } : null });
    
    if (loginBtn) {
        loginBtn.classList.toggle('hidden', isAuthenticated);
        console.log('Login button hidden:', isAuthenticated);
    }
    if (dashboardBtn) {
        dashboardBtn.classList.toggle('hidden', !isAuthenticated);
        console.log('Dashboard button hidden:', !isAuthenticated);
    }
    if (logoutBtn) {
        logoutBtn.classList.toggle('hidden', !isAuthenticated);
        console.log('Logout button hidden:', !isAuthenticated);
    }
    if (userInfo) {
        userInfo.classList.toggle('hidden', !isAuthenticated);
        console.log('User info hidden:', !isAuthenticated);
    }
    
    if (isAuthenticated && user) {
        if (userAvatar && user.picture) {
            userAvatar.src = user.picture;
            userAvatar.alt = user.name || 'User';
            console.log('User avatar set:', user.picture);
        }
        if (userName) {
            userName.textContent = user.name || user.email || 'User';
            console.log('User name set:', user.name || user.email);
        }
    }
}

// Handle logout
async function handleLogout() {
    try {
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
        
        const data = await response.json();
        if (data.success) {
            currentUser = null;
            updateNavigationForAuth(false, null);
            // Reload page to reset state
            window.location.href = '/';
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
}

// Show dashboard
async function showDashboard() {
    if (!currentUser) {
        // Not authenticated, redirect to login
        window.location.href = '/api/auth/google?redirect=' + encodeURIComponent('/');
        return;
    }
    
    hideAll();
    if (dashboardView) dashboardView.classList.remove('hidden');
    
    showGlobalLoading();
    
    try {
        const response = await fetch('/api/dashboard', {
            credentials: 'include'
        });
        
        const data = await response.json();
        if (data.success) {
            await displayDashboard(data);
        } else {
            displayError('Failed to load dashboard');
        }
    } catch (error) {
        console.error('Error loading dashboard:', error);
        displayError('Failed to load dashboard');
    } finally {
        hideGlobalLoading();
    }
}

// Display learning analytics
function displayLearningAnalytics(analytics) {
    // Create or get analytics section
    let analyticsSection = document.getElementById('learningAnalytics');
    if (!analyticsSection) {
        analyticsSection = document.createElement('div');
        analyticsSection.id = 'learningAnalytics';
        analyticsSection.className = 'learning-analytics-section';
        
        // Insert into dashboard
        const dashboardContent = document.querySelector('#dashboardView .dashboard-content');
        if (dashboardContent) {
            dashboardContent.appendChild(analyticsSection);
        }
    }
    
    const masteryEntries = Object.entries(analytics.conceptMastery || {});
    const masteryHeatmap = masteryEntries.map(([concept, mastery]) => {
        const percentage = Math.round(mastery * 100);
        const color = mastery > 0.75 ? '#00ff88' : mastery > 0.5 ? '#fbbf24' : '#f87171';
        return `<div style="display: flex; justify-content: space-between; align-items: center; padding: 8px; margin: 4px 0; background: rgba(30, 42, 58, 0.05); border-radius: 4px;">
            <span>${concept}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
                <div style="width: 100px; height: 8px; background: rgba(30, 42, 58, 0.1); border-radius: 4px; overflow: hidden;">
                    <div style="width: ${percentage}%; height: 100%; background: ${color}; transition: width 0.3s;"></div>
                </div>
                <span style="font-weight: 600; color: ${color};">${percentage}%</span>
            </div>
        </div>`;
    }).join('');
    
    analyticsSection.innerHTML = `
        <h3 style="margin: 24px 0 16px 0; color: var(--navy);">📊 Learning Analytics</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: rgba(30, 42, 58, 0.05); padding: 16px; border-radius: 8px;">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Hint Dependency</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--navy);">${Math.round((analytics.hintDependency || 0) * 100)}%</div>
            </div>
            <div style="background: rgba(30, 42, 58, 0.05); padding: 16px; border-radius: 8px;">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Prediction Accuracy</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--navy);">${Math.round((analytics.predictionAccuracy || 0) * 100)}%</div>
            </div>
            <div style="background: rgba(30, 42, 58, 0.05); padding: 16px; border-radius: 8px;">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Transfer Success</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--navy);">${Math.round((analytics.transferSuccessRate || 0) * 100)}%</div>
            </div>
            <div style="background: rgba(30, 42, 58, 0.05); padding: 16px; border-radius: 8px;">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Avg. Time</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--navy);">${Math.round((analytics.averageCompletionTime || 0) / 60)}m</div>
            </div>
        </div>
        ${masteryEntries.length > 0 ? `
            <h4 style="margin: 16px 0 12px 0; color: var(--text);">Concept Mastery Heatmap</h4>
            <div style="max-height: 300px; overflow-y: auto;">
                ${masteryHeatmap}
            </div>
        ` : '<p style="color: var(--text-muted);">Complete challenges to see your concept mastery.</p>'}
    `;
}

// Hide dashboard
function hideDashboard() {
    if (dashboardView) dashboardView.classList.add('hidden');
}

// Display dashboard data
async function displayDashboard(data) {
    const { stats, recentActivity, continueLearning, completedChallenges } = data;
    
    // Update stats
    if (document.getElementById('totalCompleted')) {
        document.getElementById('totalCompleted').textContent = stats.totalCompleted;
    }
    if (document.getElementById('totalInProgress')) {
        document.getElementById('totalInProgress').textContent = stats.totalInProgress;
    }
    if (document.getElementById('totalChallenges')) {
        document.getElementById('totalChallenges').textContent = stats.totalChallenges;
    }
    
    // Load and display learning analytics
    if (currentUser?.id) {
        try {
            const analyticsResponse = await fetch(`/api/learning-analytics?userId=${currentUser.id}`);
            const analytics = await analyticsResponse.json();
            displayLearningAnalytics(analytics);
        } catch (error) {
            console.error('Error loading learning analytics:', error);
        }
    }
    
    // Display recent activity
    const recentActivityEl = document.getElementById('recentActivity');
    if (recentActivityEl) {
        if (recentActivity.length === 0) {
            recentActivityEl.innerHTML = '<p class="empty-state">No recent activity yet. Start a challenge to see your progress here!</p>';
        } else {
            recentActivityEl.innerHTML = recentActivity.map(activity => `
                <div class="activity-item" onclick="continueChallenge('${escapeHtml(activity.task)}', '${escapeHtml(activity.technology)}')">
                    <div class="activity-item-header">
                        <div class="activity-item-title">${escapeHtml(activity.task)}</div>
                        <div class="activity-item-time">${formatTimeAgo(activity.lastActive)}</div>
                    </div>
                    <div class="activity-item-description">
                        ${escapeHtml(activity.technology)} • ${activity.completedTasks}/${activity.totalTasks} tasks completed
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${activity.progress}%"></div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Display continue learning
    const continueLearningEl = document.getElementById('continueLearning');
    if (continueLearningEl) {
        if (continueLearning.length === 0) {
            continueLearningEl.innerHTML = '<p class="empty-state">No active challenges. Start a new one to begin learning!</p>';
        } else {
            continueLearningEl.innerHTML = continueLearning.map(challenge => `
                <div class="continue-item" onclick="continueChallenge('${escapeHtml(challenge.task)}', '${escapeHtml(challenge.technology)}')">
                    <div class="continue-item-header">
                        <div class="continue-item-title">${escapeHtml(challenge.task)}</div>
                        <div class="continue-item-progress">${Math.round(challenge.progress)}% complete</div>
                    </div>
                    <div class="continue-item-description">
                        ${escapeHtml(challenge.technology)} • ${challenge.completedTasks}/${challenge.totalTasks} tasks completed
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${challenge.progress}%"></div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Display completed challenges
    const completedChallengesEl = document.getElementById('completedChallenges');
    if (completedChallengesEl) {
        if (completedChallenges.length === 0) {
            completedChallengesEl.innerHTML = '<p class="empty-state">No completed challenges yet. Complete your first challenge to see it here!</p>';
        } else {
            completedChallengesEl.innerHTML = completedChallenges.map(challenge => `
                <div class="challenge-item">
                    <div class="challenge-item-header">
                        <div class="challenge-item-title">${escapeHtml(challenge.task)}</div>
                        <div class="challenge-item-date">Completed ${formatTimeAgo(challenge.completedAt)}</div>
                    </div>
                    <div class="activity-item-description">
                        ${escapeHtml(challenge.technology)} • ${challenge.totalTasks} tasks completed
                    </div>
                </div>
            `).join('');
        }
    }
}

// Format time ago
function formatTimeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return date.toLocaleDateString();
}

// Continue a challenge (global function for onclick)
window.continueChallenge = async function(task, technology) {
    // Set form values
    if (taskInput) taskInput.value = task;
    if (technologyInput) technologyInput.value = technology;
    
    // Hide dashboard
    hideDashboard();
    
    // Submit form to continue
    if (form) {
        const submitEvent = new Event('submit', { cancelable: true, bubbles: true });
        form.dispatchEvent(submitEvent);
    }
};

// Track challenge start (call when user starts a challenge)
async function trackChallengeStart(task, technology, tasks) {
    if (!currentUser) return; // Only track if authenticated
    
    try {
        await fetch('/api/user/challenge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ task, technology, tasks })
        });
    } catch (error) {
        console.error('Error tracking challenge start:', error);
        // Don't block user flow if tracking fails
    }
}

// Track task completion (call when user completes a task)
async function trackTaskCompletion(task, challengeTask) {
    if (!currentUser) return; // Only track if authenticated
    
    try {
        await fetch('/api/user/complete-task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ task, challengeTask })
        });
    } catch (error) {
        console.error('Error tracking task completion:', error);
        // Don't block user flow if tracking fails
    }
}

function resetToStart() {
    showGlobalLoading();
    hideAll();
    mainHeader.classList.remove('hidden');
    form.classList.remove('hidden');
    if (questionBankSection) questionBankSection.classList.remove('hidden');
    if (customChallengeSection) customChallengeSection.classList.remove('hidden');
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
    hideDashboard();
    const onlineEditorView = document.getElementById('onlineEditorView');
    if (onlineEditorView) onlineEditorView.classList.add('hidden');
}

// ============================================================================
// TOAST NOTIFICATION
// ============================================================================

function showToast(message, duration = 6000) {
    const toast = document.getElementById('toast');
    const toastMessage = toast?.querySelector('.toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    // Auto-hide after duration
    if (duration > 0) {
        setTimeout(() => {
            hideToast();
        }, duration);
    }
}

function hideToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.add('hidden');
    }
}

// Make hideToast globally accessible for the close button
window.hideToast = hideToast;

// ============================================================================
// ONLINE EDITOR FUNCTIONALITY
// ============================================================================

async function openOnlineEditor(taskText) {
    // Hide tutorial view and breakdown view, show editor view
    tutorialView.classList.add('hidden');
    breakdownResults.classList.add('hidden');
    // Hide floating editor button when editor view is shown
    const floatingEditorBtn = document.getElementById('floatingEditorBtn');
    if (floatingEditorBtn) floatingEditorBtn.classList.add('hidden');
    
    const onlineEditorView = document.getElementById('onlineEditorView');
    if (!onlineEditorView) return;
    
    onlineEditorView.classList.remove('hidden');
    
    // Set toggle button initial state (editor is visible by default)
    const toggleEditorBtn = document.getElementById('toggleEditorBtn');
    if (toggleEditorBtn) {
        toggleEditorBtn.textContent = '💻 Hide Editor';
        toggleEditorBtn.classList.add('active');
    }
    
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
                    editorTutorialContent.innerHTML = screenHTML;
                    
                    // Setup practice screen buttons if this is an implementation screen
                    if (screen.screenType === 'now-you-try' || screen.screenType === 'implementation') {
                        setupPracticeScreenForEditor(screen);
                        
                        // Auto-show editor on implementation screen (regardless of previous state)
                        const editorCodePane = document.querySelector('.editor-code-pane');
                        const editorLayout = document.querySelector('.editor-layout');
                        const toggleEditorBtn = document.getElementById('toggleEditorBtn');
                        
                        if (editorCodePane && editorLayout) {
                            // Show editor
                            editorCodePane.classList.remove('hidden');
                            editorLayout.classList.remove('editor-full-width');
                            
                            // Update toggle button state
                            if (toggleEditorBtn) {
                                toggleEditorBtn.textContent = '💻 Hide Editor';
                                toggleEditorBtn.classList.add('active');
                            }
                            
                            // Also call global update function if available
                            if (window.updateEditorToggleState) {
                                window.updateEditorToggleState();
                            }
                        }
                    } else {
                        // Update toggle button state when not on implementation screen
                        if (window.updateEditorToggleState) {
                            window.updateEditorToggleState();
                        }
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
            // Show floating button again when returning to roadmap
            const floatingEditorBtn = document.getElementById('floatingEditorBtn');
            if (floatingEditorBtn) floatingEditorBtn.classList.remove('hidden');
            showTaskBreakdown();
        });
    }
    
    const toggleEditorBtn = document.getElementById('toggleEditorBtn');
    if (toggleEditorBtn) {
        // Function to check actual editor visibility state
        function isEditorActuallyVisible() {
            const editorCodePane = document.querySelector('.editor-code-pane');
            return editorCodePane && !editorCodePane.classList.contains('hidden');
        }
        
        // Function to update button state based on actual visibility
        function updateToggleButtonState() {
            const isVisible = isEditorActuallyVisible();
            if (isVisible) {
                toggleEditorBtn.textContent = '💻 Hide Editor';
                toggleEditorBtn.classList.add('active');
            } else {
                toggleEditorBtn.textContent = '💻 Show Editor';
                toggleEditorBtn.classList.remove('active');
            }
        }
        
        // Set initial state
        updateToggleButtonState();
        
        toggleEditorBtn.addEventListener('click', () => {
            const editorCodePane = document.querySelector('.editor-code-pane');
            const editorLayout = document.querySelector('.editor-layout');
            const isCurrentlyVisible = isEditorActuallyVisible();
            
            if (isCurrentlyVisible) {
                // Hide editor
                if (editorCodePane) editorCodePane.classList.add('hidden');
                if (editorLayout) editorLayout.classList.add('editor-full-width');
            } else {
                // Show editor
                if (editorCodePane) editorCodePane.classList.remove('hidden');
                if (editorLayout) editorLayout.classList.remove('editor-full-width');
            }
            
            // Update button state after toggle
            updateToggleButtonState();
        });
        
        // Store update function globally so it can be called when screens change
        window.updateEditorToggleState = updateToggleButtonState;
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
                    // Track task completion if user is authenticated
                    if (currentUser && currentTask && currentAtomicTask) {
                        trackTaskCompletion(currentTask, currentAtomicTask);
                    }
                    // Check if all tasks complete and show reflection
                    checkAndShowReflectionIfComplete();
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
                            // Track task completion if user is authenticated
                            if (currentUser && currentTask && currentAtomicTask) {
                                trackTaskCompletion(currentTask, currentAtomicTask);
                            }
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
