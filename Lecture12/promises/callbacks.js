const request = require('request')
const fs = require('fs')

const fileName = __dirname + '/file.txt'

function download (url, done) {
  let err
  if (typeof done !== 'function') {
    err = new Error("'done' should be a function")
    return
  }
  if (!url.startsWith('http')) {
    err = new Error("Invalid URL format")
  }
  if (err)  return done(err)

  request(url, (err, resp, body) => {
    done(err, body)
  })
}

function writeData(fileName, data) {
  fs.writeFile(
    fileName,
     data,
     (err) => {
       console.log('file written')
     }
  )
}

download('google.com', function (err1, data1) {
  if (err1) {

  }
  download('http://cb.lk', function (err2, data2) {
    if (err2) {

    }

      writeData(
        fileName,
        data1 + data2,
      )

  })
})
