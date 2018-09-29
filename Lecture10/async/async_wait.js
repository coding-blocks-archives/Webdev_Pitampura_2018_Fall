let intervalId = setInterval(() => {
  console.log('a')
}, 0)

setTimeout(() => {
  clearInterval(intervalId)
}, 1000)


// Promises 
// async-await

download(url, function (path) {
  convert(path, function (file) {
    upload(file, function () {

    })
  })
})

// Promises

download(url)
  .then(convert(path))
  .then(upload(file))


// Async Await
async function task() {
  let path = await download(url)
  let file = await convert(path)
  let done = await upload(file)
}
