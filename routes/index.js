var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Favourite People' });
});
/* GET About Page */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});
/* GET Contact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
