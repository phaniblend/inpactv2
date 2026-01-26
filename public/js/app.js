// ============================================================================
// DOM ELEMENTS
// ============================================================================

// Form & Input
const form = document.getElementById('objectivesForm');
const taskInput = document.getElementById('task');
const technologyInput = document.getElementById('technology');
const generateBtn = document.getElementById('generateBtn');
const mainHeader = document.getElementById('mainHeader');

// Loading States
const loadingDiv = document.getElementById('loading');
const breakdownLoading = document.getElementById('breakdownLoading');
const tutorialLoading = document.getElementById('tutorialLoading');

// Results & Objectives
const resultsDiv = document.getElementById('results');
const objectivesList = document.getElementById('objectives');

// Task Breakdown
const startBuildingBtn = document.getElementById('startBuildingBtn');
const breakdownResults = document.getElementById('breakdownResults');
const tasksList = document.getElementById('tasksList');

// Tutorial View
const tutorialView = document.getElementById('tutorialView');
const backToTasks = document.getElementById('backToTasks');
const tutorialTaskTitle = document.getElementById('tutorialTaskTitle');
const currentStepNum = document.getElementById('currentStepNum');
const totalSteps = document.getElementById('totalSteps');
const stepProgressFill = document.getElementById('stepProgressFill');

// Buttons
const prevStepBtn = document.getElementById('prevStepBtn');
const nextStepBtn = document.getElementById('nextStepBtn');
const backToObjectives = document.getElementById('backToObjectives');
const newSearchBtn = document.getElementById('newSearchBtn');
const startNewBtn = document.getElementById('startNewBtn');
const retryBtn = document.getElementById('retryBtn');

// Error
const errorDiv = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');

// ============================================================================
// STATE MANAGEMENT
// ============================================================================

let currentTask = null;
let currentTechnology = null;
let currentAtomicTask = null;
let currentTutorial = null;
let currentScreenIndex = 0;  // Changed from currentStepIndex
let hintCount = 0;
let previousHints = [];
let completedTasks = [];

// ============================================================================
// SETUP TASK DETECTION (Frontend-side)
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
    const lowerTask = taskText.toLowerCase();
    
    if (lowerTask.includes('react') && (lowerTask.includes('create') || lowerTask.includes('set up'))) {
        return {
            title: 'Set Up Your React Project',
            goal: 'Create a new React application with all necessary files and dependencies',
            why: 'Create React App gives you a ready-to-code project structure',
            instructions: [
                'Open your terminal',
                'Navigate to your preferred folder: cd Desktop',
                'Run: npx create-react-app my-app',
                'Wait for installation (1-2 minutes)',
                'Navigate into project: cd my-app',
                'Start server: npm start',
                'Browser opens to http://localhost:3000'
            ],
            verification: 'You should see the React logo in your browser'
        };
    }
    
    return {
        title: taskText,
        goal: 'Complete the setup task',
        why: 'This prepares your development environment',
        instructions: [
            'Follow the official documentation',
            'Verify the setup worked',
            'Troubleshoot any errors'
        ],
        verification: 'The tool/setup is working as expected'
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

// ============================================================================
// PHASE 1: GENERATE LEARNING OBJECTIVES
// ============================================================================

async function handleSubmit(e) {
    e.preventDefault();
    
    currentTask = taskInput.value.trim();
    currentTechnology = technologyInput.value.trim();
    
    hideAll();
    loadingDiv.classList.remove('hidden');
    generateBtn.disabled = true;
    
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
        loadingDiv.classList.add('hidden');
        generateBtn.disabled = false;
    }
}

function displayObjectives(data) {
    document.getElementById('resultTask').textContent = data.task;
    document.getElementById('resultTech').textContent = data.technology;
    document.getElementById('objectives').textContent = data.objectives;
    
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================================
// PHASE 2: TASK BREAKDOWN
// ============================================================================

async function handleStartBuilding() {
    resultsDiv.classList.add('hidden');
    breakdownLoading.classList.remove('hidden');
    startBuildingBtn.disabled = true;
    
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
        breakdownLoading.classList.add('hidden');
        startBuildingBtn.disabled = false;
    }
}

function displayTaskBreakdown(tasks) {
    tasksList.innerHTML = '';
    
    const section = createTaskSection('Your Learning Roadmap', '🚀', tasks);
    tasksList.appendChild(section);
    updateTaskProgress();
    
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
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
    console.log('Task clicked:', taskText);
    currentAtomicTask = taskText;
    
    if (isSetupTask(taskText)) {
        displaySetupTask(taskText);
        return;
    }
    
    breakdownResults.classList.add('hidden');
    tutorialLoading.classList.remove('hidden');
    
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
        tutorialLoading.classList.add('hidden');
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
                <span class="screen-icon">⚙️</span>
                <h2>${setupInfo.title}</h2>
            </div>
            <div class="screen-body">
                <p class="screen-goal"><strong>Goal:</strong> ${setupInfo.goal}</p>
                <p class="screen-why"><strong>Why:</strong> ${setupInfo.why}</p>
                
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
    
    // Setup checkbox listeners
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
    
    // Configure navigation
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
    
    // Show navigation
    document.querySelector('.step-navigation').style.display = 'flex';
    document.querySelector('.step-progress').style.display = 'block';
    
    // Render first screen
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
    
    // Update progress
    currentStepNum.textContent = index + 1;
    const progress = ((index + 1) / screens.length) * 100;
    stepProgressFill.style.width = `${progress}%`;
    
    // Update navigation buttons
    prevStepBtn.style.display = index === 0 ? 'none' : 'inline-block';
    prevStepBtn.disabled = index === 0;
    
    if (index === screens.length - 1) {
        nextStepBtn.textContent = 'Complete Task ✓';
    } else {
        nextStepBtn.textContent = 'Next →';
    }
    nextStepBtn.disabled = false;
    nextStepBtn.onclick = () => navigateScreen(1);
    
    // Render based on screen type
    const stepContent = document.getElementById('stepContent');
    stepContent.innerHTML = getScreenHTML(screen);
    
    // Add event listeners for interactive screens
    if (screen.screenType === 'now-you-try') {
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
                            <textarea id="codeEditor" class="code-editor" spellcheck="false">${escapeHtml(content.starterCode || '// Your implementation here')}</textarea>
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
    
    if (newIndex >= screens.length) {
        // Completed tutorial
        if (!completedTasks.includes(currentAtomicTask)) {
            completedTasks.push(currentAtomicTask);
        }
        showTaskBreakdown();
        return;
    }
    
    currentScreenIndex = newIndex;
    renderScreen(currentScreenIndex);
}

function showTaskBreakdown() {
    tutorialView.classList.add('hidden');
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    breakdownResults.classList.remove('hidden');
    
    refreshTaskList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    breakdownResults.classList.add('hidden');
    tutorialView.classList.add('hidden');
    mainHeader.classList.add('hidden');
    form.classList.add('hidden');
    resultsDiv.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            checkBtn.textContent = '✓ Check My Code';
        }
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
            hintBtn.textContent = hintCount >= 3 ? 'No more hints' : `💡 Hint (${hintCount}/3)`;
        }
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
    // Get solution from screen 10
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
    hideAll();
    mainHeader.classList.remove('hidden');
    form.classList.remove('hidden');
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
}

function hideAll() {
    resultsDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    breakdownResults.classList.add('hidden');
    tutorialView.classList.add('hidden');
}