import { Router } from 'express';
import { encrypt } from '../controllers/Encrypt';

const router = Router();
router.post('/', encrypt);
export default router;
