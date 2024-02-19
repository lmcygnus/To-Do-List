class projects {
    constructor(project){
        this.project = project;
    }   
}

const setProjects = (newProject) => {
    localStorage.setItem("newProject", newProject);
}

const createNewProject = (imput, parent, e) => {
    e.preventDefault();
    const newProject = new projects (
        imput.value,
    )
    setProjects(newProject);
    const newProjectLi = document.createElement("li");
    newProjectLi.textContent = `${imput.value}`;
    parent.appendChild(newProjectLi);
}
    
export {projects, createNewProject};

