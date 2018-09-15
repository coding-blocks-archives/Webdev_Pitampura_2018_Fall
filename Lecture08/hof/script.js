function takesAFun(aFun) {
  console.log(aFun)
  console.log(aFun())
}


// takesAFun(10)

takesAFun(function () {
  return 'wtf'
})