import express from 'express';
import Router from 'express';
import ProductControllers from '../controllers/ProductControllers.js';

const router = Router();

router.post('/:id', ProductControllers.getProduct);;
router.get("/create", ProductControllers.createProduct);
router.post("/create", ProductControllers.createProductPost);
router.get("/", ProductControllers.showProducts);

export default router;