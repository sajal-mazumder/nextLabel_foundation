// console.log(44);

// dom.js er sokol elomelo code ekhane formate kore likha hobe

let myBtn = document.getElementById('myBtn');
let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');


let tasks = [];
let taskCounter = 1;

function render (){
    taskList.innerHTML = ''; // delete of old data

    tasks.forEach((task) => {
        let newLi = document.createElement('li');
        newLi.classList.add('task_li');

        let newSpan = document.createElement('span');
        newSpan.classList.add('span_text');
        newSpan.textContent = `task: ${task.text} completed: ${task.completed} deleted: ${task.deleted}`;

        let btnWraper = document.createElement('div');
        btnWraper.classList.add('btn_div');


        let completeBtn = document.createElement('button');
        completeBtn.textContent = '✅';

        completeBtn.addEventListener('click', () =>{
            completeTask(task.id);
        })

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';

        deleteBtn.addEventListener('click', () => {
            deleteTask(task.id);
        })

        btnWraper.appendChild(completeBtn);
        btnWraper.appendChild(deleteBtn);

        newLi.appendChild(newSpan);
        newLi.appendChild(btnWraper);

        taskList.appendChild(newLi);
    })
}

// add task

function addTask(){
    let taskText = taskInput.value.trim();
    // console.log(taskText, 'task')

    if (taskText === '') {
        return taskText;
    }

    let newTask = {
        id: taskCounter++,
        text: taskText,
        completed: false,
        deleted: false
    }

    tasks.push(newTask);
    taskInput.value = '';
    render();
}

myBtn.addEventListener('click', addTask);

function completeTask(id){
    let task = tasks.find((task) => task.id == id);

    task.completed = !task.completed;
    // console.log(task.completed)
    // task.classList.add('completed')

    render();
}

function deleteTask(id){
     tasks = tasks.filter((task) =>task.id !== id );
    // task.deleted = !task.deleted;
    // console.log(task.deleted);

    render();
}