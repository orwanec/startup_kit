const path = require('path');

module.exports = {
  //debug: true,
  devtool: 'inline-source-map',
 //noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //loaders: ['babel']
      },
      {
        test: /\.css$/,
        use: {
          loader: "css"
        }
      }
    ]
  }
}
