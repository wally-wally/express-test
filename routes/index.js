var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/monitor', function(req, res, next) {
  res.render('monitor', { title: 'Monitor Page' });
});

router.get('/init', function(req, res, next) {
  res.render('init', { title: 'Init Page' });
});

router.get('/page01', function(req, res, next) {
  res.render('page01', { title: 'Page01' });
});

router.get('/page02', function(req, res, next) {
  res.render('page02', { title: 'Page02' });
});

router.get('/page03', function(req, res, next) {
  res.render('page03', { title: 'Page03' });
});

module.exports = router;
