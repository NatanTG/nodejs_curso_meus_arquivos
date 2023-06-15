import express from 'express';
import Router from 'express';
import AuthController from '../controllers/AuthController.js';

const router = Router();

router.get('/login', AuthController.login);
router.get('/register', AuthController.register);

export default router;