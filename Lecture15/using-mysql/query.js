const mysql = require('mysql2/promise')

async function performquery () {
  const conn = await mysql.createConnection({
    user: 'sampleuser2',
    database: 'sampledb2',
    password: 'samplepass2'
  })
  const [rows, cols] = await conn.query('select * from tasks')
  console.log(JSON.stringify(rows, null, 2))
  conn.close()
}

performquery()