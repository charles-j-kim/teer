var express = require('express');
var router = express.Router();
var EventsController = require('../controllers').events;

router.route('/charity/:charityId')
  .get(EventsController.events);


module.exports = router;
