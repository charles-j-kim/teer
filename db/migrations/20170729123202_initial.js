exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table) {
      table.increments('id').unsigned().primary();
      table.string('email', 100).notNullable().unique();
      table.string('password', 100).notNullable();
      table.string('first_name', 25).notNullable();
      table.string('last_name', 25).notNullable();
      table.text('introduction').nullable();
      table.text('img_url').defaultTo('https://www.webpagefx.com/data/marketing-persona-generator/img/placeholder.png');
      table.integer('total_teer_points');
      table.string('teer_status', 100).defaultTo('teerX');
      table.integer('charity_id').references('charities.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('charities', function(table) {
      table.increments('id').unsigned().primary();
      table.string('org_name', 100).notNullable();
      table.text('description');
      table.text('cover_img_url').defaultTo('https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/field/image/Types-of-jobs-and-employers-in-charity-work.jpg');
    }),
    knex.schema.createTableIfNotExists('events', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 200).notNullable();
      table.dateTime('start_date_hr').notNullable();
      table.dateTime('end_date_hr').notNullable();
      table.string('location', 100).notNullable();
      table.integer('teer_points').notNullable();
      table.text('description');
      table.decimal('avg_rating').nullable();
      table.integer('host_user_id').references('users.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('reviews', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('reviewer_id').references('users.id').onDelete('CASCADE');
      table.integer('event_id').references('events.id').onDelete('CASCADE');
      table.integer('rating').defaultTo(3);
      table.text('comment').nullable();
    }),
    knex.schema.createTableIfNotExists('volunteer_events', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('volunteer_id').references('users.id').onDelete('CASCADE');
      table.integer('event_id').references('events.id').onDelete('CASCADE');
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('charities'),
    knex.schema.dropTable('events'),
    knex.schema.dropTable('reviews'),
    knex.schema.dropTable('volunteer_events'),
  ]);
};
