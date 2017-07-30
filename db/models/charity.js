const db = require('../');

const Charity = db.Model.extend({
  tableName: 'charities',
  users: function() {
    return this.hasMany('User', 'charity_id');
  }
});

module.exports = db.model('Charity', Charity);
