var express = require('express');
var app = require('./app.js')


var port = 1337;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
