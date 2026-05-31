import express from 'express';


export function createApp() {
  const app = express();

  app.use(express.json());

  // rotas de autenticação


  // aqui você pode adicionar outras rotas futuramente
  // app.use('/fanfic', fanficRoutes);


  return app;
}
