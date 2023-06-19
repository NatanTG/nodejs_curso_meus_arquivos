import express from 'express';
import Router from 'express';
import ToughtController from '../controllers/ToughtController.js';

const router = Router();
//helper
import checkAuth from '../helper/auth.js';

router.post('/remove', checkAuth.checkAuth, ToughtController.createToughtRemove);
router.get('/add', checkAuth.checkAuth, ToughtController.createTought);
router.post('/add', checkAuth.checkAuth, ToughtController.createToughtSave);
router.get('/dashboard', checkAuth.checkAuth, ToughtController.dashboard);
router.get('/', ToughtController.showToughts);

export default router;