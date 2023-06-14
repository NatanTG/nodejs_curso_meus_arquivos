import express from 'express';
import { Router } from 'express';

const router = Router();

import TaskController from '../controllers/TaskController.js';

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.get('/', TaskController.showTask);

export default router;