// ============================================================================
// CODING INTERVIEW QUESTION BANK
// Organized by technology, sorted by frequency in real-world interviews
// ============================================================================

const questionBank = {
  
  // ==========================================================================
  // JAVASCRIPT FUNDAMENTALS
  // ==========================================================================
  "JavaScript": {
    icon: "🟨",
    description: "Core JavaScript concepts and algorithms",
    questions: [
      // Arrays & Algorithms (High Frequency)
      { id: "js-1", title: "Two Sum", difficulty: "Easy", frequency: "Very High", task: "Implement twoSum function that finds two numbers in an array that add up to a target" },
      { id: "js-2", title: "Three Sum", difficulty: "Medium", frequency: "High", task: "Find all unique triplets in an array that sum to zero" },
      { id: "js-3", title: "Maximum Subarray", difficulty: "Medium", frequency: "High", task: "Find the contiguous subarray with the largest sum (Kadane's algorithm)" },
      { id: "js-4", title: "Merge Two Sorted Arrays", difficulty: "Easy", frequency: "Very High", task: "Merge two sorted arrays into one sorted array" },
      { id: "js-5", title: "Array Deduplication", difficulty: "Easy", frequency: "Very High", task: "Remove duplicates from an array using multiple methods" },
      { id: "js-6", title: "Flatten Nested Array", difficulty: "Medium", frequency: "High", task: "Flatten a deeply nested array without using Array.flat()" },
      { id: "js-7", title: "Array Intersection", difficulty: "Easy", frequency: "High", task: "Find common elements between two arrays" },
      { id: "js-8", title: "Rotate Array", difficulty: "Medium", frequency: "Medium", task: "Rotate an array by k positions to the right" },
      { id: "js-9", title: "Find Missing Number", difficulty: "Easy", frequency: "High", task: "Find the missing number in an array containing 1 to n" },
      { id: "js-10", title: "Move Zeroes", difficulty: "Easy", frequency: "High", task: "Move all zeroes to the end while maintaining order of other elements" },
      
      // Strings (High Frequency)
      { id: "js-11", title: "Reverse String", difficulty: "Easy", frequency: "Very High", task: "Reverse a string using multiple approaches" },
      { id: "js-12", title: "Valid Palindrome", difficulty: "Easy", frequency: "Very High", task: "Check if a string is a palindrome ignoring non-alphanumeric characters" },
      { id: "js-13", title: "Valid Anagram", difficulty: "Easy", frequency: "High", task: "Determine if two strings are anagrams of each other" },
      { id: "js-14", title: "Longest Substring Without Repeating", difficulty: "Medium", frequency: "Very High", task: "Find length of longest substring without repeating characters" },
      { id: "js-15", title: "String Compression", difficulty: "Medium", frequency: "Medium", task: "Compress a string using counts of repeated characters (aabccc → a2b1c3)" },
      { id: "js-16", title: "First Non-Repeating Character", difficulty: "Easy", frequency: "High", task: "Find the first character that doesn't repeat in a string" },
      { id: "js-17", title: "Longest Common Prefix", difficulty: "Easy", frequency: "Medium", task: "Find the longest common prefix among an array of strings" },
      { id: "js-18", title: "Count Vowels and Consonants", difficulty: "Easy", frequency: "Medium", task: "Count vowels and consonants in a string" },
      
      // Objects & Hash Maps
      { id: "js-19", title: "Deep Clone Object", difficulty: "Medium", frequency: "Very High", task: "Implement deep clone for nested objects without using JSON methods" },
      { id: "js-20", title: "Object Comparison", difficulty: "Medium", frequency: "High", task: "Check if two objects are deeply equal" },
      { id: "js-21", title: "Group Array by Property", difficulty: "Medium", frequency: "High", task: "Group an array of objects by a specific property" },
      { id: "js-22", title: "Frequency Counter", difficulty: "Easy", frequency: "High", task: "Count frequency of elements in an array using an object" },
      { id: "js-23", title: "Object Flatten", difficulty: "Medium", frequency: "Medium", task: "Flatten a nested object into a single-level object with dot notation keys" },
      
      // Functions & Closures
      { id: "js-24", title: "Implement Debounce", difficulty: "Medium", frequency: "Very High", task: "Create a debounce function that delays invoking a function" },
      { id: "js-25", title: "Implement Throttle", difficulty: "Medium", frequency: "Very High", task: "Create a throttle function that limits function calls to once per interval" },
      { id: "js-26", title: "Function Currying", difficulty: "Medium", frequency: "High", task: "Implement a curry function that transforms f(a,b,c) into f(a)(b)(c)" },
      { id: "js-27", title: "Implement Bind", difficulty: "Medium", frequency: "High", task: "Create your own implementation of Function.prototype.bind" },
      { id: "js-28", title: "Memoization", difficulty: "Medium", frequency: "High", task: "Implement a memoize function to cache expensive function results" },
      { id: "js-29", title: "Once Function", difficulty: "Easy", frequency: "Medium", task: "Create a function that can only be called once" },
      { id: "js-30", title: "Pipe Function", difficulty: "Medium", frequency: "Medium", task: "Implement pipe that composes functions left to right" },
      
      // Async JavaScript
      { id: "js-31", title: "Promise.all Implementation", difficulty: "Medium", frequency: "High", task: "Implement your own Promise.all" },
      { id: "js-32", title: "Promise.race Implementation", difficulty: "Medium", frequency: "Medium", task: "Implement your own Promise.race" },
      { id: "js-33", title: "Sequential Promise Execution", difficulty: "Medium", frequency: "High", task: "Execute an array of promises sequentially" },
      { id: "js-34", title: "Retry with Exponential Backoff", difficulty: "Medium", frequency: "Medium", task: "Implement a retry function with exponential backoff" },
      { id: "js-35", title: "Async Array Map", difficulty: "Medium", frequency: "Medium", task: "Implement an async map function that processes items in parallel" },
      
      // DOM & Events (Vanilla JS)
      { id: "js-36", title: "Event Delegation", difficulty: "Easy", frequency: "High", task: "Implement event delegation for dynamically added elements" },
      { id: "js-37", title: "Infinite Scroll", difficulty: "Medium", frequency: "High", task: "Implement infinite scroll using Intersection Observer" },
      { id: "js-38", title: "Drag and Drop", difficulty: "Medium", frequency: "Medium", task: "Implement basic drag and drop functionality" },
      { id: "js-39", title: "Form Validation", difficulty: "Easy", frequency: "High", task: "Create a form validation system with real-time feedback" },
      { id: "js-40", title: "LocalStorage Wrapper", difficulty: "Easy", frequency: "Medium", task: "Create a localStorage wrapper with expiration support" }
    ]
  },

  // ==========================================================================
  // REACT
  // ==========================================================================
  "React": {
    icon: "⚛️",
    description: "React components, hooks, and patterns",
    questions: [
      // Components & Props
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
      
      // Hooks Deep Dive
      { id: "react-11", title: "useEffect Cleanup", difficulty: "Medium", frequency: "Very High", task: "Implement useEffect with proper cleanup for subscriptions" },
      { id: "react-12", title: "Custom useFetch Hook", difficulty: "Medium", frequency: "Very High", task: "Create a custom hook for data fetching with loading and error states" },
      { id: "react-13", title: "Custom useDebounce Hook", difficulty: "Medium", frequency: "High", task: "Build a useDebounce hook for debounced values" },
      { id: "react-14", title: "Custom useLocalStorage Hook", difficulty: "Medium", frequency: "High", task: "Create a hook that syncs state with localStorage" },
      { id: "react-15", title: "Custom usePrevious Hook", difficulty: "Easy", frequency: "Medium", task: "Implement a hook that returns the previous value" },
      { id: "react-16", title: "useReducer Todo App", difficulty: "Medium", frequency: "High", task: "Refactor a todo app to use useReducer instead of useState" },
      { id: "react-17", title: "Custom useToggle Hook", difficulty: "Easy", frequency: "Medium", task: "Create a simple toggle hook for boolean states" },
      { id: "react-18", title: "Custom useClickOutside Hook", difficulty: "Medium", frequency: "High", task: "Build a hook to detect clicks outside an element" },
      
      // State Management & Context
      { id: "react-19", title: "Theme Context Provider", difficulty: "Medium", frequency: "High", task: "Implement dark/light theme switching with Context API" },
      { id: "react-20", title: "Shopping Cart with Context", difficulty: "Medium", frequency: "High", task: "Build a shopping cart using Context for state management" },
      { id: "react-21", title: "Auth Context", difficulty: "Medium", frequency: "High", task: "Create an authentication context with login/logout" },
      
      // Performance
      { id: "react-22", title: "Optimize List Rendering", difficulty: "Medium", frequency: "High", task: "Use React.memo and useMemo to optimize a large list" },
      { id: "react-23", title: "Virtualized List", difficulty: "Hard", frequency: "Medium", task: "Implement a virtualized list for rendering large datasets" },
      { id: "react-24", title: "Code Splitting", difficulty: "Medium", frequency: "Medium", task: "Implement lazy loading with React.lazy and Suspense" },
      
      // Patterns
      { id: "react-25", title: "Higher Order Component", difficulty: "Medium", frequency: "Medium", task: "Create an HOC that adds loading state to any component" },
      { id: "react-26", title: "Render Props Pattern", difficulty: "Medium", frequency: "Medium", task: "Implement mouse position tracker using render props" },
      { id: "react-27", title: "Compound Components", difficulty: "Hard", frequency: "Medium", task: "Build a compound component pattern for a Menu component" },
      { id: "react-28", title: "Error Boundary", difficulty: "Medium", frequency: "High", task: "Implement an error boundary component" }
    ]
  },

  // ==========================================================================
  // TYPESCRIPT
  // ==========================================================================
  "TypeScript": {
    icon: "🔷",
    description: "TypeScript types, generics, and patterns",
    questions: [
      { id: "ts-1", title: "Generic Array Functions", difficulty: "Medium", frequency: "High", task: "Implement type-safe array utility functions with generics" },
      { id: "ts-2", title: "API Response Types", difficulty: "Medium", frequency: "Very High", task: "Define types for API responses with success and error variants" },
      { id: "ts-3", title: "Type Guards", difficulty: "Medium", frequency: "High", task: "Implement type guards for runtime type checking" },
      { id: "ts-4", title: "Mapped Types", difficulty: "Medium", frequency: "Medium", task: "Create utility types using mapped types (Partial, Required, etc.)" },
      { id: "ts-5", title: "Discriminated Unions", difficulty: "Medium", frequency: "High", task: "Model state machines using discriminated unions" },
      { id: "ts-6", title: "Generic React Component", difficulty: "Medium", frequency: "High", task: "Create a generic List component with TypeScript" },
      { id: "ts-7", title: "Utility Type Implementation", difficulty: "Hard", frequency: "Medium", task: "Implement Pick, Omit, and Record from scratch" },
      { id: "ts-8", title: "Async Function Types", difficulty: "Medium", frequency: "High", task: "Properly type async functions and Promise returns" },
      { id: "ts-9", title: "Event Handler Types", difficulty: "Easy", frequency: "High", task: "Type React event handlers correctly" },
      { id: "ts-10", title: "Module Declaration", difficulty: "Medium", frequency: "Medium", task: "Create type declarations for an untyped JS module" }
    ]
  },

  // ==========================================================================
  // CSS & STYLING
  // ==========================================================================
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
      { id: "css-8", title: "Tooltip", difficulty: "Medium", frequency: "Medium", task: "Build a pure CSS tooltip" },
      { id: "css-9", title: "Sticky Header", difficulty: "Easy", frequency: "High", task: "Implement a sticky header that changes on scroll" },
      { id: "css-10", title: "Aspect Ratio Box", difficulty: "Easy", frequency: "Medium", task: "Maintain aspect ratio of an element" },
      { id: "css-11", title: "Custom Checkbox", difficulty: "Medium", frequency: "Medium", task: "Style a custom checkbox without JavaScript" },
      { id: "css-12", title: "Truncate Text", difficulty: "Easy", frequency: "High", task: "Truncate text with ellipsis for single and multiple lines" }
    ]
  },

  // ==========================================================================
  // NODE.JS & BACKEND
  // ==========================================================================
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
      { id: "node-7", title: "Caching Layer", difficulty: "Medium", frequency: "Medium", task: "Add Redis caching to API endpoints" },
      { id: "node-8", title: "WebSocket Chat", difficulty: "Medium", frequency: "Medium", task: "Build a real-time chat using WebSockets" },
      { id: "node-9", title: "API Pagination", difficulty: "Easy", frequency: "High", task: "Implement cursor-based pagination" },
      { id: "node-10", title: "Environment Config", difficulty: "Easy", frequency: "High", task: "Set up environment configuration with validation" }
    ]
  },

  // ==========================================================================
  // DATA STRUCTURES
  // ==========================================================================
  "Data Structures": {
    icon: "🏗️",
    description: "Implement common data structures from scratch",
    questions: [
      { id: "ds-1", title: "Implement Stack", difficulty: "Easy", frequency: "High", task: "Implement a stack with push, pop, peek operations" },
      { id: "ds-2", title: "Implement Queue", difficulty: "Easy", frequency: "High", task: "Implement a queue with enqueue and dequeue" },
      { id: "ds-3", title: "Linked List", difficulty: "Medium", frequency: "High", task: "Implement a singly linked list with common operations" },
      { id: "ds-4", title: "Binary Search Tree", difficulty: "Medium", frequency: "Medium", task: "Implement BST with insert, search, and delete" },
      { id: "ds-5", title: "Hash Table", difficulty: "Medium", frequency: "High", task: "Implement a hash table with collision handling" },
      { id: "ds-6", title: "Min/Max Heap", difficulty: "Hard", frequency: "Medium", task: "Implement a min heap with insert and extract operations" },
      { id: "ds-7", title: "LRU Cache", difficulty: "Hard", frequency: "High", task: "Implement an LRU cache with O(1) get and put" },
      { id: "ds-8", title: "Trie", difficulty: "Medium", frequency: "Medium", task: "Implement a trie for autocomplete functionality" }
    ]
  },

  // ==========================================================================
  // SYSTEM DESIGN (Frontend Focus)
  // ==========================================================================
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
      { id: "sd-7", title: "Design Form Builder", difficulty: "Hard", frequency: "Medium", task: "Design a dynamic form builder" },
      { id: "sd-8", title: "Design Kanban Board", difficulty: "Medium", frequency: "Medium", task: "Design a drag-and-drop kanban board" }
    ]
  }
};

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questionBank;
}
