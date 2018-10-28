const route = require('express').Router()
const { User } = require('../db')
const passport = require('passport')

route.get('/', (req, res) => {
  console.log('GET /login')
  res.render('login')
})

route.post('/',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  })
)

module.exports = route
