
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000

const app = express()

const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev.js')

const compiler = webpack(config)

const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'client',
  noInfo: true
  // ,  stats: {
  //   colors: true,
  //   progress: true,
  //   chunkModules: false
  // }
})

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))


app.use(express.static('public'))


app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.listen(PORT, ()=>{
  console.log('server running');
})
console.log(process.env.NODE_ENV === undefined);
