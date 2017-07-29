var models = require('../../db/models');

module.exports.login = function (req, res, next) {
  // res.status(200).send('WE GONN\' LOGIN YO!');
  // forge Users table
  console.log(req.body)
  models.User.forge()
  .where( {email: req.query.email} )
  .fetchAll()
  .then(function(person) {
    console.log(person);
  })
  // look up email
  // check if username matches
    // if yes, send status 200
    // else send Forbidden status
}
