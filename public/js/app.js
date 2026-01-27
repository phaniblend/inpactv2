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
}

// ============================================================================
// PHASE 2: TASK BREAKDOWN
// ============================================================================

async function handleStartBuilding() {
    resultsDiv.classList.add('hidden');
    startBuildingBtn.disabled = true;
    showGlobalLoading();
    
    try {
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
                <p class="screen-goal"><strong>Goal:</strong> ${setupInfo.goal}</p>
                <p class="screen-why"><strong>Why:</strong> ${setupInfo.why}</p>
                
                <div class="setup-intro">
                    <strong>Before you start coding, you'll need to set up your environment.</strong><br>
                    Complete each step below and check it off when done.
                </div>
                
                <div class="setup-video-link">
                    <a href="${setupInfo.youtubeLink}" target="_blank" rel="noopener noreferrer">
                        ▶ Watch setup tutorials on YouTube
                    </a>
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
    
    prevStepBtn.style.display = index === 0 ? 'none' : 'inline-block';
    prevStepBtn.disabled = index === 0;
    
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

function getScreenHTML(screen) {
    const type = screen.screenType;
    const content = screen.content || {};
    const num = screen.screenNumber || '';
    
    switch (type) {
        case 'problem-framing':
        case 'problem-context':
            return `
                <div class="screen-container screen-problem-context">
                    <div class="screen-header">
                        <span class="screen-number">${num}</span>
                        <span class="screen-type-label">Problem Context</span>
                    </div>
                    <h2 class="screen-title">${screen.title || 'Problem Context'}</h2>
                    <div class="screen-body no-code">
                        <p class="goal-text">${content.goal || ''}</p>
                        <p class="context-text">${content.context || content.explanation || ''}</p>
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
                        <pre class="code-block"><code>${escapeHtml(content.code || '')}</code></pre>
                        ${content.parameters ? `
                            <div class="parameters-list">
                                <h4>Parameters</h4>
                                <ul>
                                    ${content.parameters.map(p => `<li><code>${p.name}</code> — ${p.description}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${content.returns ? `<p class="returns-text"><strong>Returns:</strong> ${content.returns}</p>` : ''}
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
                        ${content.objectExplanation ? `
                            <div class="object-explanation">
                                <h4>How the Object Works</h4>
                                <p>${content.objectExplanation}</p>
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
                        
                        <div class="code-editor-container">
                            <textarea id="codeEditor" class="code-editor" spellcheck="false">${escapeHtml(content.starterCode || '// Your code here')}</textarea>
                        </div>
                        
                        <div id="validationFeedback" class="validation-feedback hidden"></div>
                        <div id="hintDisplay" class="hint-display hidden"></div>
                        
                        <div class="practice-actions">
                            <button id="checkCodeBtn" class="btn-primary">Check Code</button>
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

// ============================================================================
// NAVIGATION
// ============================================================================

function navigateScreen(direction) {
    const screens = currentTutorial.screens || [];
    const newIndex = currentScreenIndex + direction;
    
    if (newIndex < 0) return;
    
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
    const responseDiv = document.getElementById('mentorResponse');
    const askBtn = document.getElementById('askMentorBtn');
    
    const question = queryInput.value.trim();
    
    if (!question) {
        responseDiv.innerHTML = '<p class="mentor-error">Please type a question first.</p>';
        responseDiv.classList.remove('hidden');
        return;
    }
    
    askBtn.disabled = true;
    askBtn.textContent = 'Thinking...';
    responseDiv.innerHTML = '<p class="mentor-loading">Your mentor is thinking...</p>';
    responseDiv.classList.remove('hidden');
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
        
        responseDiv.innerHTML = `
            <div class="mentor-answer">
                <strong>Mentor:</strong>
                <p>${data.answer}</p>
            </div>
        `;
        
        queryInput.value = '';
        
    } catch (error) {
        responseDiv.innerHTML = `<p class="mentor-error">Error: ${error.message}</p>`;
    } finally {
        askBtn.disabled = false;
        askBtn.textContent = 'Ask Mentor';
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
}
