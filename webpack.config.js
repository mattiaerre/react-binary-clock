const path = require('path');

module.exports = {
  entry: './src/Demo.jsx',
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel']
      }
    ]
  }
};
