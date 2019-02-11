const form = document.querySelector('form');
const ul = document.querySelector('ul');
const liTasks = document.getElementsByClassName('task');
const inputTask = document.querySelector('.add input');
const taskNumber = document.querySelector('.list h3 span');
const inputSearch = document.querySelector('.find input');
let liElements;


const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = liTasks.length;
}

const addTask = (e) => {
    e.preventDefault();
    const taskName = inputTask.value;
    if (taskName === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskName + '  <button>Usuń [ X ]</button>';
    ul.appendChild(task);
    inputTask.value = "";
    taskNumber.textContent = liTasks.length;
    liElements = document.querySelectorAll('li');
    task.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];
    tasks = tasks.filter(task => task.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));
    taskNumber.textContent = tasks.length;
}

inputSearch.addEventListener('input', searchTask);