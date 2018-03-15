const path = require('path');
require('webpack');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: /components/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ["env", "stage-1", "react"]
      }
    }]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  }
};
