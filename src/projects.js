import { setData, lookData } from "./localStorage";
import { mainContent } from ".";
import { createNewToDo, newTodoDOM, todayDate, closeDialogs, toDoArray, addNewTasks } from "./toDo";

let currentProject = "Default";

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

const recoverProjects = (array, parent, propertyName) => {
    array.forEach(element => {
        newProjectDOM(element, parent, propertyName);
    });
};

const recoverTasks = (array, titleProperty, descriptionProperty, dateProperty, mainContent) => {
    array.forEach(element => {
        newTodoDOM(element[titleProperty], element[descriptionProperty], element[dateProperty], mainContent);
    });
}

const newProjectDOM = (input, parent, propertyName) => {
    const newProjectLi = document.createElement("li");

    const libutton = document.createElement("button");
    libutton.textContent = input[propertyName];
    libutton.classList.add("projectLi");

    const titleProperty = "title"; 
    const descriptionProperty = "description";
    const dateProperty = "dueDate";

    libutton.addEventListener("click",  (event) => {
        currentProject = event.target.textContent;
        let filteredTasks = filterTasks(toDoArray, currentProject);
        deleteTasks();
        projectAddTask(mainContent, input, titleProperty);
        recoverTasks(filteredTasks, titleProperty, descriptionProperty, dateProperty, mainContent)
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
    else if (propertyName === "project") {
        projectTitle.textContent = `${input[propertyName]}`
    }

    projectTitle.classList.add("projectTitle");

    const addTask = document.createElement("button");
    addTask.classList.add("newToDo");
    addTask.textContent= "+Add Task";

    mainContent.appendChild(projectTitle);
    mainContent.appendChild(addTask);
    addTask.addEventListener("click", (e) => {
        e.preventDefault();
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
    
export {projects, createNewProject, newProjectDOM, addNewTasks, projectAddTask, filterTasks, projectsArray, recoverProjects, currentProject};

