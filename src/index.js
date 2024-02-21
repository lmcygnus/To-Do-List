import "./style.css";
import "./checkbox.css"
import {createNewProject} from "./projects";
import {createNewToDo, todayDate } from "./toDo";

const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".mainContent");
const dialog = document.querySelector("#newTodoDialog");
const newTodo = document.querySelector("#newToDo");
const closeBt = document.querySelector("#close");
const toggleButton = document.querySelector(".burger");

//New Projects variables

const newProjectBt = document.querySelector("#newProject");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const projectForm = document.querySelector("#Project");

//New to do variables

const titleImput = document.querySelector("#title");
const descriptionImput = document.querySelector("#description");
const dueDateImput = document.querySelector("#date");
const priorityImput = document.querySelectorAll('input[type="radio"]');

//Checkboxes

const checkboxes = document.querySelectorAll('.task-list');
const toDoDiv = document.querySelector(".toDoDiv");

newTodo.onclick = () => {
  dialog.show();
  todayDate();
}

closeBt.onclick = () => {
  dialog.close();
}

newProjectBt.onclick = () => {
  projectDialog.show();
};

cancel.onclick = () => {
  projectDialog.close();
}

document.addEventListener("DOMContentLoaded", (e) => {
  createNewProject(newProjectBt, ul, e);
})

projectForm.addEventListener("submit", (e) => {
  createNewProject(projectImput, ul, e);
  projectForm.reset();
  projectDialog.close();
})

//toggleButton.addEventListener('click', function () {
  //sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
//});

document.getElementById("createTask").addEventListener("submit", (e) => {
  createNewToDo(titleImput, descriptionImput, dueDateImput, priorityImput, e, mainContent)});
  
checkboxes.forEach(function(checkbox,toDoDiv ) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      toDoDiv.classList.add('checked');
    } else {
    toDoDiv.classList.remove('checked');
    }
  });
});