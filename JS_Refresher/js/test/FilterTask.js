import TaskManager from "../TaskManager.js";



const taskManager = new TaskManager();

//add task
console.log("\n=========== Add task===============\n============================================")

taskManager.addTask("Learn ES6 features", "high");
taskManager.addTask("Write case study project", "medium");
taskManager.addTask("Review project");

//Complete a task
console.log("\n=========== Complete a task===============\n============================================")
taskManager.completeTask(taskManager.tasks[1].id);

//filter task
console.log("\n=========== Filter a task based on completed ===============\n============================================")
taskManager.filterTasks("completed");

console.log("\n=========== Filter a task based on priority (high)===================\n============================================")
taskManager.filterTasks("high");