var models = require('../../db/models');

module.exports.register = function (req, res, next) {
  models.User.forge( {first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, introduction: req.body.introduction} )
  .save()
  .then(function() {
    res.status(200).send('User registered');
  })
  .catch(function(err) {
  	console.log(err);
    res.status(500).send('WARNING: user not registered');
  })
};
