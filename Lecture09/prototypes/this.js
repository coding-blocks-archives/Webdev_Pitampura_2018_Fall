function printThis() {
  console.log(this)
}

printThis()

let a = {
  k: 10,
  l: printThis
}

let b = {
  x: 10,
  y: printThis
}
