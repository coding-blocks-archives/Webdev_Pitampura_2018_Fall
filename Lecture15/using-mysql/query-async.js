const mysql = require('mysql2')


const conn = mysql.createConnection({
  user: 'sampleuser2',
  database: 'sampledb2',
  password: 'samplepass2'
})

conn.query(
  'select * from tasks',
  (err, rows, cols) => {
    console.log(JSON.stringify(rows, null, 2))
    conn.close()
  }
)