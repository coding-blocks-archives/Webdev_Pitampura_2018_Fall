let wait = true

setTimeout(() => {
  wait = false
}, 1000)


while (wait) {}

console.log('done')
