const PrettierPlugin = require('prettier-webpack-plugin');
const loaders = require('./loaders');
const path = require('path');
const fs = require('fs');

module.exports = {
  context: path.resolve(__dirname, '../source'),

  entry: './index.js',

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, '../build/js')
  },

  module: {
    loaders: [loaders.style, loaders.babel]
  },

  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    alias: {
      '@comps': path.resolve(__dirname, '../source/comps'),
      '@styles': path.resolve(__dirname, '../source/styles')
    }
  },

  plugins: [
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 1,
      useTabs: true,
      semi: true,
      encoding: 'utf-8',
      extensions: ['.js']
    })
  ]
};
