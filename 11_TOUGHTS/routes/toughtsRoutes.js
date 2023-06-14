import express from 'express';
import { Router } from 'express';
import ToughtController from '../controllers/ToughtControllers.js';

const router = Router();

//controllers

router.get('/', ToughtController.showToughts);

export default Router;