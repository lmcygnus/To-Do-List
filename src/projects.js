import { setData } from "./localStorage";

class projects {
    constructor(project){
        this.project = project;
    }  
}

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
    //setData(`${imput.value} project`, newProject);
};

const addNewTasks = (mainContent) => {
  
    const newTodoDialog = document.createElement("div");
    newTodoDialog.classList.add("newTodoDialog");
  
    const createTaskForm = document.createElement("form");
    createTaskForm.action = "enviar";
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
    dateInput.classList.add("fecha");
    dateInput.required = true;
  
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Agregar";
  
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

const projectAddTask = (mainContent, input) => {
    const projectTitle = document.createElement("div");
    projectTitle.textContent = input.textContent;
    projectTitle.classList.add("projectTitle");

    const addTask = document.createElement("button");
    addTask.classList.add("newToDo");
    addTask.addEventListener("click", addNewTasks(mainContent));
}
    
export {projects, createNewProject, addNewTasks, projectAddTask};

