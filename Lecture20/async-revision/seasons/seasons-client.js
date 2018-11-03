const axios = require('axios')

axios.get('http://localhost:4124/seasons')
  .then((response) => {
    for (let s of response.data) {
      axios.get('http://localhost:4124/seasons/' + s.id)
        .then((resp) => {
          console.log(resp.data)
        })
    }
  })
  .catch(console.error)

async function task() {
  try {


    const response = await axios.get('http://localhost:4124/seasons')
    for (let s of response.data) {
      // const resp = await axios.get('http://localhost:4124/seasons/' + s.id)
      // console.log(resp.data)
      axios.get('http://localhost:4124/seasons/' + s.id)
        .then((resp) => {
          console.log(resp.data)
        })
    }



  } catch (e) {
    console.error(e)
  }
}
