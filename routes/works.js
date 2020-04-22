var express = require('express');
const nm = require('nodemailer')
const bp = require('body-parser')
var router = express.Router();
express().use(bp.urlencoded({extended: true}))

router.get('/works', function(req, res, next) {
    res.render('works');
})

module.exports = router;