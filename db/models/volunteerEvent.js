const db = require('../');

const VolunteerEvent = db.model.extend({
  tableName: 'volunteer_event',
  user: function() {
    return this.belongsTo('User', 'volunteer_id');
  },
  event: function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = db.model('VolunteerEvent', VolunteerEvent);