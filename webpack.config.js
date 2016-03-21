const webpack = require('webpack');

const plugins = [
  new webpack.NoErrorsPlugin()
];

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: './public/js'
  },
  plugins
};
