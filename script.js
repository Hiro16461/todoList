const projectEditBtn = document.querySelector('.project_edit');
const projectForm = document.querySelector('#project_form');
const projectCancelBtn = document.querySelector('.project_cancel');
const projectToggleBtn = document.querySelector('.project_toggle');

class Todo {
	constructor(id, projectName, todoName) {
		this.id = id;
		this.projectName = projectName;
		this.todoName = todoName;
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
