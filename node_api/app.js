var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


const port = 4100;


var users = require('./routes/users');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);

app.get('/', (req, res) => {
  res.json({
    "statusCode" : 200,
    "statusMessage" : "API is working!"
  }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
