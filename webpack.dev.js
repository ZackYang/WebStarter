const { merge } = require('webpack-merge');
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 9000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: "/"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  }
})
