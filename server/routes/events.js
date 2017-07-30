var express = require('express');
var router = express.Router();
var EventsController = require('../controllers').events;

router.route('/')
  .get(EventsController.allEvents);

router.route('/charity/:charityId')
  .get(EventsController.charityEvents);


module.exports = router;
