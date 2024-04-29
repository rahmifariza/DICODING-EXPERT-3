/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    // open: true,
    port: 9000,
    compress: true,
  },
});
