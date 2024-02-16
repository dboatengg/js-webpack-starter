const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  //Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
    }),
  ],
};
