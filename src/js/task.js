class Task {
  constructor() {
    this.title = document.querySelector('.title-task');
    this.description = document.querySelector('.description-task');
    this.date = document.querySelector('.date-task');
    this.tasks = [];
    this.priority = null;
    this.completed = false;
  }

  generateId() {
    return Date.now();
  }

  addTask() {
    const id = this.generateId();
    const task = {
      id: id,
      title: this.title.value,
      description: this.description.value,
      date: this.date.value,
      priority: this.priority,
      completed: this.completed,
    };
    this.tasks.push(task);
    this.resetValues();
    return task;
  }

  removeTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== parseInt(id));
  }

  setPriority(value) {
    this.priority = value;
  }

  getAllTasks(){
    return this.tasks;
  }

  getTaskMarkup(task) {
    return `
      <div class="task task-style" data-id="${task.id}">
        <button class="red close-task">X</button>
        <p>Title: ${task.title}</p>
        <p>Description: ${task.description}</p>
        <p>Due-Date: ${task.date}</p>
        <p class ="${
          task.priority === 'highPr' ? 'red' :
          task.priority === 'moderatePr' ? 'blue' :
          task.priority === 'lowPr' ? 'green' : ''
        }">Priority: ${task.priority}</p>
        <p>Completed: ${task.completed === true? 'Yes 😁':'No ☹'}</p>
      </div>`;
  }

  getPreviewMarkup(task) {
    return `
      <div class="preview" data-id="${task.id}">
        <div class="info">
          <div class="priority ${task.priority}"></div>
          <div class="checkBox" data-id="${task.id}"></div>
          <p class="title-preview">${task.title}</p>
        </div>
        <div class="info-btns">
          <p class="due-Date-preview">${task.date}</p>
          <button class="viewBtn" data-id="${task.id}">View</button>
          <button class="delete task-del" data-id="${task.id}">Delete</button>
        </div>
      </div>`;
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id === parseInt(id));
  }

  resetValues(){
    this.title.value = ''; 
    this.description.value = '';
    this.date.value = '';
  }
}

export default new Task();