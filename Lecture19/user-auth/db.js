const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize({
  // mysql -> params
  // dialect: 'mysql',
  // username: '',
  // database: '',
  // password: '',
  // host: 'localhost',
  // port: '',

  // sqlite -> params
  dialect: 'sqlite',
  storage: __dirname + '/test.db'
})

const User = db.define('user', {
  username: {
    type: DT.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DT.STRING(100),
  },
  password: {
    type: DT.STRING,
    allowNull: false
  }
})

module.exports = {
  db, User
}
