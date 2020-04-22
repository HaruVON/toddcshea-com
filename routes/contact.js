var express = require('express');
var router = express.Router();
const nm = require('nodemailer')
const bp = require('body-parser')
express().use(bp.urlencoded({extended: true}))

router.get('/contact', function(req, res, next) {
    res.render('contact');
});

router.post('/send', (req, res) => {

	const GMAIL_USER = proccess.env.GMAIL_USER
	const GMAIL_PASS = process.env.GMAIL_PASS

	const smtpTrans = nm.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: GMAIL_USER,
			pass: GMAIL_PASS
		}
	})

	console.log("creating message")
	const mailOpts = {
		from: `${req.body.email}`,
		to: GMAIL_USER,
		subject: `toddcshea.com: ${req.body.subject}`,
		text: `Name: ${req.body.fname}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage:\n${req.body.message}`
	}

	// Attempt to send the email
	smtpTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			// catch 404 and forward to error handler
			app.use(function(req, res, next) {
				next(createError(404));
			});
			
			// error handler
			app.use(function(err, req, res, next) {
				// set locals, only providing error in development
				res.locals.message = err.message;
				res.locals.error = req.app.get('env') === 'development' ? err : {};
			
				// render the error page
				res.status(err.status || 500);
				res.render('error');
			});
		}
		else {
			res.render
		}
	})
})


module.exports = router;