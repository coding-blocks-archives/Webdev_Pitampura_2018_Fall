const express = require('express')

const route = express.Router()

let teachers = [
  {name: 'Prateek', center: 'Pitampura', courses: [1,3]},
  {name: 'Rishab', center: 'Dwarka', courses: [2,3]},
  {name: 'Anuj', center: 'Noida', courses: [2,3,4]}
]

route.get('/', (req, res) => {
  res.send(teachers)
})

route.post('/', (req, res) => {
  teachers.push(req.body)
  res.send(teachers)
})

module.exports = route