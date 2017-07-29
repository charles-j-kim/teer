var express = require('express');
var router = express.Router();
var RegisterController = require('../controllers').register;

router.route('/')
  .post(RegisterController.register);


module.exports = router;
