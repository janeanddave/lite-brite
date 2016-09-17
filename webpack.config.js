var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel'
      },
      {
        test: /\.html/,
        loader: 'html'
      },
      {
        test: /\.css/,
        loaders: ['style', 'css']
      }
    ]
  },
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};
