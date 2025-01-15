

import TaskManger from "../TaskManager.js";

const taskManager = new TaskManger();

//add task
console.log("\n=========== Add task===============\n============================================")

// taskManager.addTask("Learn ES6 features", "high");
taskManager.addTask("Write case study project", "medium");
taskManager.addTask("Review project");

//Complete a task
console.log("=========== Complete a task==============\n======================================")
taskManager.completeTask(taskManager.tasks[1].id);


//display task
console.log("===========Display All Task=============\n============================================");
taskManager.displayTasks()

//get the summary of all task
taskManager.getSummary()