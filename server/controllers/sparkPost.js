var SparkPost = require('sparkpost');
var client = new SparkPost('1b4e9d615435f571dc52d48511579c33392343ac');

module.exports.sparkPost = function(req, res, next) {

client.transmissions.send({
    options: {
      sandbox: false
    },
    content: {
      from: 'testing@sparkpostbox.com',
      subject: 'Hello, World!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'rajas.p.kale@gmail.com'}
    ]
  })
  .then(data => {
    console.log('Woohoo! You just sent your first mailing!');
    console.log(data);
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log(err);
  });
}
