const webpack = require('webpack')
const resolve = require('./utils').resolve
const srcPath = resolve('../server')
let config = {
  entry: {
    index: resolve(srcPath, 'index.js'),
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash].min.js',
  },
  module: {
    rules: [
      // only lint local *.vue files
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL)
    }),
  ]
}

module.exports = config
