const db = require('../');

const Event = db.Model.extend({
  tableName: 'events',
  volunteerEvents: function() {
    this.hasMany('VolunteerEvent', 'event_id');
  },
  reviews: function() {
    this.hasMany('Review', 'event_id');
  },
  user: function() {
    this.belongsTo('User', 'host_user_id');
  }
});

module.exports = db.model('Event', Event);
