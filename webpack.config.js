const path = require('path');
const webpack = require('webpack');

/*
default location for webpack entry point: './src/index.js'
that file doesn't exist because of express (different file structure)
*/

module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: '/.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
