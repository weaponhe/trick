const fs    = require('fs')
let path    = require('path');
let express = require('express');
let app     = express();

//read data
let baseDir = path.resolve(__dirname, '../data')
let data    = []
let folders = fs.readdirSync(baseDir)
folders.forEach((folderName) =>
{
  let folderObj = {name: folderName, files: []}
  let files     = fs.readdirSync(path.resolve(baseDir, folderName))
  files.forEach((fileName) =>
  {
    let fileObj     = {name: fileName}
    fileObj.content = fs.readFileSync(path.resolve(baseDir, folderName, fileName), 'utf-8')
    folderObj.files.push(fileObj)
  })
  data.push(folderObj)
})

app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('/', function (req, res)
{
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.get('/data', function (req, res)
{
  res.json(data)
});

let server = app.listen(8080, function ()
{
  let host = server.address().address;
  let port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});

