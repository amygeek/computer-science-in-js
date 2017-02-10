var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    './dist/js/BalancedParentheses': './src/js/BalancedParentheses.js',
    './dist/js/BalancedParentheses.min': './src/js/BalancedParentheses.js'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
          warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
