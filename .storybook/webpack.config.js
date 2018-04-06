const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      },{
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }],
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    },
    {
      loader: 'url-loader?limit=100000',
      test: /\.(ttf|svg|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      include: path.resolve (__dirname, '../')
    }],
  },
};
