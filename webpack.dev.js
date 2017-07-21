const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//
module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true&quiet=false',
    path.join(__dirname, 'client', 'index.js')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/'
  },
    watch: true,
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
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'image-webpack-loader', options: {limit: 40000}
          },
          {
            loader: 'url-loader', options: {limit: 100000}
          }
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Health',
      filename: 'index.html',
      template: 'client/index.html'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
