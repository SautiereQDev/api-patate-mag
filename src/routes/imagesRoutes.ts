// File: src/routes/ImageRoutes.ts
import { Router } from 'express';
import { ImageController } from '../controllers/ImageController.ts';
import { uploadMiddleware } from '../middlewares/uploadMiddleware.ts';

const router = Router();

/**
 * - "image" correspond au nom du champ attendu dans le formulaire
 *   (ex: <input type="file" name="image" />)
 */
router.post('/upload', uploadMiddleware.single('image'), ImageController.uploadImage);

export default router;
