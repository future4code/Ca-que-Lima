let taskList = [
    'Estudar',
    'Ficar rico'
]

const newTask = process.argv[2]

if (newTask) {
    taskList.push(newTask)
}


console.log(taskList)