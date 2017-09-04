const webpack = require('webpack');

const plugins = [new webpack.NoEmitOnErrorsPlugin()];

module.exports = [
  {
    entry: {
      app: `${__dirname}/src/index.js`
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
      path: `${__dirname}/public/js`
    },
    plugins
  }
];
