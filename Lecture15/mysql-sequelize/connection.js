const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

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
  const john = await Person.create({
    name: 'John Doe',
    age: 22,
    city: 'La La Land'
  })
  // const john = new Person({
  //   name: 'John Doe',
  //   age: 22,
  //   city: 'Neverland'
  // })
  await john.save()
  console.log(john)
  john.name = 'John Summers'
  john.age = 44
  console.log(john)
  await john.save()
  console.log(john)
  // await john.destroy()
  console.log(john)
  await john.save()
}

task()
