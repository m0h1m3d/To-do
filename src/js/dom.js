import Task from "./task";
class Dom {
  init() {
    const overlay = document.querySelector('.overlay');
    const modalTask = document.querySelector('.modal-task');
    const modalProject = document.querySelector('.modal-project');
    const addTaskBtn = document.querySelector('.add-task');
    const addProjectkBtn = document.querySelector('.add-project');
    const displayAddBtn = document.querySelector('.display-add-btn');

    displayAddBtn.addEventListener('click', () => {
      addTaskBtn.classList.add('show');
      addProjectkBtn.classList.add('show');
    });

    modalTask.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.btn').forEach((b) => {
          b.style.opacity = '0.5';
        });
        e.target.style.opacity = '1';
      }

      if(e.target.classList.contains("btn")){
        Task.getPriority(e.target.dataset.priority);
      }
    });

    addTaskBtn.addEventListener('click', () => {
      overlay.classList.remove('hidden');
      modalTask.classList.remove('hidden');
      modalProject.classList.add('hidden');
      addTaskBtn.style.transform = 'translateY(-15px)';
      addProjectkBtn.style.transform = '';
    });

    addProjectkBtn.addEventListener('click', () => {
      overlay.classList.remove('hidden');
      modalProject.classList.remove('hidden');
      modalTask.classList.add('hidden');
      addProjectkBtn.style.transform = 'translateY(-15px)';
      addTaskBtn.style.transform = '';
    });

    displayAddBtn.addEventListener('click', () => {
      overlay.classList.remove('hidden');
      displayAddBtn.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        displayAddBtn.style.transform = '';
      }, 200);
    });

    overlay.addEventListener('click', () => {
      modalProject.classList.add('hidden');
      modalTask.classList.add('hidden');
      overlay.classList.add('hidden');
      addTaskBtn.classList.remove('show');
      addProjectkBtn.classList.remove('show');

      addProjectkBtn.style.transform = '';
      addTaskBtn.style.transform = '';
    });
  }
}

export default new Dom();