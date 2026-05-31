import {prisma} from '../prismaClient';

export class PrismaUserRepository {
  async createUser(email: string, username: string, passwordHash: string, termos_aceitos: boolean) {
    return prisma.usuario.create({
      data: {
        email,
        username,
        senha: passwordHash,
        nomeExibicao: username,
        termos_aceitos: termos_aceitos,
        data_aceite_termos: new Date(),
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.usuario.findUnique({ where: { email } });
  }
}
