function createAFun() {

  function newFun() {
    return 'x'
  }
  return newFun
}

let c = createAFun
let f = createAFun()

console.log(c)
console.log(f)
console.log(c())
console.log(f())
console.log(c()())
