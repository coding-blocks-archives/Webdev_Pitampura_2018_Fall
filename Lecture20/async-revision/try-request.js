const request = require('request')
const fs = require('fs')

request('https://google.com', (error, response, body) => {

  console.log('request completed')

  fs.writeFile(__dirname + '/google.html', body, (err) => {
    if (!err) {
      console.log('file written')
    }
  })
  console.log('write')
})

console.log('request')
