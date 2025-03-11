const readline = require('readline');  

const rl = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout  
});  

function menu() {  
    console.log("\n1. Add Task");  
    console.log("2. View Tasks");  
    console.log("3. Update Task");  
    console.log("4. Delete Task");  
    console.log("5. Exit");  
    
    rl.question('Choose an option: ', (answer) => {  
        switch (answer) {  
            case '1':  
                rl.question('Enter task name: ', (name) => {  
                    rl.question('Enter task description: ', (description) => {  
                        addTask(name, description);  
                        menu();  
                    });  
                });  
                break;  
            case '2':  
                viewTasks();  
                menu();  
                break;  
            case '3':  
                rl.question('Enter task ID to update: ', (id) => {  
                    rl.question('Enter new task name: ', (name) => {  
                        rl.question('Enter new task description: ', (description) => {  
                            updateTask(parseInt(id), name, description);  
                            menu();  
                        });  
                    });  
                });  
                break;  
            case '4':  
                rl.question('Enter task ID to delete: ', (id) => {  
                    deleteTask(parseInt(id));  
                    menu();  
                });  
                break;  
            case '5':  
                rl.close();  
                break;  
            default:  
                console.log("Invalid option.");  
                menu();  
                break;  
        }  
    });  
}  

// Start the menu  
menu();  