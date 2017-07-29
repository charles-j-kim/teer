
exports.seed = function(knex, Promise) {
  return knex('charities').del()
    .then(function () {
      return knex('charities').insert([
        {
          id: 1,
          org_name: 'Red Cross',
          description: 'Each day, thousands of people – people just like you – provide compassionate care to those in need. Our network of generous donors, volunteers and employees share a mission of preventing and relieving suffering, here at home and around the world. We roll up our sleeves and donate time, money and blood. We learn or teach life-saving skills so our communities can be better prepared when the need arises. We do this every day because the Red Cross is needed - every day.',
          cover_img_url: 'http://www.unh.edu/unhtales/wp-content/uploads/2015/02/GWFT_FacebookCoverPhoto.jpg',
        },
        {
          id: 2,
          org_name: 'UNICEF',
          description: 'The United Nations Children’s Fund (UNICEF) works in more than 190 countries and territories to put children first. UNICEF has helped save more children’s lives than any other humanitarian organization by providing health care and immunizations, clean water and sanitation, nutrition, education, emergency relief and more. UNICEF USA supports UNICEF’s work through fundraising, advocacy and education in the United States. Together, we are working toward the day when no children die from preventable causes, and every child has a safe and healthy childhood.',
          cover_img_url: 'https://www.walldevil.com/wallpapers/a81/twitter-cover-unicef-happy-wallpapers-wallpaper.jpg',
        }
      ]);
    });
};
