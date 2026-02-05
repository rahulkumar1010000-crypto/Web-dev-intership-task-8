// Store tasks in an array for state management (Hint 7)
let tasks = [];

const taskInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskValue = taskInput.value.trim();

    // Basic validation (Hint 8)
    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a task object
    const taskObj = {
        id: Date.now(),
        text: taskValue,
        completed: false
    };

    tasks.push(taskObj);
    renderTasks();
    taskInput.value = ""; // Clear input
}

// Function to render tasks using document.createElement (Hint 4)
function renderTasks() {
    taskList.innerHTML = ""; // Clear current list

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        
        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.completed) span.classList.add('completed');
        
        // Mark as completed toggle (Hint 5)
        span.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });

        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.classList.add('delete-btn');
        
        // Delete functionality (Hint 6)
        delBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}

// Event listener for button click (Hint 3)
addBtn.addEventListener('click', addTask);

// Event listener for Enter key (Hint 3)
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
