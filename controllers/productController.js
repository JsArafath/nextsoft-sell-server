import Product from '../models/Product.js';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch products', error: error.message });
  }
};

// @desc    Create a new product
// @route   POST /api/products
// @access  Public (Should be protected in production)
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, features, image, isPopular } = req.body;
    
    // Generate a simple ID like the frontend expects
    const id = `sub_${Date.now()}`;
    
    const product = new Product({
      id,
      name,
      description,
      price,
      features: features || [],
      image: image || '/images/compressed/hero_illustration_medium.webp', // fallback image
      isPopular: isPopular || false
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data', error: error.message });
  }
};
