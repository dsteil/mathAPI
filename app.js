var express = require('express');
var app = express();

app.use(require('./api'))

app.get('/', function (req, res) {
//  res.send('Hello World!');
	res.sendFile(__dirname + '/index.html');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
