import Task from './task';

class Display {
  addTaskBtn = document.querySelector('.add-task');
  addProjectBtn = document.querySelector('.add-project');
  modalTask = document.querySelector('.modal-task');
  overlay = document.querySelector('.overlay');
  container = document.querySelector('.display');

  renderPreview() {

    const markup = Task.getPreviewMarkup();
    if (!markup) return;

    this.modalTask.classList.add('hidden');
    this.overlay.classList.add('hidden');
    this.addProjectBtn.style.transform = '';
    this.addTaskBtn.style.transform = '';
    this.addTaskBtn.classList.remove('show');
    this.addProjectBtn.classList.remove('show');

    this.container.insertAdjacentHTML('beforeend', markup);
  }

  renderTask() {
    const markup = Task.getTaskMarkup();
    if (!markup) return;

    this.container.insertAdjacentHTML('beforeend', markup);
  }
}

export default new Display();
