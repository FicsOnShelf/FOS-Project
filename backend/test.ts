import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // 1. Criar um usuário de teste
  const novoUsuario = await prisma.usuario.create({
    data: {
      email: "teste@example.com",
      username: "testeuser",
      nomeExibicao: "Usuário Teste",
      senha: "123456"
    }
  });

  console.log("Usuário criado:", novoUsuario);

  // 2. Buscar todos os usuários
  const usuarios = await prisma.usuario.findMany();
  console.log("Lista de usuários:", usuarios);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

