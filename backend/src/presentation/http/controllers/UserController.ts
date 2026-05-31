import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });

export async function createUser(req: Request, res: Response) {
  const { email, username, nomeExibicao, senha, termosAceitos } = req.body;

  try {
    // 1. Validar unicidade
    const existente = await prisma.usuario.findFirst({
      where: { OR: [{ email }, { username }] }
    });
    if (existente) {
      return res.status(400).json({ error: 'Email ou username já cadastrados' });
    }

    // 2. Validar senha
    const senhaValida = senha.length >= 8 && /\d/.test(senha) && /[A-Za-z]/.test(senha);
    if (!senhaValida) {
      return res.status(400).json({ error: 'Senha inválida: mínimo 8 caracteres, letras e números' });
    }

    // 3. Hash da senha
    const senhaHash = await bcrypt.hash(senha, 10);

    // 4. Validar aceite dos termos
    if (!termosAceitos) {
      return res.status(400).json({ error: 'É obrigatório aceitar os Termos de Uso' });
    }

    // 5. Criar usuário
    const novoUsuario = await prisma.usuario.create({
      data: {
        email,
        username,
        nomeExibicao: nomeExibicao,
        senha: senhaHash,
        termos_aceitos: true,
        data_aceite_termos: new Date()
      }
    });

    // 6. (Opcional) Enviar e-mail de confirmação
    // await enviarEmailConfirmacao(novoUsuario.email);

    res.json(novoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno ao criar usuário' });
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const usuario = await prisma.usuario.findUnique({
      where: { id }
    });
    if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}

export async function updateUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  const { nomeExibicao, bio, avatarUrl } = req.body;
  try {
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: { nomeExibicao: nomeExibicao, bio, avatar: avatarUrl }
    });
    res.json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
}

export async function deleteUser(req: Request, res: Response) {
  const id = Number(req.params.id);
  try {
    await prisma.usuario.delete({
      where: { id }
    });
    res.json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
}
