const express = require('express');
const path = require('path');
const open = require('open');

let port = 3001;

let app = express();

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
