const models = require('../../db/models');

module.exports.charity = function (req, res) {
  models.Charity.where({id: req.params.id}).fetch()
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
