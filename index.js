import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import testimonialRoutes from './routes/testimonialRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Basic Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'success', 
    message: 'NexusSoft Backend API is running smoothly' 
  });
});

// Mount Routes
app.use('/api/products', productRoutes);
app.use('/api/testimonials', testimonialRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
