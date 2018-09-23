class Person {
  constructor(name) {
    this.name = name
  }

  get firstName() {
    return this.name.split(' ')[0]
  }
  set lastName(val /* 'Smith' */ ) {
    // 'John Doe'
    this.name = this.name.split(' ')
    // ['John', 'Doe']
    this.name.pop()
    // ['John']
    this.name.push(val)
    // ['John', 'Smith']
    this.name = this.name.join(' ')
    // 'John Smith'
  }
  get lastName() {
    return this.name.split(' ').pop()
  }

}

let p = new Person('John Doe')
// p.firstName
