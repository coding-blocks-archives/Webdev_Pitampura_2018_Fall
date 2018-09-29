const fs = require('fs')
const request = require('request')


request(
  'http://cb.lk',
  (err, response, body) => {
    fs.writeFile(
      __dirname + '/cb.html',
      body,
      (err) => {
        if (err) throw err
      }
    )
  }
)
