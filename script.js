const addProject = document.querySelector('.add-project');
const projectFormDiv = document.querySelector('.project-form');
const projectForm = document.querySelector('.project_form');
const projectDeleteBtn = document.querySelector('.project-delete');
const addTask = document.querySelector('.task-plus');
const addTaskForm = document.querySelector('.task-form');

class TodoList {
	constructor(projectName, description, dueDate, priority) {
		this.projectName = projectName;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.id = crypto.randomUUID();
	}
}

addProject.addEventListener('click', () => {
	addProject.classList.add('hidden');
	projectFormDiv.classList.remove('hidden');
});

// create project
projectForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let projectName = document.getElementById('project_name');

	if (projectName.value === '') {
		alert('Please enter your project name');
	} else {
		const projectItems = document.querySelector('.project-items');
		const project = document.createElement('div');
		const projectPara = document.createElement('p');
		const projectDelete = document.createElement('p');

		projectPara.innerHTML = projectName.value;
		projectDelete.innerHTML = 'x';
		projectDelete.classList.add('project-delete');
		project.appendChild(projectPara);
		project.appendChild(projectDelete);
		project.classList.add('project');
		projectItems.appendChild(project);
	}
	projectName.value = '';
});

addTask.addEventListener('click', (e) => {
	addTaskForm.classList.remove('hidden');
});

// delete project
// Already tried↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

// projectDeleteBtn.addEventListener('click', (e) => {
//     const project = document.querySelector('.project');
//     project.parentNode.removeChild(project)
// })

// projectDeleteBtn.addEventListener('click', (e) => {
//     const project = document.querySelector('.project');
//     project.remove();
// })

// projectDeleteBtn.addEventListener('click', (e) => {
// 	const projectItems = document.querySelector('.project-items');
// 	const project = document.querySelector('.project');
// 	projectItems.removeChild(project);
// })
