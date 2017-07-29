const db = require('../');

const User = db.Model.extend({
  tableName: 'users',
  volunteerEvents: function() {
    return this.hasMany('VolunteerEvent', 'volunteer_id');
  },
  events: function() {
    return this.hasMany('Event', 'host_user_id');
  },
  reviews: function() {
    return this.hasMany('Review', 'reviewer_id');
  },
  charity: function() {
    return this.belongsTo('Charity', 'charity_id');
  }
});

module.exports = db.model('User', User);