import express from 'express';
import { Router } from 'express';

const router = Router();

import TaskController from '../controllers/TaskController.js';

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.post('/remove', TaskController.removeTask);
router.get('/edit/:id', TaskController.updateTask);
router.get('/', TaskController.showTask);

export default router;