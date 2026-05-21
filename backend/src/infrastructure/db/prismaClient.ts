import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';

const pool = new pkg.Pool({
  connectionString: process.env.DATABASE_URL,
  idleTimeoutMillis: 30000, // tempo de espera para conexões ociosas
  connectionTimeoutMillis: 10000 // timeout de conexão
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });


