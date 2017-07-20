
const express = require('express');
const app = express()
const path = require('path');

app.use(express.static('public'))


app.get('/*', (req, res)=>{
  const filePath = path.resolve(path.join(__dirname, 'public/index.html'))
  res.sendFile(filePath)
})
app.listen(3000, ()=>{
  console.log('server running');
})
