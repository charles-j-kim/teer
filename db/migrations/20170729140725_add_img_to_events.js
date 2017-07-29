exports.up = function(knex, Promise) {
  return knex.schema.table('events', function(table) {
    table.text('img_url').defaultTo('https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/field/image/Types-of-jobs-and-employers-in-charity-work.jpg');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', function(table) {
    table.dropColumn('img_url');
  });
};
