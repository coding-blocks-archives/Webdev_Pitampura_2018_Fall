const express = require('express');
const path = require('path')

const app = express();

app.use('/files',
  express.static(path.join(__dirname, 'public')))

app.listen(4343, function () {
    console.log("Server started on http://localhost:4343");
});