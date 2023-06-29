import express from 'express';
import ProductControllers from '../controllers/ProductControllers.js';

const router = express.Router();

router.get("/create", ProductControllers.createProduct);
router.post("/create", ProductControllers.createProductPost);
router.get('/products/:id', ProductControllers.getProduct);
router.get("/", ProductControllers.showProducts);

export default router;