const addProject = document.querySelector('.add-project');
const projectFormDiv = document.querySelector('.project-form');
const projectForm = document.querySelector('.project_form');
const projectDeleteBtn = document.querySelector('.project-delete');
const addTask = document.querySelector('.task-plus');
const addTaskForm = document.querySelector('.task-form');
const addTaskCancelButton = document.querySelector('.add-task-cancel');

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

addTaskCancelButton.addEventListener('click', (e) => {
	addTaskForm.classList.add('hidden');
});

addTaskForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let taskName = document.querySelector('#task_name').value;
	let taskDescription = document.querySelector('#task_description').value;
	let taskDate = document.querySelector('#task_date').value;
	let taskPriority = document.querySelector('#task_priority').value;

	const newTodoList = new TodoList(
		taskName,
		taskDescription,
		taskDate,
		taskPriority
	);

	const taskCheckBox = document.createElement('div');
	taskCheckBox.classList.add('task-checkBox');

	const taskCheck = document.createElement('input');
	taskCheck.type = 'checkbox';
	taskCheck.name = 'task-check';
	taskCheck.id = 'task-check';

	const taskPara = document.createElement('p');
	taskPara.textContent = `${newTodoList.projectName}`;
	taskPara.classList.add('strikethrough');

	taskCheckBox.appendChild(taskCheck);
	taskCheckBox.appendChild(taskPara);

	const taskCompleted = document.createElement('p');
	taskCompleted.textContent = 'x';
	taskCompleted.classList.add('task-completed');

	const tasksName = document.querySelector('.tasks-name');

	const task = document.createElement('div');
    task.classList.add('task');
    task.appendChild(taskCheckBox)
    task.appendChild(taskCompleted)
 
    tasksName.appendChild(task)

	const taskDetail = document.createElement('div');
    taskDetail.classList.add('task-detail');

    addTaskForm.reset();

	console.log(newTodoList);
    addTaskForm.classList.add('hidden');
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
