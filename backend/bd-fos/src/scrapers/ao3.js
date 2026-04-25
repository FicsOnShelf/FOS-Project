const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeAO3(url) {
  try {
    // Adicionamos um Cookie para "pular" o aviso de conteúdo adulto do AO3 automaticamente
    const response = await axios.get(url, {
      headers: {
        'Cookie': 'view_adult=true' 
      }
    });

    const $ = cheerio.load(response.data);

 // O AO3 organiza os dados em IDs e Classes específicas:
    const titulo = $('h2.title.heading').text().trim();
    const autor = $('a[rel="author"]').first().text().trim();
    
    // 👇 NOVIDADE: Extraindo as LISTAS completas!
    // Pega todos os links dentro da classe 'fandom' e monta um array
    const fandoms = $('dd.fandom a.tag').map((i, el) => $(el).text().trim()).get();
    
    // Pega todos os links dentro da classe 'freeform' (Additional Tags do AO3) e monta um array
    const tags = $('dd.freeform a.tag').map((i, el) => $(el).text().trim()).get();

    // Se não encontrar título, algo deu errado (URL inválida ou mudaram o site)
    if (!titulo) throw new Error("Não conseguimos ler os dados desta URL.");

    return {
      titulo,
      autor,
      plataforma: "AO3",
      url,
      fandoms, // Agora enviamos o array plural
      tags     // Agora enviamos o array plural
    }
  } catch (error) {
    console.error("Erro no Scraper AO3:", error.message);
    return null;
  }
}

module.exports = scrapeAO3;