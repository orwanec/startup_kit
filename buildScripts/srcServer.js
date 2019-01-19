const express = require('express');
const path = require('path');
const open = require('open');

const webpack = require('webpack');
const config = require('../webpack.config.dev');
/* eslint-disable no-console */

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

// Assuming this guy is just for production API
app.get('/users', function(req, res){
  //Hard code to make it simple and that we should avoid in production
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Dilan","email":"adam@gmail.com"},
    {"id": 2,"firstName":"Den","lastName":"Smith","email":"den@gmail.com"},
    {"id": 3,"firstName":"John","lastName":"Lake","email":"john@gmail.com"}
  ]);
});

app.listen(port, function(err){
  if (err){
    console.log('some error appeared: ' + err);
  } else {
    open('http://localhost:' + port);
  }
});
