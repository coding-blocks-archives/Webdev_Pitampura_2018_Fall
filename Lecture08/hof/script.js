function fun1(fun2) {
  let x = 10
  fun2(function funB (fun4) {
    let x = 20
    fun4(function funD () {
      console.log(x)
    })
  })
  console.log(x)
}

fun1(function funA(fun3) {
  fun3(function funC(fun5) {
    fun5()
  })
})

function add (num) {
  if (typeof num === 'undefined') {

  }
  if (typeof num === 'number') {
    return function () {
      
    }
  }
}