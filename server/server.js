const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio';

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Allow Vite frontend in development
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('Successfully connected to MongoDB database.'))
  .catch((err) => console.error('MongoDB connection error details:', err));

// Mongoose Schema & Model
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  message: {
    type: String,
    required: [true, 'Message content is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ContactMessage = mongoose.model('ContactMessage', contactSchema);

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.req ? req.req.body : req.body; // Safe fallback
    
    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide name, email, and message.' 
      });
    }

    // Save to DB
    const newMessage = new ContactMessage({ name, email, message });
    await newMessage.save();

    console.log(`[Database] Saved new message from ${name} (${email})`);

    return res.status(201).json({
      success: true,
      message: 'Message successfully received and stored in database.'
    });
  } catch (error) {
    console.error('Error handling contact message:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Failed to save message.'
    });
  }
});

// Root Route
app.get('/', (req, res) => {
  res.send('Portfolio API Server is running.');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
