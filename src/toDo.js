class ToDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
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
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");
    toDoDiv.textContent = titleImput.value;

    var checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper-19');

    var checkbox = document.createElement('input');
    checkbox.setAttribute('id', 'cbtest-19');
    checkbox.setAttribute('type', 'checkbox');

    var label = document.createElement('label');
    label.classList.add('check-box');
    label.setAttribute('for', 'cbtest-19');

    checkboxWrapper.appendChild(checkbox);
    checkboxWrapper.appendChild(label);
    toDoDiv.appendChild(checkboxWrapper);
    parent.appendChild(toDoDiv);
    console.log(newToDo);
}

const todayDate = () => {
    let currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = currentDate;
};

export {ToDo, createNewToDo, todayDate};