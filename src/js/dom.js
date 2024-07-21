import Task from "./task";
import Display from "./display";
import Project from "./project";

class Dom {
  constructor() {
    this.overlay = document.querySelector('.overlay');
    this.modalTask = document.querySelector('.modal-task');
    this.modalProject = document.querySelector('.modal-project');
    this.modalProjectTask = document.querySelector('.modal-project-task');
    this.addTaskBtn = document.querySelector('.add-task');
    this.addProjectBtn = document.querySelector('.add-project');
    this.displayAddBtn = document.querySelector('.display-add-btn');
    this.mainContainer = document.querySelector('.main-container');
    this.display = document.querySelector('.display');
    this.checkBox = document.querySelector('.checkBox');
  }

  init() {
    this.mainContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('display-add-btn')) {
        this.overlay.classList.remove('hidden');
        this.displayAddBtn.style.transform = 'scale(1.5)';
        setTimeout(() => {
          this.displayAddBtn.style.transform = '';
        }, 200);

        this.addTaskBtn.classList.add('show');
        this.addProjectBtn.classList.add('show');
      }

      if(e.target.classList.contains('task-btn')){
        this.resetDisplay();
        Display.renderAllTasks();
      }

      if (e.target.classList.contains('add-task')) {
        this.showTaskModal();
      }

      if (e.target.classList.contains('add-project')) {
        this.showProjectModal();
      }

      if (e.target.classList.contains('close-task')) {
        e.target.closest('.task').classList.add('hidden');
        this.overlay.classList.add('hidden');
      }

      if (e.target.classList.contains('viewBtn')) {
        Display.handleTaskViewButtonClick(e);
      }

      if (e.target.classList.contains('viewBtnPr')) {
        Display.handleProjectTaskViewButtonClick(e);
      }

      if (e.target.classList.contains('task-del')) {
        Display.handleTaskDeleteButtonClick(e);
      }

      if (e.target.classList.contains('deletePr')) {
        Display.handleProjectTaskDeleteButtonClick(e);
      }

      if (e.target.classList.contains('add-project-task')) {
        Display.handleProjectAddTaskButtonClick(e);
      }

      if (e.target.classList.contains('project-del')) {
        Display.handleProjectDeleteButtonClick(e);
      }

      if (e.target.classList.contains('checkBox')) {
        if(e.target.style.backgroundColor === 'lightgreen'){
          e.target.style.backgroundColor ='';
          e.target.closest('.info').querySelector('.title-preview').style.textDecoration = '';
          Display.handlecheckBoxButtonRemove(e);
        }else{
          e.target.style.backgroundColor = 'lightgreen';
          e.target.closest('.info').querySelector('.title-preview').style.textDecoration = 'line-through';
          Display.handlecheckBoxButtonClick(e);
        }
      }
    });

    this.modalTask.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.btn').forEach((b) => {
          b.style.opacity = '0.5';
        });
        e.target.style.opacity = '1';
      }
      

      if (e.target.classList.contains("btn")) {
        Task.setPriority(e.target.dataset.priority);
      }
    });

    this.modalProjectTask.addEventListener('click', (e) => {
      e.preventDefault();

      if (e.target.tagName === 'BUTTON') {
        document.querySelectorAll('.btn').forEach((b) => {
          b.style.opacity = '0.5';
        });
        e.target.style.opacity = '1';
      }
      

      if (e.target.classList.contains("btn")) {
        Project.setPriority(e.target.dataset.priority);
      }
    });
    

    this.overlay.addEventListener('click', () => {
      this.modalProject.classList.add('hidden');
      this.modalTask.classList.add('hidden');
      this.modalProjectTask.classList.add('hidden');
      this.overlay.classList.add('hidden');
      this.addTaskBtn.classList.remove('show');
      this.addProjectBtn.classList.remove('show');

      this.addProjectBtn.style.transform = '';
      this.addTaskBtn.style.transform = '';
    });
  }

  showTaskModal() {
    this.modalTask.classList.remove('hidden');
    this.modalProjectTask.classList.add('hidden');
    this.modalProject.classList.add('hidden');
    this.addTaskBtn.style.transform = 'translateY(-15px)';
    this.addProjectBtn.style.transform = '';
  }

  showProjectModal() {
    this.overlay.classList.remove('hidden');
    this.modalProject.classList.remove('hidden');
    this.modalTask.classList.add('hidden');
    this.addProjectBtn.style.transform = 'translateY(-15px)';
    this.addTaskBtn.style.transform = '';
  }

  showProjectTaskModal() {
    this.modalProjectTask.classList.remove('hidden');
    this.overlay.classList.remove('hidden');
    this.modalProject.classList.add('hidden');
    this.modalTask.classList.add('hidden');
  }

  hideProjectTaskModal() {
    this.modalProjectTask.classList.add('hidden');
    this.overlay.classList.add('hidden');
  }

  showOverlay(){
    this.overlay.classList.remove('hidden');
  }

  resetDisplay(){
    this.display.innerHTML = '';
  }
}

export default new Dom();