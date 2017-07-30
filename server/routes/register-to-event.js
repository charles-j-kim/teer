var express = require('express');
var router = express.Router();
var RegisterToEventController = require('../controllers').registerToEvent;

router.route('/')
  .post(RegisterToEventController.registerToEvent);


module.exports = router;
