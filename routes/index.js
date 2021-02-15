/** index.js | Aashi Sinha| 301151250| Feb 15, 2021 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Me', menuId:'about'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {page:'Projects', menuId:'projects'});
});

router.get('/services', function(req, res, next) {
  res.render('services', {page:'Services', menuId:'services'});
});


router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Me', menuId:'contact'});
});

module.exports = router;
