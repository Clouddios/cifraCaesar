import { Router } from 'express';
import { encrypt } from '../controllers/Encrypt';

const router = Router();

// Define a rota de criptografia
router.post('/', encrypt);

export default router;
