import "./style.css";
// import { projects, ToDo, createNewProject, createNewToDo } from './toDo';

const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const newTodo = document.querySelector("#newToDo");
const closeBt = document.querySelector(".close");

newTodo.onclick = () => {
  dialog.show();
}

closeBt.onclick = () => {
  dialog.close();
}
