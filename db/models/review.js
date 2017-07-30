const db = require('../');

const Review = db.Model.extend({
  tableName: 'reviews',
  user: function() {
    return this.belongsTo('User', 'reviewer_id');
  },
  event: function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = db.model('Review', Review);
