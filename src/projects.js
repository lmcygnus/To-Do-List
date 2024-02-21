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
    newProjectLi.textContent = `${imput.value}`;

    const deleteProject = document.createElement("button");
    deleteProject.textContent = "x";
    parent.appendChild(newProjectLi);
    newProjectLi.appendChild(deleteProject);
};
    
export {projects, createNewProject};

