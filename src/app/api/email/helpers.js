import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const handleEmail = async (req) => {
  console.log("TEST", process.env.SMTP_HOST);

  try {
    const { submitter, email, message } = await req.json();

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Contact Form Submission: ${submitter}`,
      text: `From: ${submitter}\nEmail: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
};

export default handleEmail;
