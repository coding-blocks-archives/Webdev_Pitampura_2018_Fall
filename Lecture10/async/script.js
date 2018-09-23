window.onload = () => {
  let waitBtn = document.getElementById('waitBtn')
  let text = document.getElementById('text')
  let counter = document.getElementById('counter')
  let count = 0

  waitBtn.onclick = function () {
    let start = new Date().getTime()
    while (new Date().getTime() < start + 5000) {

    }
    text.innerText = 'Wait is over'
  }

  counter.onclick = () => {
    console.log(count++)
  }

}
