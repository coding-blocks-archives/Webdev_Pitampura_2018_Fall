const route = require('express').Router()
const { User } = require('../db')

route.get('/', (req, res) => {
  console.log('GET /login')
  res.render('login')
})

route.post('/', async (req, res) => {
  console.log('POST /login')
  try {
    const user = await User.findOne({
      where: { username: req.body.username }
    })
    if (!user) {
      // username wrong
      console.log('username wrong')
      return res.redirect('/login')
    }

    if (user.password !== req.body.password) {
      // password is wrong
      console.log('password wrong')
      return res.redirect('/login')
    }
    console.log('going to profile')
    req.session.userId = user.id
    res.redirect('/profile')

  } catch (e) {
    console.log('going back to login')
    res.redirect('/login')
  }
})

module.exports = route
