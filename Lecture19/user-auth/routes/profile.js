const route = require('express').Router()
const { User } = require('../db')

route.get('/', async (req, res) => {

  if (req.session && req.session.userId) {
    console.log('session exists')
    const user = await User.findOne({
      attributes: [ 'id', 'username', 'email' ],
      where: {
        id: req.session.userId
      }
    })

    res.render('profile', { user })

  } else {
    console.log('session does not exist')
    res.redirect('/login')
  }
})


module.exports = route
