exports.up = function(knex, Promise) {
  return knex.schema.table('charities', function(table) {
    table.string('location', 100).defaultTo('San Francisco, CA');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('charities', function(table) {
    table.dropColumn('location');
  });
};
