import { setData } from "./localStorage";

class projects {
    constructor(project){
        this.project = project;
    }  
}

const createNewProject = (imput, parent, e) => {
    e.preventDefault();
    const newProject = new projects (
        imput.value,
    );
    setData(`${imput.value} project`, newProject);
    const newProjectLi = document.createElement("li");
    newProjectLi.classList.add("projects");
    newProjectLi.textContent = `${imput.value}`;

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "🗑️";
    deleteProject.classList.add("deleteProject");
    parent.appendChild(newProjectLi);
    newProjectLi.appendChild(deleteProject);
};
    
export {projects, createNewProject};

