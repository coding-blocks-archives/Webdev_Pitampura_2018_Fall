const request = require('request')

function downloadSeason(seasonId, totalSeasons, done) {
  let index = 0
  request(
    `http://localhost:4124/seasons/${seasonId}`,
    (err, resp, body) => {
      console.log(JSON.parse(body))
      downloadSeason()
    }
  )
}

request(
  'http://localhost:4124/seasons',
  (err, resp, body) => {
    const seasons = JSON.parse(body)
    downloadSeason(seasons[0].id, seasons.length, () => {

    })

  }
)
