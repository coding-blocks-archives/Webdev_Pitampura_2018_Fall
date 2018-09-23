let arr = [1, 2, 3, 4, 6, 12, 34, 23, 245, 213, 34, 23, 55]
// Slice 

// slice does not mutate array
console.log(arr.slice(3))

console.log(arr.slice(2, 4))

console.log(arr.slice(-3))

// left index should be smaller than right index
console.log(arr.slice(5, 3))
console.log(arr.slice(-3, -5))

// Splice
console.log('========== SPLICE ========')
console.log(arr)

console.log(arr.splice(11))
console.log(arr)

console.log(arr.splice(3, 2))
console.log(arr)

// second op has to be +ve
console.log(arr.splice(-3, 1))

console.log(arr.splice(3, 2, 'a', 'b', 'g'))
console.log(arr)

let arr2 = ['as', 'fg', 'asf', 'dfb']
// replace position 4-7 with ^^
console.log(arr.splice(4, 3, ...arr2))


let name = 'John Doe'
let newLastName = 'Smith'

name = name
  .split(' ')
  .slice(0, -1)
  .concat([newLastName])
  .join(' ')

name = name
  .split(' ')
  .slice(0, -1)
  .join(' ')
  .concat(' ' + newLastName)
