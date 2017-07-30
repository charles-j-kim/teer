  // Hello world API
module.exports.api = require('./api');

// Register new user
module.exports.register = require('./register')

// Login
module.exports.login = require('./login')

// GET page views
module.exports.view = {
  home: require('./home-view').home,
  profile: require('./profile-view').profile,
  charity: require('./charity-view').charity
};

// Events
module.exports.event = require('./event');