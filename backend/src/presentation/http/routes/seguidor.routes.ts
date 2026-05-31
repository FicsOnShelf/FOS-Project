import { Router } from 'express';
import { seguirUsuario, deixarDeSeguirUsuario } from '../../http/controllers/SeguidorController';

const router = Router();

router.post('/seguir', seguirUsuario);
router.delete('/seguir', deixarDeSeguirUsuario);

export default router;
