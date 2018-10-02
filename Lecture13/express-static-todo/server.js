const express = require('express');
const path = require('path');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let todos = [
  {name: 'task1', done: true},
  {name: 'task2', done: true}
]

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/todos', (req, res) => res.send(todos))

app.post('/todos', (req, res) => {
  let newtask = {
    name: req.body.name,
    done: req.body.done
  }
  todos.push(newtask)
  res.send({success: true})
})

app.listen(3333, function () {
    console.log("Server started on http://localhost:3333");
});