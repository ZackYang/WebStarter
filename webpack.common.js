const path = require('path');
const webpack = require('webpack');
const publicPath = '/';
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web Starter',
      template: './src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin()
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
       test: /\.css$/, use: ['style-loader', 'css-loader'],
       include: /flexboxgrid/
       //Follow instructions at https://github.com/roylee0704/react-flexbox-grid
     },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }]
  },
}
