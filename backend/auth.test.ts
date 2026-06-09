import 'dotenv/config';
import request from 'supertest';
import { app } from './src/server';; 

describe('Auth API', () => {
  const userData = {
    email: 'testeapresentacao@example.com',
    username: 'usuarioapresentacao',
    password: 'Senha123!',
    termos_aceitos: true
  };

  it('Cadastro com senha válida e termos aceitos', async () => {
    const res = await request(app)
      .post('/register')
      .send(userData);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('user');
  });

  it('Cadastro falha sem aceite dos termos', async () => {
    const res = await request(app)
      .post('/register')
      .send({ ...userData, termos_aceitos: false });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('É obrigatório aceitar os Termos de Uso');
  });

  it('Cadastro falha com senha fraca', async () => {
    const res = await request(app)
      .post('/register')
      .send({ ...userData, password: '123' });

    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Senha deve ter pelo menos 8 caracteres, incluindo letras e números');
  });

  it('Login com credenciais válidas retorna token JWT', async () => {
    // garante que o usuário existe
    await request(app).post('/register').send(userData);

    const res = await request(app)
      .post('/login')
      .send({ email: userData.email, password: userData.password });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('Login falha com credenciais inválidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: userData.email, password: 'SenhaErrada123' });

    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Credenciais inválidas');
  });
});
