
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.static('public'))
app.use(express.static(path.resolve(__dirname, 'styles')))

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(PORT, ()=>{
  console.log('server running');
})
