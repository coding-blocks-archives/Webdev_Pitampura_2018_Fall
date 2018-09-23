class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  isAdult() {
    return this.age >= 18
  }
}
class Student extends Person {
  constructor(name, age, school) {
    if (age > 21) {
      throw new Error('Students above 21 not allowed')
    }
    super(name, age)
    this.school = school

  }
  canGoToSchool() {
    return !this.isAdult()
  }
}

let p = new Person('Nancy', 30)
let s = new Student('Jason', 12, 'St. Marks')
