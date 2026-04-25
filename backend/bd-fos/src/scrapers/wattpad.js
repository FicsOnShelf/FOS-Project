const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWattpad(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // O Wattpad usa classes específicas para o título e autor
    const titulo = $('.story-info__title').text().trim() || $('h1').first().text().trim();
    const autor = $('.author-info__username').text().trim() || $('.author-name').text().trim();
    
    // Tentando pegar a imagem da capa
    const capa = $('.story-info__cover img').attr('src');
if (!titulo) throw new Error("Não conseguimos ler os dados desta URL do Wattpad.");

    // 👇 NOVIDADE: Extraindo as tags do Wattpad
    // O Wattpad usa a classe 'tag-item' para os botões de tag nas histórias
    const tags = $('.tag-item').map((i, el) => $(el).text().trim()).get();
    
    // Como o Wattpad não tem uma seção específica só para Fandom, deixamos vazio
    const fandoms = []; 

    return {
      titulo,
      autor: autor.replace('by ', ''), // Remove o "by" que o Wattpad às vezes coloca
      plataforma: "Wattpad",
      capa,
      url,
      tags,    // Agora enviamos as tags extraídas!
      fandoms  // Enviamos vazio para não quebrar o Prisma
    };

  } catch (error) {
    console.error("Erro no Scraper Wattpad:", error.message);
    return null;
  }
}

module.exports = scrapeWattpad;