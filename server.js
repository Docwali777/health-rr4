
const express = require('express');
const app = express()
const path = require('path');


const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

const compiler = webpack(config)

const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'client',
  noInfo: true,
  stats: {
    colors: true,
  //   progress: true,
    chunkModules: false
  }
})

app.use(middleware)
app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'))
app.use

app.get('/*', (req, res)=>{
  const filePath = path.resolve(path.join(__dirname, 'public/index.html'))
  res.sendFile(filePath)
})
app.listen(3000, ()=>{
  console.log('server running');
})
