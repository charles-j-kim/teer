
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          email: 'rik@redcross.com',
          password: '123',
          first_name: 'Rik',
          last_name: 'Cross',
          introduction: 'I am a proud member of Red Cross',
          charity_id: 1,
        },
        {
          id: 2,
          email: 'mary@redcross.com',
          password: '123',
          first_name: 'Mary',
          last_name: 'Cross',
          introduction: 'I am a proud member of Red Cross',
          charity_id: 1,
        },
        {
          id: 3,
          email: 'chad@unicef.com',
          password: '123',
          first_name: 'Chad',
          last_name: 'Unicef',
          introduction: 'I am a proud member of UNICEF',
          charity_id: 2,
        },
        {
          id: 4,
          email: 'Jane@redcross.com',
          password: '123',
          first_name: 'Jane',
          last_name: 'Unicef',
          introduction: 'I am a proud member of UNICEF',
          charity_id: 2,
        }
      ]);
    })
  .then(function() {
    return knex('events').del()
      .then(function () {
        return knex('events').insert([
          {
            id: 1,
            name: 'SF Blood Drive',
            start_date_hr: 'August 8 08:00:00 2017 PST',
            end_date_hr: 'August 8 17:00:00 2017 PST',
            location: 'San Francisco, CA',
            teer_points: 100,
            description: 'Donating Blood Makes a Big Difference in the Lives of Others.',
            host_user_id: 1,
          },
          {
            id: 2,
            name: 'Military Families Day',
            start_date_hr: 'August 10 08:00:00 2017 PST',
            end_date_hr: 'August 10 17:00:00 2017 PST',
            location: 'San Mateo, CA',
            teer_points: 100,
            description: 'Help us celebrate those who serve our nation and their families.',
            host_user_id: 2,
          },
          {
            id: 3,
            name: 'UNICEF Campaign @ SF High School',
            start_date_hr: 'August 25 08:00:00 2017 PST',
            end_date_hr: 'August 25 14:00:00 2017 PST',
            location: 'San Francisco, CA',
            teer_points: 80,
            description: 'Help us raising awareness of various UNICEF campaigns at SF High School.',
            host_user_id: 3,
          },
          {
            id: 4,
            name: 'Guerrilla Fundraising',
            start_date_hr: 'August 28 08:00:00 2017 PST',
            end_date_hr: 'August 28 17:00:00 2017 PST',
            location: 'Los Angeles, CA',
            teer_points: 100,
            description: 'Fundraising for children and families affected by extremist activities.',
            host_user_id: 4,
          },
        ]);
      });
  });
};
