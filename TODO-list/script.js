'use strict';

const input = document.querySelector('#new-task input');
const tasks = document.querySelector('#tasks');
const newTask = document.querySelector('#new-task input');
const tasksCounter = document.querySelector('#tasks-counter');
const btnAddTask = document.querySelector('#btn-new-task');

const taskValues = [];

const addNewTask = () => {
  const taskValue = newTask.value;
  taskValues.push(taskValue);

  tasks.innerHTML += `
    <div class="task">
      <span class="task-value">${taskValue}</span>
      <button class="delete">
        <img src="icons/delete-icon.svg" alt="delete" />
      </button>
    </div>
  `;

  tasks.firstElementChild.textContent = `Tasks: ${taskValues.length}`;
};

btnAddTask.addEventListener('click', () => {
  if (input.value.length === 0) {
    alert('Enter Task');
    return;
  }

  if (taskValues.some((value) => value === input.value)) {
    alert('Task is already added');
    return;
  }

  addNewTask();
});

// <-- Delete Task -->
tasks.addEventListener('click', (event) => {
  const target = event.target;

  if (target.tagName !== 'IMG') return;

  target.closest('.task').remove();

  const searchedValue = target.closest('.task').firstElementChild.textContent;
  const index = taskValues.findIndex((value) => value === searchedValue);
  taskValues.splice(index, 1);
  tasks.firstElementChild.textContent = `Tasks: ${taskValues.length}`;
});
