const express = require('express')

const app = express()

let todos = [
  {name: 'task 1', done: false},
  {name: 'task 2', done: true}
]
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.render('todos', {
    todos
  })
})

app.post('/', (req, res) => {
  todos.push({
    name: req.body.name,
    done: req.body.done
  })
  if (req.body.asJson) {
    return res.send(todos)
  }
  res.redirect('/')
})

app.use('/', express.static(__dirname + '/public'))

app.listen(4040, () => {
  console.log('Server started on http://localhost:4040')
})
