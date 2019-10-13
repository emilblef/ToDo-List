const form = document.querySelector('.addForm');
const ul = document.querySelector('.tasks');
const clear = document.querySelector('.clear')
const liTasks = document.getElementsByClassName('task');
const inputTask = document.querySelector('.addInput');
const taskNumber = document.querySelector('.list h3 span');
const inputSearch = document.querySelector('.findInput');
let liElements;


const removeTask = (e) => {
    if (inputSearch.value !== '') {
        alert('Wyczyść pole wyszukiwarki')
    } else {
        e.target.parentNode.remove();
        taskNumber.textContent = liTasks.length;
    }
}

const removeAll = (e) => {
    e.preventDefault();
    ul.innerHTML = '';
    taskNumber.textContent = liTasks.length;
}

clear.addEventListener('click', removeAll);

const addTask = (e) => {
    e.preventDefault();
    const taskName = inputTask.value;
    if (taskName === "") {
        alert('Wpisz nazwę zadnia');
        return
    };
    if (inputSearch.value !== '') {
        alert('Wyczyść pole wyszukiwarki')
    } else {
        const task = document.createElement('li');
        task.className = 'task';
        task.innerHTML = taskName + '  <button class="removeBtn">Usuń</button>';
        ul.appendChild(task);
        inputTask.value = "";
        taskNumber.textContent = liTasks.length;
        liElements = document.querySelectorAll('li');
        task.querySelector('button').addEventListener('click', removeTask);
    }
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