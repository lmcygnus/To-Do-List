class projects {
    constructor(project){
        this.project = project;
    }
}

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const createNewProject = (projectImput, storage) => {
    const newProject = new projects (
        projectImput.value,
    )
    storage.push(newProject); 
}

const createNewToDo = (titleImput, descriptionImput, dueDateImput, priorityImput, project) => {
    const newToDo = new ToDo(
        titleImput.value,
        descriptionImput.value,
        dueDateImput.value,
        priorityImput.value,
    )
    project.push(newToDo);
}

export {projects, ToDo, createNewProject, createNewToDo};