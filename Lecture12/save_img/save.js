const fs = require('fs')
const request = require('request')

// request(
//   'https://codingblocks.com/assets/images/cb/logosc/unity.png'
// ).pipe(
//   fs.createWriteStream(__dirname + '/logo.png')
// )

request(
  'https://codingblocks.com/assets/images/cb/logosc/unity.png',
  (err, resp, body) => {
    fs.writeFile(
      __dirname + '/logo2.png',
      body,
      {
        encoding: null
      },
      (err) => {
        if (err) throw err
      }
    )
  }
  )
