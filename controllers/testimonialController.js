import Testimonial from '../models/Testimonial.js';

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonials', error: error.message });
  }
};

// @desc    Create a new testimonial
// @route   POST /api/testimonials
// @access  Public (Should be protected in production)
export const createTestimonial = async (req, res) => {
  try {
    const { name, role, content, rating } = req.body;
    
    // Generate an ID based on current count
    const count = await Testimonial.countDocuments();
    const id = count + 1;
    
    // Generate avatar using Dicebear API
    const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/\s+/g, '')}`;

    const testimonial = new Testimonial({
      id,
      name,
      role,
      content,
      rating: rating || 5,
      avatar
    });

    const createdTestimonial = await testimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(400).json({ message: 'Invalid testimonial data', error: error.message });
  }
};
