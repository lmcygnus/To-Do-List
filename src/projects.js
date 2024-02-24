import { setData, lookData } from "./localStorage";
import { currentProject } from ".";
import { createNewToDo, todayDate, closeDialogs } from "./toDo";

class projects {
    constructor(project){
        this.project = project;
    };
};

let projectsArray = [];

const newProjectDOM = (imput, parent) => {
    const newProjectLi = document.createElement("li");

    const libutton = document.createElement("button");
    libutton.textContent = `${imput.value}`;
    libutton.setAttribute("id", `${imput.value}project`);
    libutton.classList.add("projectLi");

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "🗑️";
    deleteProject.classList.add("deleteProject");

    newProjectLi.appendChild(libutton);
    newProjectLi.appendChild(deleteProject);
    parent.appendChild(newProjectLi);
}

const createNewProject = (imput, parent, e) => {
    e.preventDefault();
    const newProject = new projects (
        imput.value,
    );
    newProjectDOM(imput, parent);
    projectsArray.push(newProject);
    setData(`${imput.value} project`, projectsArray);
};

const addNewTasks = (mainContent) => {
    const newTodoDialog = document.createElement("dialog");
    newTodoDialog.classList.add("newTodoDialog");
    newTodoDialog.style.width = "210px";
    newTodoDialog.open = true;
  
    const createTaskForm = document.createElement("form");
    createTaskForm.action = "submit";
    createTaskForm.classList.add("createTask");
  
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.classList.add("title");
    titleInput.required = true;
    titleInput.placeholder = "Nombre";
  
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.name = "descripción";
    descriptionTextarea.classList.add("description");
    descriptionTextarea.cols = "20";
    descriptionTextarea.rows = "2";
    descriptionTextarea.placeholder = "Descripción";
  
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Fecha de vencimiento:";
  
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("date");
    dateInput.required = true;
  
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Agregar";
    addButton.addEventListener("click", (e) => {
        createNewToDo(titleInput, descriptionTextarea, dateInput, currentProject, e, mainContent);
        closeDialogs(newTodoDialog, createTaskForm);
    });
  
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cerrar");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancelar";
  
    dateLabel.appendChild(dateInput);
    createTaskForm.appendChild(titleInput);
    createTaskForm.appendChild(descriptionTextarea);
    createTaskForm.appendChild(document.createElement("br"));
    createTaskForm.appendChild(dateLabel);
    createTaskForm.appendChild(document.createElement("br"));
    createTaskForm.appendChild(addButton);
    createTaskForm.appendChild(cancelButton);
  
    newTodoDialog.appendChild(createTaskForm);
    mainContent.appendChild(newTodoDialog);
  };  

const deleteElements = (mainContent) => {
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

const projectAddTask = (mainContent, input) => {
    deleteElements(mainContent);

    const projectTitle = document.createElement("div");
    projectTitle.textContent = `${input.value}`;
    projectTitle.classList.add("projectTitle");

    const addTask = document.createElement("button");
    addTask.classList.add("newToDo");
    addTask.textContent= "+Add Task";

    mainContent.appendChild(projectTitle);
    mainContent.appendChild(addTask);
    addTask.addEventListener("click", () => {
        addNewTasks(mainContent);
        todayDate();
    });
}
    
export {projects, createNewProject, addNewTasks, projectAddTask};

