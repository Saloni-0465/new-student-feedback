import { Router } from 'express';
import { login, signup } from '../controllers/authController.js';

const router = Router(); // Use Router directly from express

router.post('/signup', signup);
router.post('/login', login);

export default router;

