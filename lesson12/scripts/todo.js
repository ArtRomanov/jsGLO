'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let todoData = [];


if (localStorage.getItem('thingsToDo')) {
	 todoData = JSON.parse(localStorage.getItem('thingsToDo'));
 	render();
}

// Редактор кода ругается на преждевременный вызов функции render(), который произошёл до её объявления
//Почему так? Ведь по правилам это допустимая практика. В настройках jshint указана версия №9.
function render() {
	todoList.textContent = '';
	todoCompleted.textContent = '';

	todoData.forEach(function (item) { 
		const li = document.createElement('li');
		 
		li.classList.add('todo-item');
		 
		li.innerHTML = 	'<span class="text-todo">'+ item.value +'</span>'+
						'<div class="todo-buttons">' + '<button class="todo-remove"></button>'+
						'<button class="todo-complete"></button>'+'</div>';
		 
		if (item.value !== '') {

			if (item.completed) {
				todoCompleted.append(li);
				li.classList.toggle('completed'); 
			} else {
				todoList.append(li);
				headerInput.value = '';
			}
		}

		const btnTodoComplete = li.querySelector('.todo-complete'); 
		btnTodoComplete.addEventListener('click', function () {
			item.completed = !item.completed;

		localStorage.setItem('thingsToDo', JSON.stringify(todoData));

		render();
		});
		
		const btnTodoRemove = li.querySelector('.todo-remove'); 
		btnTodoRemove.addEventListener('click',function(){
			for(let i=0;i<todoData.length;i++){
				if (todoData[i]===item){
					todoData.splice(i,1);
				}
			}
		localStorage.removeItem('thingsToDo', JSON.stringify(todoData));

		render();
		});
	});	
}

todoControl.addEventListener('submit', function (event) { 
	event.preventDefault();

	const newTodo = {
		value: headerInput.value,
		completed: false
	};
	todoData.push(newTodo);
	
	localStorage.setItem('thingsToDo', JSON.stringify(todoData));

	render();
});


render();
