import "./style.css";
import "./checkbox.css"
import {createNewProject, newProjectDOM, projectAddTask, projectsArray, recoverObjects} from "./projects";
import {createNewToDo, todayDate, taskDone } from "./toDo";
import { lookData } from "./localStorage";

const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".mainContent");
const dialog = document.querySelector(".newTodoDialog");
const newTodo = document.querySelector(".newToDo");
const closeBt = document.querySelector(".close");
const toggleButton = document.querySelector(".burger");

//New Projects variables

const newProjectBt = document.querySelector("#newProject");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const projectForm = document.querySelector("#Project");
let currentProject = "Default";
const acceptBt = document.querySelector(".accept");

//New to do variables

const taskForm = document.querySelector(".createTask")
const titleImput = document.querySelector(".title");
const descriptionImput = document.querySelector(".description");
const dueDateImput = document.querySelector(".date");


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
};

/*document.addEventListener("DOMContentLoaded", (event) => {
  const projectProperty = "project";
  recoverObjects(projectsArray, ul, newProjectDOM, projectProperty);
  const projectName = event.target.textContent;
  projectAddTask(mainContent, projectName);
}); */

projectForm.addEventListener("submit", (e) => {
  createNewProject(projectImput, ul, e);
  currentProject = projectImput.value;
  projectForm.reset();
  projectDialog.close();
});

//toggleButton.addEventListener('click', function () {
  //sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
//});

taskForm.addEventListener("submit", (e) => {
  createNewToDo(titleImput, descriptionImput, dueDateImput, currentProject, e, mainContent)
  dialog.close();
  taskForm.reset();
});

export { currentProject, mainContent}

  
