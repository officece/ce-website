const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Initialize Express
const app = express();

// Middleware
app.use(helmet()); // Secures HTTP headers
app.use(cors()); // Allows your React app to make requests here
app.use(express.json()); // Parses incoming JSON payloads

// Define Routes
app.use('/api/admin', require('./routes/authRoutes'));
app.use('/api/faculty', require('./routes/facultyRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/messages', require('./routes/messageRoutes'));

// Basic Health Check Route
app.get('/', (req, res) => {
  res.send('IIT Indore Civil Engineering API is running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server ignited and running on port ${PORT}`);
});