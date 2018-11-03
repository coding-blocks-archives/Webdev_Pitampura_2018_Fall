const express = require('express')
const app = express()

const seasons = [
  {id: 1, name: 'Summer', start: 'May', end: 'Jul'},
  {id: 2, name: 'Winter', start: 'Nov', end:' Jan',},
  {id: 3, name: 'Fall', start: 'Aug', end: 'Oct'},
  {id: 4, name: 'Spring', start: 'Feb', end: 'Apr'}
]

app.get('/seasons', (req, res) => {
  res.json(seasons.map(s => ({id: s.id, name: s.name})))
})

app.get('/seasons/:id', (req, res) => {
  for (let s of seasons) {
    if (s.id == req.params.id) {
      setTimeout(() => {
        res.json(s)
      }, 2000)
    }
  }
})

app.listen(4124)
