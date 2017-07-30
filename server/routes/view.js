var express = require('express');
var router = express.Router();
var ViewController = require('../controllers').view;

router.route('/home')
  .get(ViewController.home);

router.route('/profile')
  .get(ViewController.profile);

router.route('/charity/:id')
  .get(ViewController.charity);


module.exports = router;
