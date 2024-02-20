class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

const createNewToDo = (titleImput, descriptionImput, dueDateImput, priorityImput, e, parent) => {
    e.preventDefault();
    const newToDo = new ToDo(
        titleImput.value,
        descriptionImput.value,
        dueDateImput.value,
        priorityImput.value,
    )
    //project.push(newToDo);
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("taskDiv");
    toDoDiv.textContent = titleImput.value;

    const toDocheckBox = document.createElement("imput");
    toDocheckBox.type = "checkbox";
    toDoDiv.appendChild(toDocheckBox);
    parent.appendChild(toDoDiv);
    console.log(newToDo);
}

const todayDate = () => {
    let currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = currentDate;
};

export {ToDo, createNewToDo, todayDate};