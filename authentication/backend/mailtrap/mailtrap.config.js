import { createTransport } from "nodemailer";

import dotenv from "dotenv";

dotenv.config();

export const  transporter =createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Set up email data
export const sender = {
    name: "Tamizh",
    email: "verifyuserofficial@gmail.com",
};



// const mailOptions = {
//   from: `"${sender.name}" <${sender.email}>`, // sender address
//   to: recipients.map((recipient) => recipient.email).join(","), // list of receivers
//   subject: "You are awesome!", // Subject line
//   text: "Congrats for sending a test email!", // plain text body
//   // html: '<b>Congrats for sending a test email!</b>' // Uncomment for HTML body
// };

// Send email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     return console.error("Error occurred: " + error.message);
//   }
//   console.log("Message sent: %s", info.messageId);
// });
