const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const plantRoutes = require('./routes/plants');
const userRoutes = require('./routes/users');
const tourRoutes = require('./routes/tours');
const chatbotRoutes = require('./routes/chatbot');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the public directory first
app.use(express.static(path.join(__dirname, '../public')));

// Specific route for serving 3D model files with correct MIME type
app.use('/models', (req, res, next) => {
  res.set('Content-Type', 'model/gltf-binary');
  next();
}, express.static(path.join(__dirname, '../public/models')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/plants', plantRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});