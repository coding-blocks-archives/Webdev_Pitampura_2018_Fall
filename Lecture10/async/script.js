let waitBtn = document.getElementById('waitBtn')
let text = document.getElementById('text')
let counter = document.getElementById('counter')
let count = 0

waitBtn.onclick = function () {
  console.log(Date.now())

  setTimeout(() => {
    console.log(Date.now())
    text.innerText = 'Wait is over'
  }, 5000)

  console.log('wait clicked')
}

counter.onclick = () => {
  console.log(count++)
}
