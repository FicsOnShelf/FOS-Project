const { PrismaClient } = require('@prisma/client');
const scrapeAO3 = require('./scrapers/ao3');
const scrapeWattpad = require('./scrapers/wattpad');

const prisma = new PrismaClient();

async function adicionarFic(url) {
  let dadosFic = null;

  // O "Cérebro" identifica qual scraper usar baseado no link
  if (url.includes('archiveofourown.org')) {
    console.log(`🔍 FOS identificou: Link do AO3...`);
    dadosFic = await scrapeAO3(url);
  } else if (url.includes('wattpad.com')) {
    console.log(`🔍 FOS identificou: Link do Wattpad...`);
    dadosFic = await scrapeWattpad(url);
  } else {
    console.log("❌ Ops! O FOS ainda não consegue ler links desta plataforma.");
    return;
  }

  if (dadosFic) {
    try {
      // Salva ou Atualiza no Banco Neon
      const ficSalva = await prisma.fanfic.upsert({
        where: { url: dadosFic.url },
        update: { 
          capa: dadosFic.capa // Atualiza a capa se ela tiver mudado
        }, 
        create: {
          titulo: dadosFic.titulo,
          autor: dadosFic.autor,
          plataforma: dadosFic.plataforma,
          url: dadosFic.url,
          capa: dadosFic.capa
        }
      });

      console.log("✅ Sucesso! Fanfic catalogada na nuvem.");
      console.table(ficSalva);
    } catch (err) {
      console.error("❌ Erro ao salvar no Neon:", err.message);
    }
  }
}

// --- TESTE MANUAL ---
// Cole aqui um link do AO3 ou do Wattpad para testar!
const linkDeTeste = "https://www.wattpad.com/story/274499187-caf%C3%A9-et-cigarettes-%E2%80%A2-minsung"; 
adicionarFic(linkDeTeste);