var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

// Hello world API
app.use('/api', routes.api);

// Register new user
app.use('/register', routes.register);

// Login
app.use('/login', routes.login);



module.exports = app;
