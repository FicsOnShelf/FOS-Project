import { Request, Response } from 'express';
import { PrismaUserRepository } from '../../../infrastructure/db/repositories/PrismaUserRepository';
import { RegisterUserUseCase } from '../../../application/useCases/RegisterUserUseCase';
import { PrismaPg } from '@prisma/adapter-pg';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});
const userRepo = new PrismaUserRepository();
const registerUseCase = new RegisterUserUseCase(userRepo);

// Validação de senha forte
function validarSenha(password: string) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return regex.test(password);
}


export async function register(req: Request, res: Response) {
    try {
      const { email, username, password, termos_aceitos } = req.body;

      if (!validarSenha(password)) {
        return res.status(400).json({ error: 'Senha deve ter pelo menos 8 caracteres, incluindo letras e números' });
      }

      if (!termos_aceitos) {
        return res.status(400).json({ error: 'É obrigatório aceitar os Termos de Uso' });
      }

      const user = await registerUseCase.execute(email, username, password, termos_aceitos);

      res.status(201).json({ message: 'Usuário criado com sucesso', user });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

export async function login(req: Request, res: Response) {
  try {
      const { email, password } = req.body;

      const user = await userRepo.findByEmail(email);
      if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });

      const valid = await bcrypt.compare(password, user.senha);
      if (!valid) return res.status(401).json({ error: 'Credenciais inválidas' });

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

      res.json({ token, userId: user.id });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

