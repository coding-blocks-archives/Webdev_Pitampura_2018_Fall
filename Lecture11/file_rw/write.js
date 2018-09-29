const fs = require('fs')

fs.writeFile(
  __dirname + '/file.txt',
  'hello world!!',
  (err) => {
    if (err) throw err
  }
)
