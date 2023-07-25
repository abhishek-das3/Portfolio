// Express.js setup
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Route handling
app.get('/', (req, res) => {
  res.render('index.html');
});

// app.post('/send', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a transporter using SMTP settings
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'Your email address',
//       pass: 'Your email password',
//     },
//   });

//   // Prepare the email message
//   const mailOptions = {
//     from: email,
//     to: 'Recipient email address',
//     subject: 'New form submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.send('Email sent');
//     }
//   });
// });

// const hostname = '192.168.54.189';
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
