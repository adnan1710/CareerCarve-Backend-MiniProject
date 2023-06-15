import { Router } from 'express';
const router = Router();
import { submitTest } from '../controllers/testController';

router.post('/submit-test', submitTest);

export default router;
