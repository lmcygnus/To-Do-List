class ToDo {
    constructor(title, description, dueDate, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
    }
}

let numberForId = 0;

const newTodoDOM = (titleImput, parent) => {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");

    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', `${numberForId}cbtest-19`);
    checkbox.setAttribute('type', 'checkbox');

    const label = document.createElement('label');
    label.classList.add('check-box');
    label.setAttribute('for', `${numberForId}cbtest-19`);

    const taskName = document.createElement('div');
    taskName.textContent = titleImput.value;

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    toDoDiv.appendChild(checkboxWrapper);
    toDoDiv.appendChild(taskName);
    parent.appendChild(toDoDiv);
}

const createNewToDo = (titleImput, descriptionImput, dueDateImput, currentProject, e, parent) => {
    numberForId ++;
    e.preventDefault();
    const newToDo = new ToDo(
        titleImput.value,
        descriptionImput.value,
        dueDateImput.value,
        currentProject,
    )
    newTodoDOM(titleImput, parent);
    console.log(newToDo);
}


const todayDate = () => {
    let currentDate = new Date().toISOString().split('T')[0];
    document.querySelector('.date').value = currentDate;
};

export {ToDo, createNewToDo, todayDate,};