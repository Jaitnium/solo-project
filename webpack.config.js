// What are the main things we want this webpack config to do?
// Compile the latest and greatest JavaScript to a version the browser understands
// Import styles and compile SCSS into CSS
// Import images and fonts
// (Optional) Set up React or Vue
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Remove/clean build folders
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// babel-loader - Transpile files with Babel and webpack.
// @babel/core - Transpile ES2015+ to backwards compatible JavaScript
// @babel/preset-env - Smart defaults for Babel
// @babel/plugin-proposal-class-properties - An example of a custom Babel config (use properties directly on a class)

module.exports = {
  // what file or files webpack will look at to compile
  entry: {
    main: path.resolve(__dirname, './client/index.js'),
  },
  // the output where the bundle file will resolve
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // JavaScript transpilation
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // Creates index.html in /build with bundle.js loaded into it
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './index.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
}