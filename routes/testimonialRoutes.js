import express from 'express';
import { getTestimonials, createTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.route('/')
  .get(getTestimonials)
  .post(createTestimonial);

export default router;
