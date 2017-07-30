exports.up = function(knex, Promise) {
  return knex.schema.table('charities', function(table) {
    table.text('small_img_url').defaultTo('https://www.larbr.com/upload/photos/d-group.jpg');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('charities', function(table) {
    table.dropColumn('small_img_url');
  });
};
