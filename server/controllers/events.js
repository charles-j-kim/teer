var models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.charityEvents = function(req, res, next) {
  console.log(req.params.charityId)
  knex.raw(
    `
    SELECT
      ee.name,
      ee.start_date_hr,
      ee.end_date_hr,
      ee.teer_points,
      ee.id
    FROM events AS ee
      INNER JOIN users AS uu ON uu.id = ee.host_user_id
      INNER JOIN charities AS cc ON cc.id = uu.charity_id
    WHERE cc.id = ${req.params.charityId}
    ORDER BY ee.end_date_hr DESC
    `
  )
  .then(response => {
    // response.rows[0].comment = [response.rows[0].comment]
    // console.log(response.rows)
    // for ( var i = 1; i < response.rows.length; i++ ) {
    //   response.rows[0].comment.push(response.rows[i].comment)
    // }
    res.status(200).send(response);
  })
  .error(function(error) {
    res.status(500).send(error);
  })
  .catch(function(error) {
    res.status(404).send(error);
  });
};

module.exports.volunteerEvents = function(req, res, next) {
  knex.raw(
    `
    SELECT
      ee.name AS event_name,
      ee.end_date_hr,
      ee.teer_points,
      rr.created_at AS review_date,
      rr.rating,
      rr.comment
    FROM events AS ee
      INNER JOIN volunteer_events AS ve ON ve.event_id = ee.id
      INNER JOIN users AS uu ON uu.id = ve.volunteer_id
      LEFT JOIN reviews AS rr ON (rr.event_id = ee.id AND rr.reviewer_id = uu.id)
    WHERE ve.volunteer_id = ${req.params.volunteerId}
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

module.exports.allEvents = function(req, res, next) {
	knex
	.raw(
		`SELECT A.img_url, A.name, A.start_date_hr, C.org_name, A.id, C.id AS charity_id
		FROM events A
		INNER JOIN users B
		ON A.host_user_id = B.id
		INNER JOIN charities C
		ON B.charity_id = C.id
		WHERE B.charity_id IS NOT NULL`)
	.then(events => {
		res.send(events.rows)
	})
	.catch(error => {
		console.log('Error when GET:ing the events ', error);
		res.send(400);
	})
};

module.exports.getOne = function(req, res, next) {
	knex
	.raw(
		`SELECT A.img_url, A.name, A.start_date_hr, C.org_name, A.id, A.description, A.location, C.description, C.id AS org_id
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

module.exports.getReview = function(req, res, next) {
	knex
	.raw(
		`SELECT A.id, B.first_name, B.img_url, R.comment
		FROM events A
    INNER JOIN reviews R
    ON R.event_id = A.id
		INNER JOIN users B
		ON A.host_user_id = B.id
		AND A.id = '${req.params.id}'`)
	.then(events => {
		res.send(events.rows)
	})
	.catch(error => {
		console.log('Error when GET:ing the events for id ' + req.params.id, error);
		res.send(400);
	})
};


// module.exports.charityEvents = function(req, res, next) {
//   console.log(req.params.charityId)
//   knex.raw(
//     `
//     SELECT
//       ee.name,
//       ee.start_date_hr,
//       ee.end_date_hr,
//       ee.teer_points,
//       rr.comment
//     FROM events AS ee
//       INNER JOIN users AS uu ON uu.id = ee.host_user_id
//       INNER JOIN charities AS cc ON cc.id = uu.charity_id
//       INNER JOIN reviews AS rr ON rr.event_id = ee.id
//     WHERE cc.id = ${req.params.charityId}
//     ORDER BY ee.end_date_hr DESC
//     `
//   )
//   .then(response => {
//     response.rows[0].comment = [response.rows[0].comment]
//     console.log(response.rows)
//     for ( var i = 1; i < response.rows.length; i++ ) {
//       response.rows[0].comment.push(response.rows[i].comment)
//     }
//     res.status(200).send(response.rows[0]);
//   })
//   .error(function(error) {
//     res.status(500).send(error);
//   })
//   .catch(function(error) {
//     res.status(404).send(error);
//   });
// };
