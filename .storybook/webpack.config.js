const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.ContextReplacementPlugin(
      /highlight.js\/lib\/languages$/,
      new RegExp(`^./(javascript)$`),
    ),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        loader: 'url-loader?limit=100000',
        test: /\.(ttf|svg|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
  resolve: {
    alias: {
      'styled-components': path.resolve(
        __dirname,
        '../node_modules/styled-components',
      ),
    },
  },
};
