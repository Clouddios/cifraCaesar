import { Router } from 'express';
import { decrypt } from '../controllers/decryptController';

const router = Router();
router.post('/', decrypt);
export default router;
