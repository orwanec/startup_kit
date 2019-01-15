const express = require('express');
const path = require('path');
const open = require('open');

const webpack = require('webpack');
const config = require('../webpack.config.dev');

let port = 3001;
let app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err){
    console.log('some error appeared: ' + err);
  } else {
    open('http://localhost:' + port);
  }
});
