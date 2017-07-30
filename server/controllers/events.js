const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.events = function(req, res, next) {
  knex.raw(
    `
    SELECT
      ee.name,
      ee.end_date_hr,
      ee.teer_points
    FROM events AS ee
      INNER JOIN users AS uu ON uu.id = ee.host_user_id
      INNER JOIN charities AS cc ON cc.id = uu.charity_id
    WHERE cc.id = ${req.params.charityId}
    ORDER BY ee.end_date_hr DESC
    `
  )
  .then(response => {
    res.status(200).send(response);
  })
  .error(function(error) {
    res.status(500).send(error);
  })
  .catch(function(error) {
    res.status(404).send(error);
  });
};
