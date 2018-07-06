'use strict'
const path = require("path");
var NODE_ENV = process.env.NODE_ENV || development;
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: NODE_ENV == 'development' ? 'drawtool.js' : 'drawtool.min.js'
  },
  plugins: [
  ],
  optimization: {
    minimize: false
  }
};
if (NODE_ENV === 'production') {
  module.exports.optimization.minimize = true
}