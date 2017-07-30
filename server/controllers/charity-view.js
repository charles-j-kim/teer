const models = require('../../db/models');

module.exports.charity = function (req, res) {
  console.log(req.params);
  models.Charity.where({id: req.params.id})
  .fetchAll({
    withRelated: [
      {
        'users': function(qb) {
          qb.select();
        }
      },
      {
        'users.events': function(qb) {
          qb.select();
        }
      },
      {
        'users.events.reviews': function(qb) {
          qb.select();
        }
      }
    ]
  })
  .then(function(result) {
    res.status(200).send(result);
  })
  .error(function(error) {
    res.status(500).send(error);
  })
  .catch(function(error) {
    res.status(404).send(error);
  });
};
