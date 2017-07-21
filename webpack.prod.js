const path = require('path');
const webpack = require('webpack');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CompressionPlugin = require("compression-webpack-plugin");

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = ['react', 'react-dom', 'react-bootstrap', 'react-router-dom', 'react-router', 'react-router-bootstrap']

module.exports = {
  devtool: 'cheap-module-source-map',
  cache: false,
  entry: {
    bundle: './client/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js',
    sourceMapFilename: '[name].map'
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
    new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }),
  new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: true,
      verbose: false
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
compress: {
  warnings: false,
  pure_getters: true,
  unsafe: true,
  unsafe_comps: true,
  screw_ie8: true
  },
comments: false,
sourceMap: false,
mangle: true,
minimize: true,
  exclude: [/\.min\.js$/gi] // skip pre-minified libs
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
    }),
      new BundleAnalyzerPlugin()
]
}
