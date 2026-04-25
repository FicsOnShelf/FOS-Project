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
  // 👇 ADICIONE ESTA LINHA PARA VER O QUE O SCRAPER ACHOU:
  console.log("Dados extraídos do site:", dadosFic);
   try {
     // Salva ou Atualiza no Banco Neon
      const ficSalva = await prisma.fanfic.upsert({
        where: { url: dadosFic.url },
        
        // 👇 O QUE FAZER SE A FANFIC JÁ EXISTIR NO BANCO:
        update: {
          capa: dadosFic.capa, // Atualiza a capa
          
          // Adiciona os fandoms e tags que não existiam antes!
          fandoms: {
            connectOrCreate: dadosFic.fandoms?.map(nome => ({
              where: { nome: nome },
              create: { nome: nome }
            })) || []
          },
          tags: {
            connectOrCreate: dadosFic.tags?.map(nome => ({
              where: { nome: nome },
              create: { nome: nome }
            })) || []
          }
        },

        // 👇 O QUE FAZER SE FOR UMA FANFIC NOVA:
        create: {
          titulo: dadosFic.titulo,
          autor: dadosFic.autor,
          plataforma: dadosFic.plataforma,
          url: dadosFic.url,
          capa: dadosFic.capa,
          
          fandoms: {
            connectOrCreate: dadosFic.fandoms?.map(nome => ({
              where: { nome: nome },
              create: { nome: nome }
            })) || []
          },
          tags: {
            connectOrCreate: dadosFic.tags?.map(nome => ({
              where: { nome: nome },
              create: { nome: nome }
            })) || []
          }
        }
      });

      console.log("✅ Sucesso! Fanfic catalogada na nuvem.");
      console.log(`📖 Título: ${ficSalva.titulo} | ID: ${ficSalva.id}`);
    } catch (err) {
      console.error("❌ Erro ao salvar no Neon:", err.message);
    }
  }
}

// --- TESTE MANUAL ---
// Cole aqui um link do AO3 ou do Wattpad para testar!
const linkDeTeste = "https://archiveofourown.org/works/78583421/chapters/206040541"; 
adicionarFic(linkDeTeste);