const db = require('../');

const Review = db.Model.extend({
  tableName: 'reviews',
  user: function() {
    this.belongsTo('User', 'reviewer_id');
  },
  event: function() {
    this.belongsTo('Event', 'event_id');
  }
});

module.exports = db.model('Review', Review);
