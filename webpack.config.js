const Dotenv = require('dotenv-webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
require('webpack');

module.exports = {
  entry: [
    'react',
    'react-dom',
    'babel-polyfill',
    path.join(__dirname, 'index.js'),
  ],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /components/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-1', 'react'],
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
    new UglifyJsPlugin({
      parallel: true,
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
