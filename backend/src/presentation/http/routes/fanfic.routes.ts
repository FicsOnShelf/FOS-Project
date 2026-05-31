import { Router } from 'express';
import { createFanfic, searchFanfic, getFanficById, refreshFanfic, deleteFanfic } from '../../http/controllers/FanficControllers';

const router = Router();

router.post('/fanfic', createFanfic);
router.get('/fanfic/search', searchFanfic);
router.get('/fanfics/:id', getFanficById);
router.put('/fanfics/:id', refreshFanfic);
router.delete('/fanfics/:id', deleteFanfic);

export default router;

