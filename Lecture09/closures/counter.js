function createCounter(init, delta) {
  let val = init

  function count() {
    val += delta
    return val
  }
  return count
}

let c3 = createCounter(30, 3)
let c5 = createCounter(25, 5)

console.log(c3())
console.log(c3())


console.log(c5())
console.log(c5())
