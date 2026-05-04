import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  features: [{
    type: String
  }],
  image: {
    type: String
  },
  isPopular: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
