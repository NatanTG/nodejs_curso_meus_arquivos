import express from 'express';
import { Router } from 'express';
import ProductControllers from '../controllers/productControllers.js';

const router = Router();

router.get('/', ProductControllers.showProducts);

export default router;