const mysql = require('mysql2/promise')

async function performquery() {
  const conn = await mysql.createConnection({
    user: 'sampleuser2',
    database: 'sampledb2',
    password: 'samplepass2'
  })
  let param = true; //say it came from req.body.param
  let param2 = '; DROP table tasks;'

  const [rows, cols] = await conn.query(
    'select * from tasks where id > ? or done = ?',
    [param2, param]
  )
  // console.log(JSON.stringify(rows, null, 2))

  // let colHeader = ''
  // for (let col of cols) {
  //   colHeader += col.name + '\t'
  // }

  console.log(cols.reduce((a, c) => a + c.name + '\t', ''))

  rows.forEach(r => console.log(
    cols.map(c => r[ c.name ])  // gives each row as array
      .join('\t') // injects tab in between
    )
  )

  // for (let row of rows) {
  //   console.log(
  //     row[cols[0].name] + '\t' +
  //     row[cols[1].name] + '\t' +
  //     row[cols[2].name])
  // }
  conn.close()
}

performquery()