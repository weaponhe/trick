let path    = require('path');
let express = require('express');
let app     = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('/', function (req, res)
{
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

let server = app.listen(3000, function ()
{
  let host = server.address().address;
  let port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});

