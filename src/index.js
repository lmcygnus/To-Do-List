import "./style.css";
import { projects,  createNewProject} from "./projects";
import { ToDo, createNewToDo, todayDate } from "./toDo";

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

newTodo.onclick = () => {
  dialog.show();
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

projectForm.addEventListener("submit", (e) => {
  createNewProject(projectImput, ul, e);
  projectForm.reset();
  projectDialog.close();
})

//toggleButton.addEventListener('click', function () {
  //sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
//});

dialog.addEventListener("show", todayDate);

document.getElementById("createTask").addEventListener("submit", (e) => {
  createNewToDo(titleImput, descriptionImput, dueDateImput, priorityImput, e, mainContent)});