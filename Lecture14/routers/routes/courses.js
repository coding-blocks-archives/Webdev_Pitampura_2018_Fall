const express = require('express')

const route = express.Router()


let courses = [
  {name: 'Launchpad', language: 'C++'},
  {name: 'Crux', language: 'Java'},
  {name: 'Webdev', language: 'Javascript'},
  {name: 'Android', language: 'Kotlin'}
]

route.get('/', (req, res) => {
  res.send(courses)
})

route.post('/', (req, res) => {
  courses.push(req.body)
  res.send(courses)
})


module.exports = route