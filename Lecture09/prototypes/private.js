function Person(name, age) {
  this.name = name
  this.age = age
  this.getFirstLetter = () => this.name[0]
  // this.getFirstLetter = function () {
  //   return this.name[0]
  // }
}
Person.prototype.isAdult = function () {
  return this.age >= 18
}

/*
let task1 = new Todo(taskName, false)
task1.createElement()
*/
