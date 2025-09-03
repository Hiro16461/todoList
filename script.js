const projectEditBtn = document.querySelector('.project_edit');
const projectForm = document.querySelector('#project_form');

projectEditBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    projectForm.classList.toggle('hidden');
})

projectForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const project = projectForm[0].value;
    const todoLists = document.querySelector('.todoLists');
    const todoList = document.createElement('div');
    const todoListImages = document.createElement('div');
    const todoListPara = document.createElement('p');
    const todoImageList = document.createElement('img');
    const todoImageEdit = document.createElement('img');
    const todoImageTrash = document.createElement('img');
    

    todoList.classList.add('todoList');
    todoImageList.src = "./imgs/todolist.png"
    todoImageEdit.src = "./imgs/edit.png";
    todoImageTrash.src = "./imgs/trash.png";
    todoListImages.style.marginLeft = "50px";
    todoListImages.appendChild(todoImageEdit);
    todoListImages.appendChild(todoImageTrash);
    todoListPara.textContent = project
    todoList.appendChild(todoImageList);
    todoList.appendChild(todoListPara)
    todoList.appendChild(todoListImages)
    todoLists.appendChild(todoList);
    
    projectForm.reset();
    projectForm.classList.add('hidden');
})

const projectCancelBtn = document.querySelector('.project_cancel');
projectCancelBtn.addEventListener('click', e => {
    projectForm.reset();
    projectForm.classList.add('hidden');
})