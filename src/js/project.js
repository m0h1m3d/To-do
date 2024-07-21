class Project {
    constructor() {
        this.projectTitle = document.querySelector('.title-project');
        this.taskTitle = document.querySelector('.title-Ptask');
        this.description = document.querySelector('.description-Ptask');
        this.date = document.querySelector('.date-Ptask');
        this.priority = null;
        this.projects = [];
    }

    generateId() {
        return Date.now();
    }

    addProject() {
        const id = this.generateId();
        const project = {
            id: id,
            title: this.projectTitle.value,
            tasks: [],
        };
        this.projects.push(project);
        this.resetValues();
        return project;
    }

    removeProject(id) {
        this.projects = this.projects.filter(project => project.id !== parseInt(id));
    }

    addTask(projectId) {
        const id = this.generateId();
        const task = {
            id: id,
            title: this.taskTitle.value,
            description: this.description.value,
            date: this.date.value,
            priority: this.priority,
        };
        const project = this.getProjectById(projectId);
        project.tasks.push(task);
        this.resetValues();
        return task;
    }

    removeTask(id) {
        for (let project of this.projects) {
            project.tasks = project.tasks.filter(task => task.id !== parseInt(id));
        }
    }

    setPriority(value) {
        this.priority = value;
    }

    getPreviewMarkup(project) {
        return `
        <li class="project-item">
            <button class="project-btn" data-id="${project.id}">${project.title}</button>
        </li>
                `;
    }

    getProjectMarkup(project) {
        const tasksMarkup = project.tasks.map(task => this.getProjectTaskPreviewMarkup(task)).join('');
        return `
          <div class="project" data-id="${project.id}">
            <header class="project-header">
              <h1>${project.title}</h1>
              <button class="delete project-del" data-id="${project.id}">Delete</button>
              <button class="add-project-task" data-id="${project.id}">Add Task</button>
              </header>
              ${tasksMarkup}
          </div>
        `;
    }

    getProjectTaskPreviewMarkup(task) {
        return `
            <div class="preview" data-id="${task.id}">
                  <div class="info">
                     <div class="priority ${task.priority}"></div>
                        <div class="checkBox" data-id="${task.id}"></div>
                            <p class="title-preview">${task.title}</p>
                        </div>
                        <div class="info-btns">
                          <p class="due-Date-preview">${task.date}</p>
                          <button class="viewBtnPr" data-id="${task.id}">View</button>
                          <button class="deletePr" data-id="${task.id}">Delete</button>
                        </div> 
                </div>
            `
        }

    getTaskMarkup(task) {
        return `
            <div class="task task-style" data-id="${task.id}">
        <button class="red close-task">X</button>
        <p>Title: ${task.title}</p>
        <p>Description: ${task.description}</p>
        <p>Due-Date: ${task.date}</p>
        <p class ="${task.priority === 'highPr' ? 'red' :
                task.priority === 'moderatePr' ? 'blue' :
                    task.priority === 'lowPr' ? 'green' : ''
            }">Priority: ${task.priority}</p>
        <p>Completed: ${task.completed === true? 'Yes 😁':'No ☹'}</p>
      </div>
        `
    }

    getProjectById(id) {
        return this.projects.find(project => project.id === parseInt(id));
    }

    getTaskById(id) {
        for (let project of this.projects) {
            const task = project.tasks.find(task => task.id === parseInt(id));
            if (task) {
                return task
            }
        }
        return null;
    }

    resetValues() {
        this.projectTitle.value = '';
        this.taskTitle.value = '';
        this.description.value = '';
        this.date.value = '';
    }
}

export default new Project();