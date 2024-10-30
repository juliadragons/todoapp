const{getAllTodos, insertTodos} = require("../model")
async function getAllTasks() {
    const tasks = await getAllTodos();
    return tasks
}
 
async function addTask(description, priority) {
    if (priority < 0 || priority > 1) {
        console.log('Viga: priority võib olla ainult 0 või 1')
        return false;
    }

    const uusTask = {
        description: description,
        priority: priority,
        isDone: 0
    }
    await insertTodos(uusTask)
    return true
}


module.exports = {
    getAllTasks,
    addTask
}