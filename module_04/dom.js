// console.log('connected');
// document er id k different way te dhora jai
// 1. getElementById
// console.log(document.getElementById('myBtn'));

// const { createElement } = require("react");

// 2. quary selector by tag name and by id

// let getBtn = document.querySelector('button') // tag name
// let btnGet = document.querySelector('#myBtn') // byb id name
// console.log(getBtn, btnGet);


// addEventListener 
// let myBtn = document.getElementById('myBtn');
// let taskInput = document.getElementById('taskInput');
// let taskList = document.getElementById('taskList');
// let refres = document.getElementById('refres')

// myBtn.addEventListener('click', function(){ // ekhane click likhte hobe.
//     console.log(taskInput.value); // it is working
// })

// this function can write as arrow function

// myBtn.addEventListener('click', () =>{ // arrow function
//     // console.log('mouse clicked', taskInput.value); // it is also working
//     let li = document.createElement('li');
//     li.textContent = taskInput.value;
//     taskList.appendChild(li);
//     // console.log(li);

//     let span = document.createElement('span');
//     span.textContent = taskInput.value;
//     // console.log(span);

//     let btnWraper = document.createElement('div');
//     // console.log(btnWraper);

//     let completeBtn = document.createElement('button');
//     completeBtn.textContent = '✅';
//     // console.log(completeBtn);

//     let deleteBtn = document.createElement('button');
//     deleteBtn.textContent = '❌';
//     // console.log(deleteBtn);

//     li.appendChild(span);
//     li.appendChild(btnWraper);

//     btnWraper.appendChild(completeBtn);
//     btnWraper.appendChild(deleteBtn);

//     taskInput.value = '';
// })

// // refres.addEventListener('click', () =>{
// // //     console.log('refreshed', taskInput.value);
    
// // })

// // press enter button not mouse click

// taskInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         // console.log('Input entered', taskInput.value);
//         let li = document.createElement('li');
//         li.textContent = taskInput.value;
//         taskList.appendChild(li);
//         taskInput.value = '';
//     }
// })




// creating new tag element

// let li = document.createElement('li');
// li.textContent = 'Learn JS';
// taskList.appendChild(li);
// console.log(li);

