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
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
