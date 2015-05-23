
module.exports = {

  entry: './index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  externals: {
    'react': 'React'
  }

};

