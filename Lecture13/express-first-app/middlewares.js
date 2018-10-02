const express = require('express')
const app = express()

function m1(req, res, next) {
  console.log('m1')
  if (req.query.m == 1) {
    return res.send('Something from m1')
  }
  req.passedThroughM1 = true
  next()
}

function m2 (req, res, next) {
  console.log('m2')
  res.send('Something from m2')
}

app.get('/', m1, m2)

app.listen(3434, () => console.log('Started'))