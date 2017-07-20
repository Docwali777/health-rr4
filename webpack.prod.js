const path = require('path');
const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const VENDOR_LIBS = ['react', 'react-dom', 'react-bootstrap', 'react-router-dom', 'react-router', 'react-router-bootstrap']

module.exports = {
  entry: {
    bundle: './client/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader', options: {limit: 40000}
          },
          {
            loader: 'url-loader', options: {limit: 100000}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
compress: { warnings: false },
comments: false,
sourceMap: false,
mangle: true,
minimize: true
}),
new CleanWebpackPlugin(['public'],{
verbose: true,
dry: false
}),
new webpack.optimize.CommonsChunkPlugin({
name: ['vendor', 'manifest']
}),
new HtmlWebpackPlugin({
  title: 'Health',
  filename: 'index.html',
  template: 'client/index.html'
}),
new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
]
}
