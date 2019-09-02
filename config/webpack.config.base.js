const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = resolve('src')
const dist = resolve('dist')

module.exports = {
  entry: {
    feb15: resolve(src, 'index.js'),
  },
  output: {
    path: dist,
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
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
