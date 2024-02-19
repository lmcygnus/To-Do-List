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
    )
    setData("newProject", newProject);
    const newProjectLi = document.createElement("li");
    newProjectLi.textContent = `${imput.value}`;
    parent.appendChild(newProjectLi);
};
    
export {projects, createNewProject};

