import { setData,lookData } from "./localStorage";
import { currentProject } from "./projects";

class ToDo {
    constructor(title, description, dueDate, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
    };
};

const seeDetails = (parent) => {
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("Details");

    const title = document.createElement("div");
    title.classList.add("detailsTitle");

    const description = document.createElement("div");
    description.classList.add("descriptionDetails");
    
    const dueDate = document.createElement("div");
    dueDate.classList.add("duedateDescription");

    detailsDiv.appendChild(title);
    detailsDiv.appendChild(description);
    detailsDiv.appendChild(dueDate);
    parent.appendChild(detailsDiv);
};

let numberForId = 0;
let toDoArray = lookData("tasks") || [];

const newTodoDOM = (titleImput, descriptionImput, dateInput,  parent) => {
    numberForId ++;

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todoContainer");

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', `${numberForId}cbtest-19`);
    checkbox.setAttribute('type', 'checkbox');

    const taskName = document.createElement('div');
    taskName.textContent = titleImput;

    checkbox.addEventListener("change", () => {
        taskDone(checkbox, taskName);
    })

    const label = document.createElement('label');
    label.classList.add('check-box');
    label.setAttribute('for', `${numberForId}cbtest-19`);

    const seeDetailsbt = document.createElement("button");
    seeDetailsbt.classList.add("seeDetails");
    seeDetailsbt.textContent = "▼";

    seeDetailsbt.addEventListener("click", (event) => {
        const toDoDiv = event.currentTarget.closest('.taskDiv');
        const descriptionDiv = toDoDiv.querySelector(".descriptionDetails");
        const dateDiv = toDoDiv.querySelector(".duedateDescription");

        descriptionDiv.textContent = `Description: ${descriptionImput}`;
        dateDiv.textContent = `Due Date: ${dateInput}`;

        const detailsContainer = toDoDiv.querySelector('.Details');
        detailsContainer.style.display = (detailsContainer.style.display === 'none' || detailsContainer.style.display === '') ? 'block' : 'none';
    });
    
    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    todoContainer.appendChild(checkboxWrapper);
    todoContainer.appendChild(taskName);
    todoContainer.appendChild(seeDetailsbt);
    toDoDiv.appendChild(todoContainer);
    seeDetails(toDoDiv);

    parent.appendChild(toDoDiv);
};

const createNewToDo = (titleImput, descriptionImput, dueDateImput, currentProject, e, parent) => {
    e.preventDefault();
    const newToDo = new ToDo(
        titleImput.value,
        descriptionImput.value,
        dueDateImput.value,
        currentProject,
    );
    newTodoDOM(titleImput.value, descriptionImput.value, dueDateImput.value,  parent);
    toDoArray.push(newToDo);
    setData(`tasks`, toDoArray);
};

const todayDate = () => {
    let currentDate = new Date().toISOString().split('T')[0];
    document.querySelector('.date').value = currentDate;
};

const closeDialogs = (dialogs, forms) => {
    forms.reset();
    dialogs.close();
  }

const taskDone = (myCheckbox, taskText) => {
    if (myCheckbox.checked) {
        taskText.style.textDecoration = "line-through"
        taskText.style.color = "gray";
    } else {
        taskText.style.textDecoration = "none";
        taskText.style.color = "rgb(0, 65, 119)";
    }
};

const addNewTasks = (mainContent) => {
    const newTodoDialog = document.createElement("dialog");
    newTodoDialog.classList.add("newTodoDialog");
    newTodoDialog.style.width = "210px";
    newTodoDialog.open = true;
  
    const createTaskForm = document.createElement("form");
    createTaskForm.action = "submit";
    createTaskForm.classList.add("createTask");

    createTaskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createNewToDo(titleInput, descriptionTextarea, dateInput, currentProject, e, mainContent);
        closeDialogs(newTodoDialog, createTaskForm);
    });
  
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
    dateLabel.textContent = "Due Date:";
  
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("date");
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

export {ToDo, createNewToDo, newTodoDOM, todayDate, taskDone, closeDialogs, toDoArray, addNewTasks};