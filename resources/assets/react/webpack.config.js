const path = require('path');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: [
      'whatwg-fetch',
      './src/index.js',
      './src/index.sass'
    ]
  },

  output: {
    path: path.resolve(__dirname, "../../../public/react"),
    filename: "[name].js",
  },

  // watch: true,

  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?url=false', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
     filename: '[name].css'
    })
  ]
}
