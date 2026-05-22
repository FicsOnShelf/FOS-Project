import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });
import dotenv from 'dotenv';
dotenv.config();
import { createApp } from './presentation/http/app';

import express from 'express';
import userRoutes from './presentation/http/routes/user.routes';
import authRoutes from './presentation/http/routes/auth.routes';

const app = express();
app.use(express.json());

// usar as rotas de usuário
app.use(userRoutes);
app.use(authRoutes);

if (require.main === module) {
  app.listen(3000, () => {
    console.log('🚀 Servidor rodando na porta 3000');
  });
}

export default app;