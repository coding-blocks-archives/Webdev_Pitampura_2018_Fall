String.prototype.split = function () {
  console.log('This website does not allow splitting strings')
}
let a = {
  x: 10,
  y: 'aaa',
  z: true
}

let _b = {}
let b = Object.create(a)
