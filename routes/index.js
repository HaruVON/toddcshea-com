var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { page:'Home', menuID:'home' });
});

router.get('/works', function(req, res, next) {
    res.render('works');
})

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

module.exports = router;
