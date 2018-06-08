const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env => {
  env = env || {};
  return {
      entry: './src/js/index.js',
      output: {
          path: path.resolve(__dirname, "dist"),
      },
      plugins: [
          new HtmlWebpackPlugin({
            title: 'MSU Web and Media',
            minify: {
              collapseWhitespace: true
            },
            template: 'src/index.html'
          })
      ]
  };
};
