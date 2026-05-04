import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  avatar: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
