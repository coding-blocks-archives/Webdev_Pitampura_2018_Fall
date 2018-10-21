const route = require('express').Router()
const {Vendor, Product} = require('../db')

route.get('/vendors', async (req, res) => {
  const vendors = await Vendor.findAll()

  res.render('admin_vendors', {vendors})
})

route.post('/vendors', async (req, res) => {
  await Vendor.create({
    name: req.body.name
  })
  res.redirect('/admin/vendors')
})


route.get('/products', async (req, res) => {
  const vendors = await Vendor.findAll()
  const products = await Product.findAll({
    include: [Vendor]
  })

  res.render('admin_products', {
    vendors, products
  })
})

route.post('/products', async (req, res) => {
  await Product.create({
    name: req.body.name,
    price: parseInt(req.body.price * 100),
    quantity: req.body.quantity,
    vendorId: req.body.vendorId
  })

  res.redirect('/admin/products')
})

module.exports = route
