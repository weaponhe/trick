const fs    = require('fs')
const path  = require('path')
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

console.log(data[1])