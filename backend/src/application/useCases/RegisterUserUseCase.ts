import bcrypt from 'bcryptjs';
import { PrismaUserRepository } from '../../infrastructure/db/repositories/PrismaUserRepository';

export class RegisterUserUseCase {
  constructor(private userRepo: PrismaUserRepository) {}

  async execute(email: string, username: string, password: string, termos_aceitos: boolean) {
    const existing = await this.userRepo.findByEmail(email);
    if (existing) throw new Error('Usuário já existe');

    const hash = await bcrypt.hash(password, 10);
    return this.userRepo.createUser(email, username, hash, termos_aceitos);
  }
}
