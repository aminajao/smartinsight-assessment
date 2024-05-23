import express from 'express';
import { handleUserMessage } from './controllers/aiController.js';
import validateRequest from './utils/validateRequest.js';

const router = express.Router();

router.post('/question', validateRequest, handleUserMessage);

export default router;
