import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

export const sendEmail = async (toEmail, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: `"UptimePulse" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: subject,
      text: text,
    });

    console.log("✅ Alert sent:", info.response);
  } catch (err) {
    console.error("❌ Failed to send alert:", err);
  }
};
