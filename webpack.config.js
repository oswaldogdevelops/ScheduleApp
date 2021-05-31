const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
      path: path.resolve(__dirname , "dist"),
      filename: 'bundle.js',
  },
  resolve:{
      extensions: ['.js','.jsx'],
  },
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
          }
      ],
  },
 plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        }),
      ],
 optimization: {
   minimize: true,
   minimizer:[new CssMinimizerPlugin()],
 }


}