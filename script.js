const projectEditBtn = document.querySelector('.project_edit');
const projectForm = document.querySelector('#project_form');
const projectCancelBtn = document.querySelector('.project_cancel');
const projectToggleBtn = document.querySelector('.project_toggle');
const taskForm = document.querySelector('.task_form');
const addTask = document.querySelector('.add_task');
const taskCancelBtn = document.querySelector('.task_cancel');

class TodoList {
	constructor() {
		this.todos = [];
	}

	addTodo(task) {
		this.todos.push(task);
	}

	removeTodo(task) {
		this.todos = this.todos.filter((todo) => todo !== task);
	}

	getList() {
		return this.todos;
	}
}

projectEditBtn.addEventListener('click', (e) => {
	e.preventDefault();
	e.stopPropagation();
	projectForm.classList.toggle('hidden');
});

projectForm.addEventListener('submit', (e) => {
	e.preventDefault();
	projectAddFunc();
});

projectCancelBtn.addEventListener('click', (e) => {
	projectCancelFunc();
});

projectToggleBtn.addEventListener('click', (e) => {
	toggleTask();
});

addTask.addEventListener('click', (e) => {
	taskForm.classList.toggle('hidden');
});

taskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const title = document.querySelector('#title').value;
	const description = document.querySelector('#description').value;
	const priority = document.querySelector('#priority').value;
	const dueDate = document.querySelector('#date').valueAsDate;
	console.log(title, description, priority, dueDate);
});

taskCancelBtn.addEventListener('click', (e) => {
	taskCancelFunc();
});

function toggleTask() {
	const tasks = document.querySelectorAll('.task');
	tasks.forEach((task) => task.classList.toggle('hidden'));
}

function projectAddFunc() {
	const project = projectForm[0].value;
	const todoLists = document.querySelector('.todoLists');
	const todoList = document.createElement('div');
	const todoListImages = document.createElement('div');
	const todoListPara = document.createElement('p');
	const todoImageList = document.createElement('img');
	const todoImageEdit = document.createElement('img');
	const todoImageTrash = document.createElement('img');

	todoList.classList.add('todoList');
	todoImageList.src = './imgs/todolist.png';
	todoImageEdit.src = './imgs/edit.png';
	todoImageTrash.src = './imgs/trash.png';
	todoListImages.classList.add('todoList_imgs');
	todoListImages.appendChild(todoImageEdit);
	todoListImages.appendChild(todoImageTrash);
	todoListPara.textContent = project;
	todoListPara.classList.add('todoProjectName');
	todoList.appendChild(todoImageList);
	todoList.appendChild(todoListPara);
	todoList.appendChild(todoListImages);
	todoLists.appendChild(todoList);

	projectForm.reset();
	projectForm.classList.add('hidden');
}

function projectCancelFunc() {
	projectForm.reset();
	projectForm.classList.add('hidden');
}

function taskCancelFunc() {
	taskForm.reset();
	taskForm.classList.add('hidden');
}
