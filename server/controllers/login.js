var models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.login = function (req, res, next) {
  knex
    .raw(`select * from users where email = '${req.body.email}'`)
    .then((user) => {
      console.log('THE SQL RESULT', user)
      if (user.rows[0] !== undefined) {
        if (user.rows[0].password !== undefined) {
          if (toString(user.rows[0].password) === toString(req.body.password)) {
            res.status(200).send(user.rows[0]);
          } else {
            res.status(403).send('Permission Denied');
          }
        }
      } else {
        res.status(403).send('Permission Denied');
      }
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}
