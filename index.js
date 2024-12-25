const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Function to add a new to-do item
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please Enter a Value');
        return;
    }

    const li = document.createElement('li');
    li.className = 'bg-white flex items-center justify-between p-2 rounded shadow';

    const span = document.createElement('span');
    span.textContent = todoText;
    span.className = 'flex-grow';

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔️';
    completeButton.className = 'bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600';

    const editButton = document.createElement('button');
    editButton.textContent = '✏️';
    editButton.className = 'bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';

    // Add event listener for completing a to-do
    completeButton.addEventListener('click', () => {
        span.classList.toggle('line-through');
    });

    // Add event listener for editing a to-do
    editButton.addEventListener('click', () => {
        if (editButton.textContent === '✏️') {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            input.className = 'flex-grow p-1 border rounded w-full'; // Ensure input takes up full width

            li.insertBefore(input, span);  // Insert input before the span
            li.removeChild(span);  // Remove the span with text
            editButton.textContent = '💾';  // Change to Save icon
        } else {
            const input = li.querySelector('input');
            span.textContent = input.value.trim() || 'Untitled';  // Default to 'Untitled' if empty
            li.insertBefore(span, input);  // Place the span back
            li.removeChild(input);  // Remove the input field
            editButton.textContent = '✏️';  // Revert to pencil icon
        }
    });

    // Add event listener for deleting a to-do
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
}

// Event listener for adding a new to-do
addButton.addEventListener('click', addTodo);