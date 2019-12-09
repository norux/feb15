const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = resolve('src')
const docs = resolve('docs')

module.exports = {
  entry: {
    feb15: resolve(src, 'index.js'),
  },
  output: {
    path: docs,
    publicPath: '/',
  },
  resolve: {
    alias: {
      '~': src,
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(dom7|swiper|@rooks\/use-visibility-sensor)\/).*/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './favicon.ico',
    }),
  ],
}
