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
    console.log(libutton.id);
}

const createNewProject = (imput, parent, e) => {
    e.preventDefault();
    const newProject = new projects (
        imput.value,
    );
    newProjectDOM(imput, parent);
    //setData(`${imput.value} project`, newProject);
};

const addNewTasks = (mainContent, imput) => {
    
    const projectTitle = document.createElement("div");
    projectTitle.textContent = imput.value;
    projectTitle.classList.add("projectTitle");
    const newTodoDialog = document.createElement("dialog");
    newTodoDialog.id = "newTodoDialog";

    const createTaskForm = document.createElement("form");
    createTaskForm.action = "submit";
    createTaskForm.id = "createTask";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.required = true;
    titleInput.placeholder = "Name";

    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.name = "description";
    descriptionTextarea.id = "description";
    descriptionTextarea.cols = "20";
    descriptionTextarea.rows = "2";
    descriptionTextarea.placeholder = "Description";

    const dateLabel = document.createElement("label");
    dateLabel.for = "date";
    dateLabel.textContent = "Due Date:";

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.required = true;

    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Add";

    const cancelButton = document.createElement("button");
    cancelButton.id = "close";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";

    createTaskForm.appendChild(titleInput);
    createTaskForm.appendChild(descriptionTextarea);
    createTaskForm.appendChild(document.createElement("br"));
    createTaskForm.appendChild(dateLabel);
    createTaskForm.appendChild(dateInput);
    createTaskForm.appendChild(document.createElement("br"));
    createTaskForm.appendChild(addButton);
    createTaskForm.appendChild(cancelButton);
    newTodoDialog.appendChild(createTaskForm);
    mainContent.appendChild(newTodoDialog);
}
    
export {projects, createNewProject, addNewTasks};

