import nodemailer from "nodemailer";
import { fromEmail, smtpConfig } from "root/config/mailer";
import { SEND_MAIL_TYPE, SENDGRID_API_KEY } from "root/config/env-vars";
import Mail from "nodemailer/lib/mailer";
import sgMail from "@sendgrid/mail";
import { exit } from "process";

let transport: Mail = null;
if (SEND_MAIL_TYPE == "smtp") {
  transport = nodemailer.createTransport(smtpConfig as any);
  console.log(smtpConfig);
} else {
  if (SENDGRID_API_KEY) {
    sgMail.setApiKey(SENDGRID_API_KEY);
  } else {
    console.log("Please check SEND_MAIL_TYPE in .env file\n Please put SMTP config or SENDGRID_API_KEY to .env file\n");
    exit(0);
  }
}
export const sendEmail = async (to: string, subject: string, html: string) => {
  const msg = { from: fromEmail, to, subject, html };
  if (SEND_MAIL_TYPE == "smtp") {
    await transport.sendMail(msg);
  } else {
    await sgMail.send(msg);
  }
};
