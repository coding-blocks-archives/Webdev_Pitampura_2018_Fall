const express = require('express')
const session = require('express-session')
const {
  db
} = require('./db')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'wfjgb23o4ubg0384hg3490-gh34-09gh43-gi',
  name: 'mycookiename'
}))
app.set('view engine', 'hbs')


app.use((req, res, next) => {
  console.log('session')
  console.log(req.session)
  next()
})
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
