export default class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(description, priority = "low") {
        const newTask = {
            id: Date.now(),
            description,
            priority,
            completed: false

        };
        this.tasks.push(newTask);
        console.log(`Task added: ${description}`)
    };

    completeTask(taskId) {
        const task = this.tasks.find((task) => task.id === taskId)
        // console.log(taskId, task)
        if (task) {
            task.completed = true;
            console.log(`Task ${task.description} marked as completed`);
        } else {
            console.log("Task not found")
        }
    }
    filterTasks(filterType) {
        let filterTasks;
        switch(filterType) {
            case 'completed':
                filterTasks = this.tasks.filter((task) => task.completed);
                break;
        
            case 'high':
                filterTasks = this.tasks.filter((task) => task.priority === "high");
                break;
            case 'low':
                filterTasks = this.tasks.filter((task) => task.priority === "low");
                break;
            case "medium" :
                filterTasks = this.tasks.filter((task) => task.priority === "medium");
                break;
            default:
                filterTasks = this.tasks;


        }
        console.log(filterTasks)
        return filterTasks
    }

    getSummary() {
        const summary = this.tasks.reduce(
            (acc, task) => {
                acc.total++;
                if (task.completed) acc.completed++;
                return acc;
            },
            {total: 0, completed: 0}
        );
        console.log(`Total task: ${summary.total}`);
        console.log(`Completed Task: ${summary.completed}`);
        return summary


    }
    displayTasks() {
        this.tasks.forEach((task) => {
            console.log(
                `id: ${task.id} ${task.description} | Priority: ${task.priority} | Completed: ${task.completed ? "Yes" : "No"}` 
            )
        })
    }

}



