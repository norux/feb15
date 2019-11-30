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
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module)  {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `packages.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
}
