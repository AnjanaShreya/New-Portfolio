require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors({
  // origin: 'https://anjanashreya.github.io/New-Portfolio/', \
  origin: 'https://anjanashreya.github.io',
  credentials: true
}));
app.use(bodyParser.json());

// Email configuration with better error handling
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false // For local development only
    }
  });
};

// Contact form endpoint with improved validation
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'All fields are required',
      details: {
        name: !name ? 'Name is required' : undefined,
        email: !email ? 'Email is required' : undefined,
        message: !message ? 'Message is required' : undefined
      }
    });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid email format'
    });
  }

  try {
    const transporter = createTransporter();
    
    // Verify connection configuration
    await transporter.verify();

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: 'chitturianjana@gmail.com',
      replyTo: email,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Full error:', error);
    
    let errorMessage = 'Failed to send message';
    if (error.code === 'EAUTH') {
      errorMessage = 'Authentication failed. Please check email server settings.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server.';
    }

    res.status(500).json({ 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});