
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          email: 'rowValue1',
          password: 'rowValue1',
          first_name: 'rowValue1',
          last_name: 'rowValue1',
          introduction: 'rowValue1',
          charity_id: 'rowValue1',
        },
        {id: 2, colName: 'rowValue2'},
      ]);
    });
};
