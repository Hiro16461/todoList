const projectEditBtn = document.querySelector('.project_edit');
const projectForm = document.querySelector('#project_form')

projectEditBtn.addEventListener('click', e => {
    e.preventDefault();
    projectForm.classList.toggle('hidden');
})