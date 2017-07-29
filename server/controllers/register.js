var models = require('../../db/models');

module.exports.register = function (req, res, next) {
  models.User.forge({first_name: req.query.first_name, last_name: req.query.last_name, email: req.query.email, password: req.query.password, introduction: req.query.introduction})
  .save()
  .then(function() {
    res.status(200).send('User registered');
  })
  .catch(function(err) {
    res.status(500).send('WARNING: user not registered');
  })
};
