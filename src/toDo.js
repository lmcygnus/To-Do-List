class ToDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
}

let numberForId = 0;

const newTaskDOM = (parent, titleImput) => {

numberForId ++;

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', `${numberForId}cbtest-19`);
    checkbox.classList.add("task-list");
    checkbox.setAttribute('type', 'checkbox');

    const label = document.createElement('label');
    label.setAttribute('for', `${numberForId}cbtest-19`);

    const taskName = document.createElement('div');
    taskName.classList.add("taskName");
    taskName.textContent = titleImput.value;

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    toDoDiv.appendChild(checkboxWrapper);
    toDoDiv.appendChild(taskName);
    parent.appendChild(toDoDiv);
}

const createNewToDo = (titleImput, descriptionImput, dueDateImput, priorityImput, e, parent) => {
    e.preventDefault();
    const newToDo = new ToDo(
        titleImput.value,
        descriptionImput.value,
        dueDateImput.value,
        priorityImput.value,
        "Default",
    )
    newTaskDOM(parent, titleImput);
}

const todayDate = () => {
    let currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = currentDate;
};

export {ToDo, createNewToDo, todayDate};