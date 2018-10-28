const express = require('express')
const {
  db
} = require('./db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')


app.use('/login', require('./routes/login'))
app.use('/signup', require('./routes/signup'))
app.use('/profile', require('./routes/profile'))


db.sync()
  .then(() => {
    app.listen(7676, () => {
      console.log('Started on http://localhost:7676')
    })
  })
  .catch(console.error)
