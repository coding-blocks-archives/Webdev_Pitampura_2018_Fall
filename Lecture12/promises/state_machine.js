
function executor(state = 0) {
  console.log(state)
  switch(state) {
    case 0: {
      setTimeout(() => executor(1), 1000)
      break;
    }
    case 1: {
      setTimeout(() => executor(2), 1000)
      break;
    }
    case 2: {
      return;
    }
  }
}
executor()
console.log('asdasd')
