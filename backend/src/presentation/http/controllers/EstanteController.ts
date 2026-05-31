// src/presentation/http/controllers/EstanteController.ts
import { Request, Response } from 'express';
import { prisma } from '../../../infrastructure/db/prismaClient';

export class EstanteController {
  async criarEstante(req: Request, res: Response) {
    try {
      const { nome, privada, usuarioId } = req.body;

      const estante = await prisma.estante.create({
        data: {
          nome,
          privada: privada ?? false,
          usuarioId: Number(usuarioId),
        },
      });

      res.status(201).json(estante);
    } catch (error) {
      res.status(500).json({
        error: 'Erro ao criar estante',
        details: error,
      });
    }
  }

  async adicionarItem(req: Request, res: Response) {
    try {
      const { estanteId } = req.params;
      const { fanficId, status, nota } = req.body;

      const item = await prisma.itemEstante.create({
        data: {
          estanteId: Number(estanteId),
          fanficId: Number(fanficId),
          status,
          nota,
        },
      });

      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({
        error: 'Erro ao adicionar fanfic na estante',
        details: error,
      });
    }
  }

  async listarItens(req: Request, res: Response) {
    try {
      const { estanteId } = req.params;

      const itens = await prisma.itemEstante.findMany({
        where: { estanteId: Number(estanteId) },
        include: { fanfic: true },
      });

      res.json(itens);
    } catch (error) {
      res.status(500).json({
        error: 'Erro ao listar itens da estante',
        details: error,
      });
    }
  }
  async listarEstantesDoUsuario(req: Request, res: Response) {
  try {
    const { usuarioId } = req.params;

    const estantes = await prisma.estante.findMany({
      where: { usuarioId: Number(usuarioId) },
      include: { itens: { include: { fanfic: true } } }, // opcional: já traz os itens
    });

    res.json(estantes);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao listar estantes do usuário',
      details: error,
    });
  }
}
async atualizarItem(req: Request, res: Response) {
  try {
    const { itemId } = req.params;
    const { status, nota, resenha, capitulo } = req.body;

    const item = await prisma.itemEstante.update({
      where: { id: Number(itemId) },
      data: {
        status,
        nota,
        resenha,
        capitulo,
      },
    });

    res.json(item);
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao atualizar item da estante',
      details: error,
    });
  }
}

async removerItem(req: Request, res: Response) {
  try {
    const { itemId } = req.params;

    await prisma.itemEstante.delete({
      where: { id: Number(itemId) },
    });

    res.status(204).send(); // sem conteúdo, mas confirma remoção
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao remover item da estante',
      details: error,
    });
  }
}

}
