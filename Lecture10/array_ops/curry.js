// add(1)() -> 1

// add(1)(2)() -> 3

function add(val = 0) {
  if (typeof val === 'undefined') {
    return 0
  } else {
    return function (val1) {
      if (typeof val1 === 'undefined') {
        return val
      } else {
        val += val1
        return add(val)
      }
    }
  }



}
