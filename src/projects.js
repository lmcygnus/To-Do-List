import { setData, lookData } from "./localStorage";
import { currentProject, mainContent } from ".";
import { createNewToDo, newTodoDOM, todayDate, closeDialogs, toDoArray, addNewTasks } from "./toDo";

class projects {
    constructor(project){
        this.project = project;
    };
};

const deleteElements = (mainContent) => {
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.firstChild);
    }
}

let projectsArray = lookData("projects") || [];

const filterTasks = (array, currentProject) => {
    return array.filter(function(object) {
        return object.project === currentProject;
    });
};

const deleteTasks = () => {
    const taskstoDelete = Array.from(document.querySelectorAll(".taskDiv"));
    taskstoDelete.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
};

const recoverObjects = (array, parent, functions, propertyName) => {
    array.forEach(element => {
        functions(element[propertyName], parent, propertyName);
    });
};

const newProjectDOM = (input, parent, propertyName) => {
    const newProjectLi = document.createElement("li");

    const libutton = document.createElement("button");
    libutton.textContent = input[propertyName];
    libutton.classList.add("projectLi");

    const newPropertyName = "title"; 

    libutton.addEventListener("click",  (event) => {
        let currentProject = event.target.textContent;
        let filteredTasks = filterTasks(toDoArray, currentProject);
        deleteTasks();
        recoverObjects(filteredTasks, mainContent, newTodoDOM, newPropertyName);
        const projectTitleDiv = document.querySelector(".projectTitle");
        projectTitleDiv.textContent = currentProject;
        }
    );

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "🗑️";
    deleteProject.classList.add("deleteProject");

    newProjectLi.appendChild(libutton);
    newProjectLi.appendChild(deleteProject);
    parent.appendChild(newProjectLi);
};

const projectAddTask = (mainContent, input, propertyName) => {
    deleteElements(mainContent);

    const projectTitle = document.createElement("div");
 
    if (propertyName === 'value') {
        projectTitle.textContent = `${input.value}`;
    } 
    else if (propertyName === 'textContent') {
        projectTitle.textContent = `${input.textContent}`;
    }

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
};

const createNewProject = (input, parent, e) => {
    e.preventDefault();
    if(projectsArray.some(object => object.project === input.value)) {
        alert("ERROR");
    }
    else {
        const newProject = new projects (
            input.value,
        );
        const newProperty = "value";
        projectAddTask(mainContent, input, newProperty);
        newProjectDOM(input, parent, newProperty);
        projectsArray.push(newProject);
        setData("projects", projectsArray);
    }
}; 
    
export {projects, createNewProject, newProjectDOM, addNewTasks, projectAddTask, filterTasks, projectsArray, recoverObjects};

