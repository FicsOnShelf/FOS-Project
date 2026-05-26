import { Request, Response } from 'express';
import { prisma } from '../../../infrastructure/db/prismaClient';

export const seguirUsuario = async (req: Request, res: Response) => {
  const { seguidorId, seguindoId } = req.body;

  try {
    const existente = await prisma.seguidor.findFirst({
      where: { seguidorId, seguindoId }
    });

    if (existente) {
      return res.status(400).json({ error: 'Você já está seguindo este usuário' });
    }

    const novo = await prisma.seguidor.create({
      data: { seguidorId, seguindoId }
    });

    return res.status(201).json(novo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao seguir usuário' });
  }
};

export const deixarDeSeguirUsuario = async (req: Request, res: Response) => {
  const { seguidorId, seguindoId } = req.body;

  try {
    const existente = await prisma.seguidor.findFirst({
      where: { seguidorId, seguindoId }
    });

    if (!existente) {
      return res.status(404).json({ error: 'Você não segue este usuário' });
    }

    await prisma.seguidor.delete({
      where: { id: existente.id }
    });

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deixar de seguir usuário' });
  }
};
