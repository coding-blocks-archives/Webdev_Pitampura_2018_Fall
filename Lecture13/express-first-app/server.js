const express = require('express')
const app = express()


app.get(
  '/',
  (req, res) => {
    console.log('We received a request')
    let name = req.query.name
    console.log(name)
    res.send('Hello World!')
  }
)
app.get('/bye', (req, res) => res.send('GoodBye!'))

app.get('/:greeting', (req, res) => {
  let name = req.query.name
  if (!name) {
    name = 'Sir/Madam'
  }
  res.send(req.params.greeting + ' ' +  name)
})



app.listen(5555, () => console.log('Server started'))
