import { Router } from 'express';
import { encrypt } from '../controllers/encryptController';

const router = Router();
router.post('/', encrypt);
export default router;
