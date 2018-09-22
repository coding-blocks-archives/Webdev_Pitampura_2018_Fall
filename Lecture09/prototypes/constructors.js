function Person(name, age) {
  this.name = name
  this.age = age
}

let p1 = Person('Ashok', 50)

// function newPerson(name, age) {
//   let p = {}
//   p.name = name
//   p.age = age
//   return p
// }

let p2 = new Person('Namrata', 30)
// let p3 = newPerson('Sally', 25)

/**
 * let p = new Person('John', 35)
 * p.name -> 'John'
 * p.age -> not visible
 * p.isAdult() -> true (because 35 > 18)
 */
