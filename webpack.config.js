const HtmlWebpackPlugin = require('html-webpack-plugin'), VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
      { test: /\.s[a|c]ss$/, use: ['style-loader', 'vue-style-loader', 'css-loader', 'sass-loader']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new VueLoaderPlugin(),
  ]
};

// brew install libpng para algumas versões do OSX