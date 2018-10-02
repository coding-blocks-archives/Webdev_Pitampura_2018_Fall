const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')

let todos = [
  {name: 'task 1', done: false},
  {name: 'task 2', done: true}
]

app.get('/', (req, res) => {
  res.render('todos', {
    title: 'TODOS',
    todos
  })
})

app.post('/todos', (req, res) => {
  todos.push({
    name: req.body.task,
    done: false
  })
  res.redirect('/')
})

app.listen(3131, function () {
    console.log("Server started on http://localhost:3131");
});