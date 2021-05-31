const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
      path: path.resolve(__dirname , "dist"),
      filename: 'bundle.js',
      publicPath: '/'
  },
  resolve:{
      extensions: ['.js','.jsx'],
  },
  mode: 'development',
  module: {
      rules: [ 
          {
            use: 'babel-loader',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
          },
          {
            use: ['style-loader','css-loader','sass-loader'],
            test: /.(css|sass|scss)$/,
          },
          {
            type: 'asset',
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
           
          },
      ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3006,
    open: 'chrome',
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
 plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        }),
      ],
 


}