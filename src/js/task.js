class Task {
  title = document.querySelector('.title-task');
  description = document.querySelector('.description-task');
  date = document.querySelector('.date-task');
  tasks = [];
  priority;

  addTask(){
    this.tasks.push({
      title: this.title.value,
      description: this.description.value,
      date: this.date.value,
      priority: this.priority
    });
    console.log(this.tasks);
  }

  getPriority(value){
    this.priority = value;
  }

  getTaskMarkup() {
    if (!this.title.value || !this.date.value || !this.description.value)
      return false;

    const taskMarkup = `
    <div class="task" data-index="1">
        <p>Title: ${this.title.value}</p>
        <p>Description: ${this.description.value}</p>
        <p>Due-Date: ${this.date.value}</p>
        <p>Priority: ${this.priority}</p>
    </div>`;

    return taskMarkup;
  }

  getPreviewMarkup() {
    if (!this.title.value || !this.date.value) return false;
    const previewMarkup = `
        <div class="preview">
        <div class="info">
            <div class="priority ${this.priority}"></div>
            <div class="checkBox"></div>
            <p class="title-preview">${this.title.value}</p>
        </div>
        <div class="info-btns">
            <p class="due-Date-preview">${this.date.value}</p>
            <button class="viewBtn">View</button>
            <button class="delete">Delete</button>
        </div>
    </div>`;
    return previewMarkup;
  }
}

export default new Task();
