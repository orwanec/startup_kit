const path = require('path');
// html-webpack-plugin is used to reference bundled assets in index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const TerserPlugin = require('terser-webpack-plugin');
// to extract CSS from the bundle into a separate chunk
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: 'production',
  devtool: 'source-map',
 //noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  //output after applpying the webpack
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].bundle.js'
  },
  optimization: {
    // Minify JS. But with enabled - it will not create a bundle.js.map
    //minimizer: [new TerserPlugin()]
    splitChunks: {
      // chunk ~ aka. bundle, so we are splitting bundle into smaller chunks
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: 0
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
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
    }),
    new ExtractTextPlugin("styles.[chunkhash].css"),
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
}
