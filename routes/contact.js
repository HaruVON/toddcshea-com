var express = require('express');
const nm = require('nodemailer')

var router = express.Router();

const GMAIL_USER = proccess.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

router.get('/', function(req, res, next) {
    res.render('contact', {
		fname: '',
		email: '',
		subject: '',
		message: '',
		msg: ''});
});

router.post('/', (req, res) => {

	var msgS = {
		msg: 'Email Sent',
		class: 'black'
	};

	var msgF = {
		msg: 'Error: Email failed to send',
		class: 'red'
	};

	const smtpTrans = nm.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: GMAIL_USER,
			pass: GMAIL_PASS
		}
	})

	const mailOpts = {
		from: `${req.body.email}`,
		to: GMAIL_USER,
		subject: `toddcshea.com: ${req.body.subject}`,
		text: `Name: ${req.body.fname}\nEmail: ${req.body.email}\nSubject: ${req.body.subject}\nMessage:\n${req.body.message}`
	}

	// Attempt to send the email
	smtpTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			console.log('Failed contact form attempt: ')
			console.log(mailOpts)
			res.render('contact', {
				fname: '',
				email: '',
				subject: '',
				message: '',
				msg: msgF});
		}
		else {
			res.render('contact', {
				fname: '',
				email: '',
				subject: '',
				message: '',
				msg: msgS});
		}
	})
})


module.exports = router;