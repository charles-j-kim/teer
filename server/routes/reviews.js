var express = require('express');
var router = express.Router();
var ReviewController = require('../controllers').reviews;

router.route('/charity/:charityId')
  .get(ReviewController.charityReviews);

router.route('/volunteer/:volunteerId')
  .get(ReviewController.volunteerReviews);

module.exports = router;
