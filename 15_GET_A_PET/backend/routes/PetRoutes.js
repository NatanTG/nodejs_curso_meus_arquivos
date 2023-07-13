import { Router } from 'express';
import PetController from '../controllers/PetController.js';
const router = Router();


//middlewares
import verifyToken from '../helpers/verify-token.js';
import imageUpload from '../helpers/image-upload.js';

router.post('/create', verifyToken, imageUpload.array('images'), PetController.create);
router.get('/', PetController.getAll);
router.get('/mypets', PetController.getAllUserPets);

export default router;