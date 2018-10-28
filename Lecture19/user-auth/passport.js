const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const { User } = require('./db')

passport.serializeUser((user, done) => {
  console.log('===========   serialize')
  done(null, user.id)
})

passport.deserializeUser((userId, done) => {
  console.log('=============   deserialize')
  User.findById(userId)
    .then((user) => done(null, user))
    .catch((err) => done(err))
})

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({
    where: {username: username}
  }).then((user) => {

    if (!user) {
      // could not find user
      return done(null, false)
    }

    if (user.password !== password) {
      // password mismatch
      return done(null, false)
    }

    done(null, user)

  }).catch((error) => {
    done(error)
  })
}))

module.exports = passport