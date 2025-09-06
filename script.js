const projectEditBtn = document.querySelector('.project_edit');
const projectForm = document.querySelector('#project_form');
const projectCancelBtn = document.querySelector('.project_cancel');
const projectToggleBtn = document.querySelector('.project_toggle');
const taskForm = document.querySelector('.task_form');
const addTask = document.querySelector('.add_task');
const taskCancelBtn = document.querySelector('.task_cancel');
const todoListTrash = document.querySelector('.todoList_trash');
const todoLists = document.querySelector('.todoLists');

class TodoList {
	constructor() {
		this.todos = [];
	}

	addTodo(title, description, priority, dueDate) {
		this.todos.push({ title, description, priority, dueDate });
	}

	removeTodo(task) {
		this.todos = this.todos.filter((todo) => todo !== task);
	}

	getList() {
		return this.todos;
	}
}

const todoList = new TodoList();

projectEditBtn.addEventListener('click', (e) => {
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

	addTodo();
	createTask();

	taskCancelFunc();
});

taskCancelBtn.addEventListener('click', (e) => {
	taskCancelFunc();
});

todoLists.addEventListener('click', (e) => {
	if (e.target.classList.contains('todoList_trash')) {
		const item = e.target.parentElement.parentElement;
		todoLists.removeChild(item);
	}
});

function createTask() {
	const tasks = document.querySelector('.tasks');
	const taskDiv = document.createElement('div');
	const titleAndDescriptionDiv = document.createElement('div');
	const titlePara = document.createElement('p');
	const descriptionPara = document.createElement('p');
	const dueDateDiv = document.createElement('div');
	const dueDatePara = document.createElement('p');
	const priorityDiv = document.createElement('div');
	const priorityPara = document.createElement('p');
	const taskIcons = document.createElement('div');
	const editBtn = document.createElement('img');
	const trashBtn = document.createElement('img');

	titlePara.classList.add('title');
	descriptionPara.classList.add('description');
	titleAndDescriptionDiv.appendChild(titlePara);
	titleAndDescriptionDiv.appendChild(descriptionPara);

	taskDiv.classList.add('task');
	taskDiv.appendChild(titleAndDescriptionDiv);
	tasks.appendChild(taskDiv);

	dueDateDiv.appendChild(dueDatePara);
	taskDiv.appendChild(dueDateDiv);

	priorityDiv.appendChild(priorityPara);
	taskDiv.appendChild(priorityDiv);

	taskIcons.classList.add('task_icons');
	editBtn.src = './imgs/edit.png';
	trashBtn.src = './imgs/trash.png';

	taskIcons.appendChild(editBtn);
	taskIcons.appendChild(trashBtn);

	taskDiv.appendChild(taskIcons);

	todoList.todos.forEach((todo) => {
		titlePara.textContent = `${todo.title}`;
		descriptionPara.textContent = `${todo.description}`;
		dueDatePara.textContent = `${todo.dueDate}`;
		priorityPara.textContent = `${todo.priority}`;
	});
}

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
	todoImageEdit.classList.add('todoList_edit');
	todoImageTrash.classList.add('todoList_trash');
	todoListImages.classList.add('todoList_imgs');
	todoListImages.appendChild(todoImageEdit);
	todoListImages.appendChild(todoImageTrash);
	todoListPara.textContent = project;
	todoListPara.classList.add('todoProjectName');
	todoList.appendChild(todoImageList);
	todoList.appendChild(todoListPara);
	todoList.appendChild(todoListImages);
	todoLists.appendChild(todoList);

	projectCancelFunc();
}

function projectCancelFunc() {
	projectForm.reset();
	projectForm.classList.add('hidden');
}

function taskCancelFunc() {
	taskForm.reset();
	taskForm.classList.add('hidden');
}

function addTodo() {
	let title = document.querySelector('#title').value;
	let description = document.querySelector('#description').value;
	let priority = document.querySelector('#priority').value;
	let dueDate = document.querySelector('#date').valueAsDate;

	todoList.addTodo(title, description, priority, dueDate);
}