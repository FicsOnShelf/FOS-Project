import { Router } from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/UserController';

const router = Router();

// Cadastro
router.post('/usuarios', createUser);

// Listagem
router.get('/usuarios', getUsers);

// Buscar por ID
router.get('/usuarios/:id', getUserById);

// Atualizar
router.put('/usuarios/:id', updateUser);

// Deletar
router.delete('/usuarios/:id', deleteUser);

export default router;

