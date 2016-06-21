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
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015-rollup',
            'react'
          ]
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: './public/js'
  },
  plugins
};
