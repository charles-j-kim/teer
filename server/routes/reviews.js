var express = require('express');
var router = express.Router();
var ReviewController = require('../controllers').reviews;

router.route('/charity/:charityId')
  .get(ReviewController.charityReviews);

module.exports = router;
