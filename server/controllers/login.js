var models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.login = function (req, res, next) {
  knex
    .raw(`select * from users where email = '${req.body.email}'`)
    .then((user) => {
      if ( user.rows[0].password ) {
        if ( toString(user.rows[0].password) === toString(req.body.password) ) {
          res.status(200).send('Login Authenticated');
        }
      } else {
        res.status(403).send('Permission Denied');
      }
    });
}
