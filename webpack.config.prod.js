const path = require('path');
// html-webpack-plugin is used to reference bundled assets in index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
 //noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  optimization: {
    // Minify JS. But with enabled - it will not create a bundle.js.map
    //minimizer: [new TerserPlugin()]
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedunduntAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJs: true,
        minifyCss: true,
        minifyURLs: true
      },
      inject: true
    })
    // Outdated in a new webpack
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //loaders: ['babel']
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  }
}
