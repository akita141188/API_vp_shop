const nodemailer = require("nodemailer");
const config = require("config")

const transporter = nodemailer.createTransport({
  host: config.get("mail.host"),
  port: config.get("mail.port"),
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: config.get("mail.user"),
    pass: config.get("mail.pass"),
  },
});

module.exports = transporter;