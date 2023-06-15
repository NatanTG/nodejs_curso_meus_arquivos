import express from 'express';
import Router from 'express';
import ToughtController from '../controllers/ToughtController.js';

const router = Router();

//controllers

router.get('/', ToughtController.showToughts);

export default router;