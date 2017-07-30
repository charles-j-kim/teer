var express = require('express');
var router = express.Router();
var SparkPostController = require('../controllers').sparkPost;

router.route('/')
  .get(SparkPostController.sparkPost);

module.exports = router;
