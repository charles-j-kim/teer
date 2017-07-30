var models = require('../../db/models');

module.exports.events = function(req, res, next) {
  if ( req.query.charity_id ) {
    models.User.forge()
    .where( {charity_id: req.query.charity_id} )
    .fetchAll()
    .then( (users) => {
      var userIds = [];
      users.models.forEach(function(val) {
        userIds.push(val.attributes.id)
      });
      return userIds;
    })
    .then(params => {
      var eventsOutput = [];
      params.forEach(function(userId, idx) {
        models.Event.forge()
        .where( {host_user_id: userId})
        .fetchAll()
        .then((event) => {
          eventsOutput.push({
            name: event.models[0].attributes.name,
            start_date_hr: event.models[0].attributes.start_date_hr,
            end_date_hr: event.models[0].attributes.end_date_hr,
            teer_points: event.models[0].attributes.teer_points
          });
          if ( idx === params.length - 1 ) {
            res.status(200).send(eventsOutput)
          }
        })
      });
    })
  }
}
