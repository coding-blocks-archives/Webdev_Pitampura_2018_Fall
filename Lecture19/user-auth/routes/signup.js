const route = require('express').Router()
const {
  User
} = require('../db')

route.get('/', (req, res) => {
  res.render('signup')
})

route.post('/', async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    })
    res.redirect('/login')
  } catch (e) {
    res.redirect('/signup')
  }

})

module.exports = route
