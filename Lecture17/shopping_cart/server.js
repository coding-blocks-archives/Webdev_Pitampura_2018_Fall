const express = require('express')
const {
  db
} = require('./db')

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
