const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.join(__dirname, 'index.js')],
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
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
    }],
  },
  plugins: [
    new Dotenv(),
    new UglifyJsPlugin({
      parallel: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].js',
      minChunks (module) {
        return module.context &&
               module.context.indexOf('node_modules') >= 0;
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};

