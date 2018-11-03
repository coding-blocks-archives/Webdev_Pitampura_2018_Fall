module.exports = {
  getFirstName: function (fullName) {
    if (fullName.length < 1) {
      return null
    }
    return fullName.split(' ')[0]
  },
  getLastName: function(fullName) {
    if (fullName.length < 1) {
      return null
    }
    let nameArr = fullName.split(' ')
    if (nameArr.length < 2) {
      return null
    }
    return nameArr.pop()
  }
}
