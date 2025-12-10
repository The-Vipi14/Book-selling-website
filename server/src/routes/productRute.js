import express from 'express';
import upload from '../config/multer.js';
import { createProduct } from '../controllers/productController.js';

const router = express.Router();

router.post('/create', upload.single('image'), createProduct);
 
export default router; 