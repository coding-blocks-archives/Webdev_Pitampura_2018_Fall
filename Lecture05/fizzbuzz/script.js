let inpN = document.getElementById('num')
let btnPrint = document.getElementById('print')
let ulFizzBuzz = document.getElementById('fizzbuzzlist')

// Method 1
// btnPrint.onclick = function () {
//     let start = new Date().getTime()
//     let N = inpN.value
//     let html = ''
//     for (let i = 1; i <= N; i++) {
//         let print = ''
//         if (i % 3 == 0) print += 'fizz'
//         if (i % 5 == 0) print += 'buzz'
//         if (print.length == 0) print = i
        
//         html += `<li>${print}</li>`
//     }
   
//     ulFizzBuzz.innerHTML = html
//     console.log(new Date().getTime() - start)
// }

// Method 2
// btnPrint.onclick = function () {
//     let start = new Date().getTime()
//     let N = inpN.value
//     for (let i = 1; i <= N; i++) {
//         let item = document.createElement('li')
//         if (i % 3 == 0) item.innerText += 'fizz'
//         if (i % 5 == 0) item.innerText += 'buzz'
//         if (item.innerText.length == 0) item.innerText = i
        
//         ulFizzBuzz.appendChild(item)
//     }
   
//     console.log(new Date().getTime() - start)
// }

// Method 3
btnPrint.onclick = function () {
    let start = new Date().getTime()
    let N = inpN.value
    let newList = document.createElement('ul')
    newList.id = ulFizzBuzz.id
    for (let i = 1; i <= N; i++) {
        let item = document.createElement('li')
        if (i % 3 == 0) item.innerText += 'fizz'
        if (i % 5 == 0) item.innerText += 'buzz'
        if (item.innerText.length == 0) item.innerText = i
        
        newList.appendChild(item)
    }
    document.body.replaceChild(newList, ulFizzBuzz)
    ulFizzBuzz = newList
   
    console.log(new Date().getTime() - start)
}