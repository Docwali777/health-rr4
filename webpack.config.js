//---PROD

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
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
new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}



// module.exports = function(env){
//   console.log(env)
// require(`./webpack.${env}.js`)
// }
//-----dev


// const path = require('path');
// const webpack = require('webpack');
//
// module.exports = {
//   entry: [
//       'webpack-hot-middleware/client?reload=true',
//     path.join(__dirname, 'client', 'index.js')
//   ],
//   watch: true,
//   output: {
//     filename: 'bundle.js',
//     path: path.join(__dirname, 'public'),
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2015', 'react', 'stage-1']
//         }
//       },
//       {
//         test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
//         use: [
//           {
//             loader: 'image-webpack-loader', options: {limit: 40000}
//           },
//           {
//             loader: 'url-loader', options: {limit: 100000}
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.HotModuleReplacementPlugin()
//   ]
// }
