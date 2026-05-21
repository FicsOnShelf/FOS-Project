import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.$connect();
  console.log('Conectado ao banco');
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

