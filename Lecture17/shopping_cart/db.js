const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
const db = new Sequelize({
  database: 'shopping_cart',
  username: 'shopping_user',
  password: 'shopping_pass',
  dialect: 'mysql',
  // dialect: 'sqlite',
  storage: __dirname + '/shopping.db'
})

const Vendor = db.define('vendor', {
  name: {
    type: DT.STRING(30),
    allowNull: false
  }
})

const Product = db.define('product', {
  name: {
    type: DT.STRING(80),
    allowNull: false
  },
  price: {
    type: DT.INTEGER
  },
  quantity: {
    type: DT.INTEGER
  }
})

Vendor.hasMany(Product)
Product.belongsTo(Vendor)

module.exports = {
  db, Vendor, Product
}
