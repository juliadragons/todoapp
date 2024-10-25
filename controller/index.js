const{getAllTodos} = require("../model")
async function getAllTasks() {
    const tasks = await getAllTodos();
    return tasks
}
    
module.exports = {
    getAllTasks
}