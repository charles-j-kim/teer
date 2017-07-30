const knex = require('knex')(require('../../knexfile'));

module.exports.registerToEvent = function(req, res, next) {
	knex
	.raw(
    `INSERT INTO volunteer_events
    ('volunteer_id', 'event_id') VALUES
    (${req.body.userId}, ${req.body.eventId})`
  )
  .then(response => {
    res.status(200).send('User registered for event');
  })
  .catch(error => {
    res.send(error);
  })
};
