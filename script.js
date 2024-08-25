document.getElementById('add-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('todo-list');

    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task';
    taskSpan.textContent = taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'actions';

    const editIcon = document.createElement('i');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '&#9998;'; // Pencil icon for edit
    editIcon.addEventListener('click', function () {
        const newTaskText = prompt('Edit Task', taskSpan.textContent);
        if (newTaskText) {
            taskSpan.textContent = newTaskText;
        }
    });

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '&#10060;'; // Cross icon for delete
    deleteIcon.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    actionsDiv.appendChild(editIcon);
    actionsDiv.appendChild(deleteIcon);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    taskList.appendChild(listItem);

    taskInput.value = '';
});