//initialize task manager

import TaskManager from "../TaskManager.js";


const taskManager = new TaskManager()

//add task
console.log("\n=========== Add task===============\n============================================")

taskManager.addTask("Learn ES6 features", "high");
taskManager.addTask("Write case study project", "medium");
taskManager.addTask("Review project");
taskManager.addTask("Review project");

