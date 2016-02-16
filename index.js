var bole = require('bole');
var express = require('express');
var app = express();
var log = bole('thisforthat');

bole.output({
  level: 'info',
  stream: process.stdout
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  log.info('Homepage viewed');
  res.sendFile([__dirname, 'public/index.html'].join('/'));
});

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  log.info('App listening at http://%s:%s', host, port);
});
