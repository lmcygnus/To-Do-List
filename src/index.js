import "./style.css";
import "./checkbox.css"
import {createNewProject, addNewTasks} from "./projects";
import {createNewToDo, todayDate } from "./toDo";

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
}

document.addEventListener("DOMContentLoaded", (e) => {
  createNewProject(newProjectBt, ul, e);
})

projectForm.addEventListener("submit", (e) => {
  createNewProject(projectImput, ul, e);
  currentProject = projectImput.value;
  document.getElementById(`${projectImput.value}project`).focus();
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

/*const proyectos = document.querySelectorAll(".projectLi");
proyectos.forEach((project) => {
  console.log(project.textContent);
  project.addEventListener("click", function() {
    addNewTasks(mainContent, project);
  });
});*/


  
