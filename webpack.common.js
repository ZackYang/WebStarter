const path = require('path');
const webpack = require('webpack');
const publicPath = '/';
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Starter',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],

  output: {
    path: path.join(__dirname, './dist/build/'),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
         // Creates `style` nodes from JS strings
         'style-loader',
         // Translates CSS into CommonJS
         'css-loader',
         // Compiles Sass to CSS
         'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }
    ]
  },
}
