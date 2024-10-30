const express = require('express')
const path = require("path")
const {getAllTasks, addTask} = require("./controller")

const PORT = process.env.PORT || 3035

const app = express()
app.use(express.static(path.join(__dirname, "public")))

//app.use(express.json());
app.use(express.urlencoded({ extended: true })); // changed to use POST
app.use(express.json())

app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")

app.get('/health', (req, res) => {
    res.send({status:'all good'});
});

app.get('/api/task', async (req, res) => {
    const tasks = await getAllTasks()
    res.send(tasks)
});

app.get('/api/task/:taskId', async (req, res) => {
    //const tasks = await getAllTasks()
    //res.send(tasks)
});

app.post('/api/task', async (req, res) => {
    await addTask(req.body.description, req.body.priority)
    res.status(201).end()
});

app.get('/', (req, res) => {
    res.render("frontpage");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`))