var express = require('express');
const nm = require('nodemailer')
const bp = require('body-parser')
var router = express.Router();
express().use(bp.urlencoded({extended: true}))


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { page:'Home', menuID:'home' });
});

module.exports = router;