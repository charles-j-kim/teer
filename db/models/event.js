const db = require('../');

const Event = db.Model.extend({
  tableName: 'events',
  volunteerEvents: function() {
    return this.hasMany('VolunteerEvent', 'event_id');
  },
  reviews: function() {
    return this.hasMany('Review', 'event_id');
  },
  user: function() {
    return this.belongsTo('User', 'host_user_id');
  }
});

module.exports = db.model('Event', Event);
