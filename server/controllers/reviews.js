const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.charityReviews = function(req, res) {
  knex.raw(
    `
    SELECT
      ee.name AS event_name,
      rr.rating,
      rr.comment,
      uu.first_name,
      uu.last_name,
      uu.img_url
    FROM reviews AS rr
      INNER JOIN events AS ee ON ee.id = rr.event_id
      INNER JOIN users AS uu ON uu.id = ee.host_user_id
      INNER JOIN charities AS cc ON cc.id = uu.charity_id
    WHERE cc.id = ${req.params.charityId}
    `
  )
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

module.exports.volunteerReviews = function(req, res) {

};