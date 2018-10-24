const express = require('express')
const hbs = require('hbs')
const {
  db
} = require('./db')

hbs.registerHelper('price', (price) => {
  return '₹' + (price / 100).toFixed(2)
})

const app = express()
app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/admin', require('./routes/admin'))


db.sync().then(() => {
  app.listen(3131, () => {
    console.log('Started on http://localhost:3131')
  })
}).catch(console.error)
