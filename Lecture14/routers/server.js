const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')

app.use('/mentors', require('./routes/teachers'))
app.use('/students', require('./routes/students'))
app.use('/courses', require('./routes/courses'))

app.listen(4123, function () {
    console.log("Server started on http://localhost:4123");
});

"sudo apt-get install mysql-server"
