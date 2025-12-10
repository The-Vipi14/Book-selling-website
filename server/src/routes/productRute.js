import express from 'express';
import upload from '../config/multer.js';
import { createProduct, getAllProducts } from '../controllers/productController.js';

const router = express.Router();

router.post('/create', upload.single('image'), createProduct);
router.get('/all',getAllProducts);

export default router;