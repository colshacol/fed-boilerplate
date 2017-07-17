const PrettierPlugin = require('prettier-webpack-plugin');
const loaders = require('./loaders');
const childProcess = require('child_process');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
  watch: false,
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '../source'),

  entry: './index.js',

  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, '../build')
  },

  module: {
    loaders: [loaders.style, loaders.babel]
  },

  resolve: {
    modules: [path.resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.json', '.styl', '.css'],
    alias: {
      '@comps': path.resolve(__dirname, '../source/comps'),
      '@styles': path.resolve(__dirname, '../source/styles')
    }
  },

  plugins: [
    // new webpack.ProgressPlugin((percentage, msg) => {
    //   if (percentage == 0) {
    //       console.log('\n\n\Webpack::pre-hook:a\n\n\n');
    //   } else if (percentage == 1) {
    //     setTimeout(() => {
    //       console.log('\n\n\nWebpack::post-hook:\n\n\n');
    //       jest.run();
    //     }, 1000);
    //   }
    // })
  ],

  devServer: {
    hot: true,
    overlay: true,
    lazy: true,
    publicPath: 'http://localhost:3000/',
    contentBase: path.resolve(__dirname, '../build')
  },

  watchOptions: {
    watch: false
    // poll: 3000
  }
};
