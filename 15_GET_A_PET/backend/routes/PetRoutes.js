import { Router } from 'express';
import PetController from '../controllers/PetController.js';
const router = Router();

//middlewares
import verifyToken from '../helpers/verify-token.js';

router.post('/create', verifyToken, PetController.create);

export default router;