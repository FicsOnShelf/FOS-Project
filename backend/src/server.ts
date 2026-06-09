import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { prisma } from './infrastructure/db/prismaClient';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: '*'}));
// Rotas
import fanficRoutes from './presentation/http/routes/fanfic.routes';
import authRoutes from './presentation/http/routes/auth.routes';
import userRoutes from './presentation/http/routes/user.routes';
import estanteRoutes from './presentation/http/routes/estante.routes';
import seguidorRoutes from './presentation/http/routes/seguidor.routes';

// Teste de conexão
app.use(fanficRoutes);
app.use(userRoutes);
app.use(authRoutes);
app.use(estanteRoutes);
app.use(seguidorRoutes);
export { app };
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`);
});

