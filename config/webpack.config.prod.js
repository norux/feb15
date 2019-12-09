const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const src = resolve('src')

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `packages.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
  plugins: [new CopyWebpackPlugin([{ from: `${src}/css/icons`, to: 'icons' }])],
})
