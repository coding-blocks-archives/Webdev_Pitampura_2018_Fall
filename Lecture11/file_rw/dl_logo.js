const fs = require('fs')
const request = require('request')


request(
  'https://codingblocks.com/assets/images/cb/cblogo.png',
  (err, response, body) => {
    fs.writeFile(
      __dirname + '/logo.png',
      body,
      (err) => {
        if (err) throw err
      }
    )
  }
)
