const path = require('path');

module.exports = {
  entry: './demo/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'demo')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'demo')
      }
    ]
  }
};
