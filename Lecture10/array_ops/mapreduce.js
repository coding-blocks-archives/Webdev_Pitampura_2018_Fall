let arr = [3, 6, 1, 8]

let arr2 = arr.map((value, index, origArr) => {
  return value * index
})
let arr3 = [4, 0, 2, 1, 3]

let mirror = (v, i, o) => o[v]

let arr4 = arr3.map(mirror)

console.log(arr2)
console.log(arr4)

let arr5 = arr.filter((v, i, o) => {
  return v % 2 === 0
})

let mirrorFilter = (v, i, o) => (o[v] === i)
let arr7 = arr3.filter(mirrorFilter)

let summer = ((a, v, i, o) => (a + v))
let sum1 = arr.reduce(summer, 100)
