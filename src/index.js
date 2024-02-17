import "./style.css";
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
};

createDisplayDivision(body);

const createSidebarContent = (parent) => {
  const title = document.createElement("h1");
  title.textContent = "To Do List";
  parent.appendChild(title);

  const today = document.createElement("h4");
  today.textContent = "Today";
  parent.appendChild(today);

  const projects = document.createElement("h3");
  projects.textContent = "Projects";
  parent.appendChild(projects);
};

const sidebar = document.querySelector(".sidebar");
createSidebarContent(sidebar);
