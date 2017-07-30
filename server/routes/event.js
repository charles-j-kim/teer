var express = require('express');
var router = express.Router();
var EventController = require('../controllers').event;

router.route('/')
  .get(EventController.getAll)
  ;

router.route('/:id')
  .get(EventController.getOne)
  ;

module.exports = router;
