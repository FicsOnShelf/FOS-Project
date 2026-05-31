import { Router } from 'express';
import { EstanteController } from '../controllers/EstanteController';

const router = Router();
const controller = new EstanteController();

router.post('/estantes', controller.criarEstante); // criar nova estante
router.post('/estantes/:estanteId/itens', controller.adicionarItem); // adicionar fanfic
router.get('/estantes/:estanteId/itens', controller.listarItens); // listar fanfics
router.get('/usuarios/:usuarioId/estantes', controller.listarEstantesDoUsuario);
router.put('/estantes/itens/:itemId', controller.atualizarItem);
router.delete('/estantes/itens/:itemId', controller.removerItem);


export default router;

