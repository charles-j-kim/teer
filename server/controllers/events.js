const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.allEvents = function(req, res, next) {
  knex.raw(
    `
    SELECT
      ee.img_url,
      ee.name,
      ee.start_date_hr,
      cc.org_name,
      ee.id
    FROM events AS ee
      INNER JOIN users AS uu ON uu.id = ee.host_user_id
      INNER JOIN charities AS cc ON cc.id = uu.charity_id
    ORDER BY ee.end_date_hr
    LIMIT 4
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

module.exports.charityEvents = function(req, res, next) {
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

module.exports.getOne = function(req, res, next) {
  knex
  .raw(
    `SELECT A.img_url, A.name, A.start_date_hr, C.org_name, A.id, A.description, A.location, C.description
    FROM events A
    INNER JOIN users B
    ON A.host_user_id = B.id
    INNER JOIN charities C
    ON B.charity_id = C.id
    WHERE B.charity_id IS NOT NULL
    AND A.id = '${req.params.id}'`)
  .then(events => {
    res.send(events.rows)
  })
  .catch(error => {
    console.log('Error when GET:ing the events for id ' + req.params.id, error);
    res.send(400);
  })
};