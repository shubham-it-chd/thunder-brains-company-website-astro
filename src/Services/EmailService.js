"use strict";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 587,
  secure: false,
  auth: {
    user: import.meta.env.SECRET_EMAIL_USERNAME,
    pass: import.meta.env.SECRET_EMAIL_PASS,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail() {
  console.log("started sendEmail");
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "contact-us@thunderbrains.in", // sender address
    to: "abhishek.sharma@thunderbrains.in", // list of receivers
    subject: "Lead - Contact Us Website", // Subject line
    html: "<b>Hello world?</b>", // html body
  });
  console.log("eneded sendEmail");
  console.log("Message sent: %s", info.messageId);
}

export { sendEmail };
