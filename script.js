document.getElementById("submitButton").addEventListener("click", addTask);
function addTask(){
    const taskInput = document.getElementById("taskInput").value;
    //alert(`New Task: ${taskInput}`);
    if (taskInput){
        const newTask = document.createElement('li');
        newTask.innerText = taskInput;
        const taskList = document.getElementById('taskList');
        taskList.appendChild(newTask);
        const deleteButton = document.createElement("button");
        deleteButton.className = "removeButton";
        deleteButton.innerText = "x";
        deleteButton.addEventListener("click", () => taskList.removeChild(newTask));
        newTask.appendChild(deleteButton);
        document.getElementById("taskInput").value = '';
    }
}
