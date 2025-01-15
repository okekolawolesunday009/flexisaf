import TaskManager from "./TaskManager.js";
// const TaskManager = require("./TaskManager")


const taskManager = new TaskManager();

const taskInput = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const addTaskButton = document.getElementById("addTaskButton");
const taskContainer = document.getElementById("taskContainer");

console.log("oke")

function renderTasks() {

    taskContainer.innerHTML = "";

    const tasks = taskManager.filterTasks("all");
    tasks.forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.className = task.completed ? "completed": ""
        taskItem.innerHTML = `
        ${task.description} | Priority: ${task.priority} 
        <button onclick="completeTask(${task.id})">Completed</button/> `;

        taskContainer.appendChild(taskItem)
    })
};

addTaskButton.addEventListener("click", () => {
    const description = taskInput.value;
    const priority = taskPriority.value;

    if (description.trim()) {
        taskManager.addTask(description, priority);
        taskInput.value = "";
        renderTasks()
    } else {
        alert("Please enter a task")
    }
})