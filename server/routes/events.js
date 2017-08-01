var express = require('express');
var router = express.Router();
var EventsController = require('../controllers').events;

router.route('/')
  .get(EventsController.allEvents);

router.route('/upcoming')
  .get(EventsController.upcomingEvents);

router.route('/:id')
  .get(EventsController.getOne);

router.route('/review/:id')
  .get(EventsController.getReview);

router.route('/charity/:charityId')
  .get(EventsController.charityEvents);

router.route('/volunteer/:volunteerId')
  .get(EventsController.volunteerEvents);


module.exports = router;
