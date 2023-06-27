import express from 'express';
import Router from 'express';
import ProductControllers from '../controllers/productControllers.js';

const router = Router();

router.get("/", ProductControllers.showProducts);
router.get("/create", ProductControllers.createProduct);
router.post("/create", ProductControllers.createProductPost);

export default router;