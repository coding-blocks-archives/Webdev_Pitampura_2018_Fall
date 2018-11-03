const request = require('request')

request(
  'http://localhost:4124/seasons',
  (err, resp, body) => {
    for (let s of JSON.parse(body)) {

      request(
        `http://localhost:4124/seasons/${s.id}`,
        (err, resp, body) => {
          console.log(JSON.parse(body))
        }
      )
    }

  }
)
