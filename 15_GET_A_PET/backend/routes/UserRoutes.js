import { Router } from 'express';
import UserController from '../controllers/UserController.js';

const router = Router();
router.post('/register', UserController.register);
router.post("/login", UserController.login);
router.get("/checkuser", UserController.checkUser);
router.get("/:id", UserController.getUserById);

export default router;