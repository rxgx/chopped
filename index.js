const bole = require('bole');
const express = require('express');
const app = express();
const log = bole('thisforthat');

bole.output({
  level: 'info',
  stream: process.stdout
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  log.info('Homepage viewed');
  res.sendFile([__dirname, 'public/index.html'].join('/'));
});

app.use('/js', express.static('public/js'));
app.use('/css', express.static('public/css'));

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  log.info('App listening at http://%s:%s', host, port);
});
