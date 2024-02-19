import "./style.css";
import { projects,  createNewProject} from "./projects";

const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar")
const dialog = document.querySelector("#newTodoDialog");;
const newTodo = document.querySelector("#newToDo");
const closeBt = document.querySelector(".close");
const newProjectBt = document.querySelector("#newProject");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const projectForm = document.querySelector("#Project");
const toggleButton = document.querySelector(".burger");


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
})

toggleButton.addEventListener('click', function () {
  sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
  
});