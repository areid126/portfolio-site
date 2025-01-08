const express = require('express');
const router = express.Router();
require("dotenv").config();

// Nodemailer for sending emails
const mailer = require("nodemailer");
const { MailtrapTransport } = require("mailtrap");

const transport = mailer.createTransport(
    MailtrapTransport({token: process.env.PASS,})
);



// Regex for identifying if something looks like an email
const EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// End point for accepting form results and processing them
router.post('/', async (req, res) => {

    // Check that the request is valid
    if (req.body && req.body.name && req.body.email && req.body.subject && req.body.message && !req.body._gotcha
        && EMAIL.test(req.body.email)) {

        console.log("response received", req.body);
        const sender = { address: "hello@demomailtrap.com", name: `${req.body.name} (${req.body.email})`};
        const recipients = [process.env.RECEIVING_EMAIL];

        // Set up email content
        const email = {
            from: sender, // sender address (who sends)
            to: recipients, // reciver address (who receives)
            subject: `${req.body.subject}`, // Subject line
            text: `${req.body.message} \n\nThank you, \n${req.body.name} \n(${req.body.email})`, // plaintext body
        };

        // Send the email
        transport.sendMail(email, (error, info) => {
            if(error) console.log(error);
            else console.log('Message sent: ' + info.response);


            // Inform the user if the email has been sent successfully
            if (!error) res.status(200).send();
            else res.status(500).send();   
        });
    }
    else if (req.body && !EMAIL.test(req.body.email)) res.status(404).send();
    else if (req.body && req.body._gotcha) res.status(403).send();
    else res.status(400).send();
});

module.exports = router;
