
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
          introduction: 'I am a proud member of Red Cross, a volunteer-led, humanitarian organization that helps people prevent, prepare for, and respond to emergencies.',
          charity_id: 1,
          img_url: 'https://vignette4.wikia.nocookie.net/rickandmorty/images/d/dd/Rick.png/revision/latest?cb=20131230003659'
        },
        {
          id: 2,
          email: 'mary@redcross.com',
          password: '123',
          first_name: 'Mary',
          last_name: 'Cross',
          introduction: 'I am a part of Red Cross. I provide support to Department Director, Regional Manager and 8 Territory Managers, prepare and order blood drive collaterals for the region, manage inventory and distribution of donor premiums/giveaway.',
          charity_id: 1,
          img_url: 'http://i.telegraph.co.uk/multimedia/archive/02506/mary-riddell2_2506412f.jpg'
        },
        {
          id: 3,
          email: 'chad@unicef.com',
          password: '123',
          first_name: 'Chad',
          last_name: 'Unicef',
          introduction: 'I am a proud member of UNICEF. I collaborated with producers and the chief medical correspondent, Dr. Jon LaPook, to develop stories for the leading television news network for 8.6 million viewers nationwide, researched stories, fact checked medical content, and participate in news meeting with the executive producer and the Evening News producers.',
          charity_id: 2,
          img_url: 'https://vignette1.wikia.nocookie.net/thegungancouncil/images/3/32/Chad-michael-murray-profile.png/revision/latest?cb=20120118203623'
        },
        {
          id: 4,
          email: 'jane@redcross.com',
          password: '123',
          first_name: 'Jane',
          last_name: 'Unicef',
          introduction: 'I currently work at UNICEF NYHQ to help countries strengthen routine immunization systems and support the introduction of new and underutilized vaccines through advocacy, evidence-based planning, communication training, community dialogue, and monitoring and evaluation of results.',
          charity_id: 2,
          img_url: 'http://www.american.edu/uploads/profiles/large/Jane_Palmer_030arw3_2.JPG'
        },
        {
          id: 5,
          email: 'charles@example.com',
          password: '123',
          first_name: 'Charles',
          last_name: 'Kim',
          introduction: 'I love helping people in any way possible.',
          img_url: 'https://pbs.twimg.com/profile_images/2583123891/5dqw7h79pcqm5feep303_400x400.png'
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
            start_date_hr: 'July 1 08:00:00 2017 PST',
            end_date_hr: 'July 1 17:00:00 2017 PST',
            location: 'San Francisco, CA',
            teer_points: 100,
            description: 'Donating Blood Makes a Big Difference in the Lives of Others.',
            host_user_id: 1,
            event_img_url: 'http://ww3.hdnux.com/photos/37/50/53/8293110/15/920x920.jpg'
          },
          {
            id: 2,
            name: 'Military Families Day',
            start_date_hr: 'July 7 08:00:00 2017 PST',
            end_date_hr: 'July 7 17:00:00 2017 PST',
            location: 'San Mateo, CA',
            teer_points: 100,
            description: 'Help us celebrate those who serve our nation and their families.',
            host_user_id: 2,
            event_img_url: 'https://media.defense.gov/2014/Nov/19/2000953656/600/400/0/141102-A-PT083-002.JPG'
          },
          {
            id: 3,
            name: 'UNICEF Campaign @ SF High School',
            start_date_hr: 'July 25 08:00:00 2017 PST',
            end_date_hr: 'July 25 14:00:00 2017 PST',
            location: 'San Francisco, CA',
            teer_points: 80,
            description: 'Help us raising awareness of various UNICEF campaigns at SF High School.',
            host_user_id: 3,
            event_img_url: 'https://www.unicefusa.org/sites/default/files/styles/landing_feature_940x342/public/field-images/club-feature-image/2015/5kPA.JPG?itok=llb5uCVH'
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
            event_img_url: 'https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/field/image/Types-of-jobs-and-employers-in-charity-work.jpg'
          },
          {
            id: 5,
            name: 'The Generous Food Truck',
            start_date_hr: 'September 2 08:00:00 2017 PST',
            end_date_hr: 'September 2 17:00:00 2017 PST',
            location: 'Los Angeles, CA',
            teer_points: 100,
            description: 'Serving food to homeless in the region.',
            host_user_id: 4,
            event_img_url: 'https://larkinsquare.com/app/uploads/2016/06/lomo-lomo-food-truck.png'
          },
          {
            id: 6,
            name: 'Stamp Sales Fund Raising',
            start_date_hr: 'September 28 08:00:00 2017 PST',
            end_date_hr: 'September 28 17:00:00 2017 PST',
            location: 'Chicago, IL',
            teer_points: 100,
            description: 'Fundraising for starved children by selling annual UNICEF post stamps.',
            host_user_id: 4,
            event_img_url: 'https://www.stampcommunity.org/uploaded/jamesw/20120116_unicef3.jpg'
          },
        ]);
      });
  })
  .then(function() {
    return knex('reviews').insert([
      {
        id: 1,
        reviewer_id: 5,
        event_id: 1,
        comment: 'It was a great opportunity. I would do it again! Thank you Red Cross for organizing the event!'
      },
      {
        id: 2,
        reviewer_id: 4,
        event_id: 1,
        comment: 'I had such a meaningful time:) It is always good to be participating in a fellow charity event.'
      },
      {
        id: 3,
        reviewer_id: 5,
        event_id: 2,
        comment: 'A well organized, applause-deserving event. Humbled by the experience.'
      },
      {
        id: 4,
        reviewer_id: 4,
        event_id: 2,
        comment: 'I had such a meaningful time:) It is always good to be participating in a fellow charity event.'
      },
      {
        id: 5,
        reviewer_id: 5,
        event_id: 3,
        comment: 'Always glad to be help in these events. Thank you UNICEF for organizing the event!'
      },
      {
        id: 6,
        reviewer_id: 1,
        event_id: 3,
        comment: 'I had such a meaningful time:) It is always good to be participating in a fellow charity event.'
      },
    ]);
  })
  .then(function () {
    return knex('volunteer_events').insert([
      {
        id: 1,
        volunteer_id: 5,
        event_id: 1
      },
      {
        id: 2,
        volunteer_id: 5,
        event_id: 2
      },
      {
        id: 3,
        volunteer_id: 5,
        event_id: 3
      },
      {
        id: 4,
        volunteer_id: 5,
        event_id: 4
      },
      {
        id: 5,
        volunteer_id: 5,
        event_id: 5
      },
      {
        id: 6,
        volunteer_id: 5,
        event_id: 6
      },
      {
        id: 7,
        volunteer_id: 4,
        event_id: 1
      },
      {
        id: 8,
        volunteer_id: 4,
        event_id: 2
      },
      {
        id: 9,
        volunteer_id: 4,
        event_id: 6
      },
      {
        id: 10,
        volunteer_id: 1,
        event_id: 3
      },
    ]);
  });
};
