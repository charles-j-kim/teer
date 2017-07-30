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
      params.forEach(function(userId) {
        models.Event.forge()
        .where( {host_user_id: userId})
        .fetchAll()
        .then((event) => {
          console.log(event.models[0].attributes);
        })
      })
    })
  }
}
