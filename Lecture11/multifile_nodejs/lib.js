
function awesomifier(thing) {
  return thing + " is awesome!"
}

function uglifier(thing) {
  return thing + " is ugly!"
}
console.log("exporting library")
module.exports = {
  awesomifier
}
