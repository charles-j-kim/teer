var models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.getAll = function(req, res, next) {
	knex
	.raw(`SELECT * FROM events`)
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
	.raw(`SELECT * FROM events WHERE id = '${req.params.id}'`)
	.then(events => {
		res.send(events.rows)
	})
	.catch(error => {
		console.log('Error when GET:ing the events for id ' + req.params.id, error);
		res.send(400);
	})
};