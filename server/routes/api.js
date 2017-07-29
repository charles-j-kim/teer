var express = require('express');
var router = express.Router();
var ApiController = require('../controllers').api;

router.route('/')
  .get(ApiController.api);


module.exports = router;
