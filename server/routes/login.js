var express = require('express');
var router = express.Router();
var LoginController = require('../controllers').login;

router.route('/')
  .post(LoginController.login);


module.exports = router;
