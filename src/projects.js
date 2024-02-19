class projects {
    constructor(project){
        this.project = project;
    }   
}

const createNewProject = (imput, parent, dialog) => {
    const newProject = new projects (
        imput.value,
    )
    localStorage.setItem(newProject);
    const newProjectLi = document.createElement("li");
    newProjectLi.textContent = `${imput.value}`;
    parent.appendChild(newProjectLi);
}



export {projects, createNewProject};

