// For testing production build on local env
const express = require('express');
const path = require('path');
const open = require('open');
// no webpack here
const compression = require('compression');

/* eslint-disable no-console */

let port = 3001;
let app = express();

// to launch GZIP compression for xpress
app.use(compression());
// for serving stat files in dist directory
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Assuming this guy is just for production API
app.get('/users', function(req, res){
  //Hard code to make it simple. Pretend this hits a real DB
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
