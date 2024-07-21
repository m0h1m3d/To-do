import Dom from "./js/dom";
import Display from "./js/display";
import Task from "./js/task";
import Project from "./js/project";
import '../src/style.css';
const container = document.querySelector('body');
const title = document.querySelector('.title-task');
const description = document.querySelector('.description-task');
const date = document.querySelector('.date-task');
const projectTitlePr = document.querySelector('.title-project');
const titlePr = document.querySelector('.title-Ptask');
const descriptionPr = document.querySelector('.description-Ptask');
const datePr = document.querySelector('.date-Ptask');


Dom.init();

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-task-add-btn')) {
    if (title.value == '' ||
      description.value == '' ||
      date.value == ''
    ) return;

    e.preventDefault();
    const newTask = Task.addTask();
    Display.renderTaskPreview(newTask);
  }

  if (e.target.classList.contains('modal-project-add-btn')) {
    if(projectTitlePr.value == '') return;

    e.preventDefault();
    const newProject = Project.addProject();
    Display.renderProjectPreview(newProject);
  }

  if (e.target.classList.contains('project-btn')) {
    e.preventDefault();

    const projectId = e.target.dataset.id;
    document.querySelector('.project-id').value = projectId;
    const project = Project.getProjectById(projectId);

    Dom.resetDisplay();
    Display.renderProject(project);
  }

  if (e.target.classList.contains('modal-project-task-add-btn')) {
    if (titlePr.value == '' ||
      descriptionPr.value == '' ||
      datePr.value == ''
    ) return;

    e.preventDefault();
    const projectId = document.querySelector('.project-id').value;
    const newTask = Project.addTask(projectId);

    Display.renderProjectTaskPreview(newTask);
    Dom.hideProjectTaskModal();
  }
});