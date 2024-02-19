import "./style.css";
import { projects,  createNewProject} from "./projects";

const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar")
const dialog = document.querySelector("dialog");
const newTodo = document.querySelector("#newToDo");
const closeBt = document.querySelector(".close");
const newProjectBt = document.querySelector("#newProject");
const accept = document.querySelector(".accept");
const cancel = document.querySelector(".cancel");
const projectDialog = document.querySelector(".projectDialog");
const ul = document.querySelector("ul");
const projectImput = document.querySelector("#NewProjectImput");
const storage = [];

newTodo.onclick = () => {
  dialog.show();
}

closeBt.onclick = () => {
  dialog.close();
}

newProjectBt.onclick = () => {
  projectDialog.show();
};
