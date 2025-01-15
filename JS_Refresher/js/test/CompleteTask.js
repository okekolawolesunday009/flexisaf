
import TaskManger from "../TaskManager.js";

const taskManager = new TaskManger();

//add task
console.log("\n=========== Add task===============\n============================================")

taskManager.addTask("Learn ES6 features", "high");
taskManager.addTask("Write case study project", "medium");
taskManager.addTask("Review project");

//Complete a task
console.log("\n=============completed task================\n===================================")
taskManager.completeTask(taskManager.tasks[0].id);
