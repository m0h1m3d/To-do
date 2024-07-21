import Task from './task';
import Project from './project';
import Dom from './dom';
import project from './project';

class Display {
  constructor() {
    this.addTaskBtn = document.querySelector('.add-task');
    this.addProjectBtn = document.querySelector('.add-project');
    this.modalTask = document.querySelector('.modal-task');
    this.modalProject = document.querySelector('.modal-project');
    this.overlay = document.querySelector('.overlay');
    this.taskContainer = document.querySelector('.display');
    this.projectDisplay = document.querySelector('.display');
    this.projectContainer = document.querySelector('.project-list');
    this.mainContainer = document.querySelector('.main-container')
  }

  renderAllTasks(){
    const tasks = Task.getAllTasks();
    tasks.forEach(task => {
      this.renderTaskPreview(task);
    })
  }

  renderTaskPreview(task) {
    const markup = Task.getPreviewMarkup(task);
    if (!markup) return;

    this.hideModals();

    this.taskContainer.insertAdjacentHTML('beforeend', markup);
  }

  renderProjectPreview(project) {
    const markup = Project.getPreviewMarkup(project);
    if (!markup) return;

    this.hideModals();

    this.projectContainer.insertAdjacentHTML('beforeend', markup);
  }

  renderTask(task) {
    const taskMarkup = Task.getTaskMarkup(task);
    if (!taskMarkup) return;

    this.mainContainer.insertAdjacentHTML('beforeend', taskMarkup);
  }

  renderProject(project) {
    this.projectDisplay.innerHTML = '';
    const projectMarkup = Project.getProjectMarkup(project);
    if (!projectMarkup) return;

    this.projectDisplay.insertAdjacentHTML('beforeend', projectMarkup);
  }

  renderProjectTaskPreview(task){
    const markup = Project.getProjectTaskPreviewMarkup(task);
    if (!markup) return;

    this.hideModals();

    this.projectTaskDisplay = document.querySelector('.project');
    this.projectTaskDisplay.insertAdjacentHTML('beforeend', markup);
  }

  renderProjectTask(task){
    const taskMarkup = Project.getTaskMarkup(task);
    if(!taskMarkup) return;

    this.mainContainer.insertAdjacentHTML('beforeend', taskMarkup);
    Dom.showOverlay();
  }

  hideModals() {
    this.modalTask.classList.add('hidden');
    this.modalProject.classList.add('hidden');
    this.overlay.classList.add('hidden');
    this.addProjectBtn.style.transform = '';
    this.addTaskBtn.style.transform = '';
    this.addTaskBtn.classList.remove('show');
    this.addProjectBtn.classList.remove('show');
  }

  handleTaskViewButtonClick(event) {
    const id = event.target.dataset.id;
    const task = Task.getTaskById(id);
    this.renderTask(task);
    Dom.showOverlay();
  }

  handleProjectTaskViewButtonClick(event){
    const id = event.target.dataset.id;
    const task = Project.getTaskById(id);

    this.renderProjectTask(task);
  }

  handleTaskDeleteButtonClick(event) {
    const id = event.target.dataset.id;
    Task.removeTask(id);

    const taskElement = document.querySelector(`.preview[data-id="${id}"]`);
    if (taskElement) {
      taskElement.remove();
    }
  }

  handleProjectAddTaskButtonClick(e) {
    Dom.showProjectTaskModal();
  }

  handleProjectDeleteButtonClick(event) {
    const id = event.target.dataset.id;
    Project.removeProject(id);

    const projectElement = document.querySelector(`.project[data-id="${id}"]`);
    if (projectElement) {
      projectElement.remove();
    };

    const projectItem = document.querySelector(`.project-btn[data-id="${id}"]`);
    if(projectItem){
      projectItem.remove();
    }
  }

  handleProjectTaskDeleteButtonClick(e){
    const id = e.target.dataset.id;
    Project.removeTask(id);

    const taskElement = document.querySelector(`.preview[data-id="${id}"]`);
    if (taskElement) {
      taskElement.remove();
    }
  };

  handlecheckBoxButtonClick(e){
    const id = e.target.dataset.id;
    if(Task.tasks.some(task=>task.id === parseInt(id))){
      const task = Task.getTaskById(id);
      task.completed = true;
    }else{
      const task = Project.getTaskById(id);
      task.completed = true;
    }
  };

  handlecheckBoxButtonRemove(e){
    const id = e.target.dataset.id;
    if(Task.tasks.some(task=>task.id === parseInt(id))){
      const task = Task.getTaskById(id);
      task.completed = false;
    }else{
      const task = Project.getTaskById(id);
      task.completed = false;
    }
  };
  
}

export default new Display();