const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  //Entry point
  entry: {
    bundle: path.resolve(__dirname, './src/index.js'),
  },

  //Output
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  //webpack-dev-server
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  //Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  //configuring css loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
};
