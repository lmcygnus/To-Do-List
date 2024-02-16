import './style.css';
// import { projects, ToDo, createNewProject, createNewToDo } from './toDo';

const body = document.querySelector("body");

const createDisplayDivision = (parent) => {
    const sidebar = document.createElement("div");
    const mainContent = document.createElement("div");

    sidebar.classList.add("sidebar");
    mainContent.classList.add("mainContent");

    sidebar.textContent = "Contenido de la barra lateral";
    mainContent.textContent = "Contenido principal";

    parent.appendChild(sidebar);
    parent.appendChild(mainContent);
}

createDisplayDivision(body);