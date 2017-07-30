var express = require('express');
var routes = require('./routes');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json({limit: '50mb'}));

// Hello world API
app.use('/api', jsonParser, routes.api);

// Register new user
app.use('/register', jsonParser, routes.register);

// Login
app.use('/login', jsonParser, routes.login);

// GET page views
app.use('/view', jsonParser, routes.view);

// GET events
app.use('/events', jsonParser, routes.events);

// GET reviews
app.use('/reviews', jsonParser, routes.reviews);

module.exports = app;
