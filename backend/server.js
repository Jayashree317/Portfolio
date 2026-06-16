const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Check Environment Variables
app.get("/env-check", (req, res) => {
  res.json({
    emailUserExists: !!process.env.EMAIL_USER,
    emailPassExists: !!process.env.EMAIL_PASS,
  });
});

// Home Route
app.get("/", (req, res) => {
  res.send("Portfolio Backend Running Successfully");
});

// Contact Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();
    console.log("SMTP connection successful");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("Email error:", err);
    console.error("Email error message:", err.message);

    res.status(500).json({
      error: "Failed to send message",
      details: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});