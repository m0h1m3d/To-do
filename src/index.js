import Dom from "./js/dom";
import Display from "./js/display";
import task from "./js/task";
const taskBtn = document.querySelector('.modal-task-add-btn');
const viewBtn = document.querySelector('.viewBtn');
const container = document.querySelector('.display');


Dom.init();

taskBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    task.addTask();
    Display.renderPreview();
});

container.addEventListener('click', (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('viewBtn')){
        Display.renderTask();
    }
});