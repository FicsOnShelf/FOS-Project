import { Request, Response } from 'express';
import { prisma } from '../../../infrastructure/db/prismaClient';
import axios from 'axios';
import * as cheerio from 'cheerio';

async function scrapeFanficData(url: string) {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  if (url.includes('archiveofourown.org')) {
    // Seletores específicos do AO3
    const titulo = $('h2.title').text().trim();
    const autor = $('a[rel="author"]').first().text().trim();

    const fandoms: string[] = [];
    $('.fandom.tags a').each((_, el) => {
      fandoms.push($(el).text().trim());
    });

    const tags: string[] = [];
    $('.freeform.tags a').each((_, el) => {
      tags.push($(el).text().trim());
    });

    return {
      titulo,
      autor,
      plataforma: 'AO3',
      capa: null, // AO3 geralmente não tem capa
      tags,
      fandoms,
    };
  }

  if (url.includes('wattpad.com')) {
    return {
      titulo: $('h1.story-title').text().trim(),
      autor: $('a.author-link').text().trim(),
      plataforma: 'Wattpad',
      capa: $('img.cover').attr('src') || null,
      tags: [], // Wattpad não expõe tags facilmente
      fandoms: [],
    };
  }

  // fallback
  return {
    titulo: 'Título não identificado',
    autor: 'Autor desconhecido',
    plataforma: 'Desconhecida',
    capa: null,
    tags: [],
    fandoms: [],
  };
}

export const createFanfic = async (req: Request, res: Response) => {
  const { url } = req.body;

  try {
    const existing = await prisma.fanfic.findUnique({
      where: { url },
      include: { tags: true, fandoms: true },
    });

    if (existing) {
      return res.status(200).json(existing);
    }

    const scraped = await scrapeFanficData(url);

    const newFanfic = await prisma.fanfic.create({
      data: {
        url,
        titulo: scraped.titulo,
        autor: scraped.autor,
        plataforma: scraped.plataforma,
        capa: scraped.capa,
        tags: {
          connectOrCreate: scraped.tags.map((tag: string) => ({
            where: { nome: tag },
            create: { nome: tag },
          })),
        },
        fandoms: {
          connectOrCreate: scraped.fandoms.map((fandom: string) => ({
            where: { nome: fandom },
            create: { nome: fandom },
          })),
        },
      },
      include: { tags: true, fandoms: true },
    });

    return res.status(201).json(newFanfic);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: 'Erro ao adicionar fanfic com scraping' });
  }
};

export const searchFanfic = async (req: Request, res: Response) => {
  const { q, plataforma } = req.query;

  try {
    const results = await prisma.fanfic.findMany({
      where: {
        AND: [
          {
            OR: [
              { titulo: { contains: String(q), mode: 'insensitive' } },
              { autor: { contains: String(q), mode: 'insensitive' } },
            ],
          },
          plataforma
            ? { plataforma: { equals: String(plataforma), mode: 'insensitive' } }
            : {},
        ],
      },
      include: { tags: true, fandoms: true },
    });

    if (results.length === 0) {
      return res
        .status(200)
        .json({ message: 'Seja o primeiro a adicionar esta fanfic!' });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro na busca de fanfics' });
  }
  
};

export const getFanficById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const fanfic = await prisma.fanfic.findUnique({
      where: { id: Number(id) },
      include: { tags: true, fandoms: true },
    });
    if (!fanfic) return res.status(404).json({ error: 'Fanfic não encontrada' });
    return res.json(fanfic);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar fanfic' });
  }
};

export const refreshFanfic = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { url } = req.body;

  try {
    // roda scraping novamente
    const scraped = await scrapeFanficData(url);

    const updated = await prisma.fanfic.update({
      where: { id: Number(id) },
      data: {
        url,
        titulo: scraped.titulo,
        autor: scraped.autor,
        plataforma: scraped.plataforma,
        capa: scraped.capa,
        tags: {
          connectOrCreate: scraped.tags.map((tag: string) => ({
            where: { nome: tag },
            create: { nome: tag },
          })),
        },
        fandoms: {
          connectOrCreate: scraped.fandoms.map((fandom: string) => ({
            where: { nome: fandom },
            create: { nome: fandom },
          })),
        },
      },
      include: { tags: true, fandoms: true },
    });

    return res.json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar fanfic pelo link' });
  }
};
export const deleteFanfic = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.fanfic.delete({
      where: { id: Number(id) },
    });

    return res.status(204).send(); // sem conteúdo, confirma remoção
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover fanfic' });
  }
};
