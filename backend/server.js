const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-email', (req, res) => {
    const { firstName, lastName, email, message} = req.body;

    const mailOptions = {
        from: email,
        to: 'skrishnendu115@gmail.com',
        subject: `New Message from ${firstName} ${lastName}`,
        text: `Message from ${firstName} ${lastName}: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) =>{
    
    if (error) {
        console.log('Error:', error);
        return res.status(500).send('Error sending email');
    }
console.log('Email sent:', info.response);
res.status(200).send('Email sent successfully')
});
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });