function makeObjs() {
  let a = {
    k: 10,
    l: () => console.log(this)
  }

  let b = {
    x: 10,
    y: a.l
  }

  return [a, b]

}
let objs = makeObjs()
window.printThis = objs[0].l
