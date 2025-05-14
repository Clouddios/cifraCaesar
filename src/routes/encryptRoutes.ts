import { Router } from 'express';
import { encrypt } from '../controllers/encryptController';

const router = Router();

// Define a rota de criptografia
router.post('/', encrypt);

export default router;
