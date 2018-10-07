const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
const Op = Sequelize.Op

const db = new Sequelize('sampledb2',
  'sampleuser2', 'samplepass2', {
  dialect: 'mysql',
  logging: true
  // logging: true
  // host: 'localhost',
  // port: 3306,
})

const Person = db.define('person', {
  name: {
    type: DT.TEXT,
    allowNull: false
  },
  age: {
    type: DT.INTEGER,
    default: 18,
    allowNull: false,
    validate: {min: 18, max: 100}
  },
  city: { type: DT.STRING(30) }
})


// new Sequelize('mysql://sampleuser2:samplepass2@localhost:3306/sampledb2')

async function task () {
  await db.authenticate()
  await db.sync()

  console.log(await Person.count())

  await Person.destroy({
    where: {
      [Op.or]: {
        age: {[Op.lt]: 30},
        city: 'La La Land'
      }
    }
  })

  console.log(await Person.count())
}

task()
