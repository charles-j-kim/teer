var models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.getAll = function(req, res, next) {
	knex
	.raw(
		`SELECT A.img_url, A.name, A.start_date_hr, C.org_name, A.id
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
