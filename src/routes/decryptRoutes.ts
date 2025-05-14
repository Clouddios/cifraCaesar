import { Router } from 'express';
import { decrypt } from '../controllers/Decrypt';

const router = Router();
router.post('/', decrypt);
export default router;
