const addProject = document.querySelector('.add-project');
const projectFormDiv = document.querySelector('.project-form');
const projectForm = document.querySelector('.project_form');

class TodoList {
    constructor(projectName, description, dueDate, priority) {
        this.projectName = projectName;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority
    }
}


addProject.addEventListener('click', () => {
    addProject.classList.add("hidden")
    projectFormDiv.classList.remove("hidden")
})

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let projectName = document.getElementById('project_name');

    if (projectName.value === "") {
        alert('Please enter project name')
    } else {
        const projectItems = document.querySelector('.project-items');
        const project = document.createElement('div');
        const projectPara = document.createElement('p');
        const projectCompleted = document.createElement('p');
        
        projectPara.innerHTML = projectName.value
        projectCompleted.innerHTML = "x"
        project.appendChild(projectPara)
        project.appendChild(projectCompleted)
        project.classList.add('project');
        projectItems.appendChild(project)
    }
    projectName.value = ""
})