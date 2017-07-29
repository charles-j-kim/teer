const db = require('../');

const Charity = db.model.extend({
  tableName: 'charities',
  users: function() {
    this.hasMany('User', 'charity_id');
  }
});

module.exports = db.model('Charity', Charity);