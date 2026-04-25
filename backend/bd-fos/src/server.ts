import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"; // 1. Adicione isso lá no topo do arquivo, junto com as outras importações!
import jwt from 'jsonwebtoken';

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

// Middleware para permitir que o Express entenda JSON
app.use(express.json());

// --- ROTAS DO SISTEMA FOS ---

// 1. Rota de Teste
app.get("/", (req, res) => {
  res.send("API do FOS está rodando perfeitamente! 🚀");
});

// 2. Rota para Criar Usuário (100% espelhada com o schema.prisma)
// Rota para Criar Usuário (AGORA COM SEGURANÇA 🔒)
// 2. Rota para Criar Usuário (AGORA COM SEGURANÇA 🔒)
app.post("/usuarios", async (req, res) => {
  try {
    const {
      username,
      email,
      senha, // Recebemos a senha "limpa" direto do Thunder Client/Figma
      nomeExibicao,
      bio,
      avatar,
      banner
    } = req.body;

    // 1. A MÁGICA DA SEGURANÇA: Criptografando a senha
    const saltos = 10; // Nível de complexidade do embaralhamento
    const senhaCriptografada = await bcrypt.hash(senha, saltos);

    // 2. Salvando no banco de dados (Prisma)
    const novoUsuario = await prisma.usuario.create({
      data: {
        username: username,
        email: email,
        senha: senhaCriptografada, // Salvamos a senha embaralhada, NUNCA a limpa!
        nomeExibicao: nomeExibicao,
        bio: bio,
        avatar: avatar,
        banner: banner
      }
    });
// 3. Rota de LOGIN
app.post("/usuarios/login", async (req, res) => {
  try {
    const { email, senha } = req.body; // Recebe o e-mail e a senha "limpa" do Thunder Client

    // 1. Procura se existe alguém com esse e-mail no banco
    const usuario = await prisma.usuario.findUnique({
      where: { email: email }
    });

    if (!usuario) {
      return res.status(404).json({ erro: "E-mail não cadastrado." });
    }

// 2. A MÁGICA: Compara a senha digitada com o hash...
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(401).json({ erro: "Senha incorreta." });
    }

    // 👇 NOVIDADE: GERANDO O CRACHÁ (TOKEN JWT)
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email }, // Dados que vão dentro do crachá
      process.env.JWT_SECRET as string,         // A senha mestra do .env
      { expiresIn: '7d' }                       // O crachá vale por 7 dias
    );

    // 3. Deu tudo certo! Tiramos a senha por segurança e damos boas-vindas
    const { senha: _, ...usuarioSeguro } = usuario;
    res.status(200).json({ 
      mensagem: "Login realizado com sucesso!", 
      usuario: usuarioSeguro,
      token: token // Mandamos o crachá de volta para o Thunder Client/Figma!
    });

  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});
    // 3. Tirando a senha da resposta para não vazar no Thunder Client/Frontend
    const { senha: _, ...usuarioSeguro } = novoUsuario;

    // 4. Retornando sucesso!
    res.status(201).json(usuarioSeguro);

  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ erro: "Erro ao criar usuário. Verifique se o e-mail ou username já estão em uso." });
  }
});
// Rota para LISTAR todos os usuários cadastrados
app.get("/usuarios", async (req, res) => {
  try {
    // Pede pro Prisma buscar todos os registros na tabela Usuario
    const todosUsuarios = await prisma.usuario.findMany();
    
    // Devolve a lista em formato JSON
    res.status(200).json(todosUsuarios);
    
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ erro: "Não foi possível buscar os usuários." });
  }
});

// 3. Rota para ATUALIZAR dados do usuário (Editar Perfil)
app.put("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params; // Pega o ID da URL
    const { nomeExibicao, bio, avatar, banner } = req.body;

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: Number(id) }, // Converte o ID para número
      data: {
        nomeExibicao,
        bio,
        avatar,
        banner,
      },
    });

    res.json(usuarioAtualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao atualizar usuário. Verifique se o ID existe." });
  }
});

// 4. Rota para DELETAR um usuário
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.usuario.delete({
      where: { id: Number(id) },
    });

    res.status(204).send(); // Retorna 204 (Sucesso, mas sem conteúdo no corpo)
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao deletar usuário." });
  }
});

// 5. Rota de LOGIN (Verificar se a senha está correta)
app.post("/login", async (req, res) => {
  try {
    const { email, senhaDigitada } = req.body;

    // Busca o usuário pelo email
    const usuario = await prisma.usuario.findUnique({
      where: { email: email },
    });

    // Se o usuário não existir, para por aqui
    if (!usuario) {
      return res.status(401).json({ erro: "E-mail ou senha incorretos." });
    }

    // O BCrypt compara a senha digitada com o Hash que está no banco
    const senhaCorreta = await bcrypt.compare(senhaDigitada, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ erro: "E-mail ou senha incorretos." });
    }

    // Se chegou aqui, deu tudo certo!
    res.json({
      mensagem: "Login realizado com sucesso! 🎉",
      usuario: {
        id: usuario.id,
        username: usuario.username,
        nomeExibicao: usuario.nomeExibicao
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao tentar fazer login." });
  }
});

import { Request, Response, NextFunction } from 'express';

// ==========================================
// MIDDLEWARE DE AUTENTICAÇÃO (O SEGURANÇA 🔒)
// ==========================================
const autenticarToken = (req: Request, res: Response, next: NextFunction) => {
  // 1. Procura o token no cabeçalho da requisição
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Ele vem no formato "Bearer 123456..."

  // Se não tem crachá, barra na porta!
  if (!token) {
    return res.status(401).json({ erro: "Acesso negado. Token não fornecido." });
  }

  try {
    // 2. Verifica se o crachá é falso ou se já expirou
    const secret = process.env.JWT_SECRET as string;
    const payload = jwt.verify(token, secret);
    
    // 3. O crachá é válido! Colocamos os dados do usuário logado dentro da requisição
    (req as any).usuarioLogado = payload;
    
    // 4. Manda a requisição seguir em frente (entrar na rota)
    next(); 
  } catch (error) {
    return res.status(403).json({ erro: "Token inválido ou expirado. Faça login novamente." });
  }
};

// 6. Rota para CRIAR uma Estante (vinculada a um usuário)
app.post("/estantes", async (req, res) => {
  try {
    const { nome, privada, usuarioId } = req.body;

    const novaEstante = await prisma.estante.create({
      data: {
        nome: nome,
        privada: privada || false, // Se não enviar nada, o padrão é false (pública)
        usuarioId: Number(usuarioId), // Garante que o ID seja um número
      },
    });

    res.status(201).json(novaEstante);
  } catch (error) {
    console.error("Erro ao criar estante:", error);
    res.status(500).json({ erro: "Não foi possível criar a estante. Verifique se o usuarioId existe." });
  }
});

// 7. Rota para LISTAR todas as estantes de um usuário específico
app.get("/usuarios/:usuarioId/estantes", async (req, res) => {
  try {
    const { usuarioId } = req.params;

    const estantes = await prisma.estante.findMany({
      where: { usuarioId: Number(usuarioId) }
    });

    res.json(estantes);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar estantes." });
  }
});

// 8. Rota para CADASTRAR uma nova Fanfic (Fica igual, pois os campos não mudaram)
app.post("/fanfics", async (req, res) => {
  try {
    const { url, titulo, autor, plataforma, capa } = req.body;
    const novaFanfic = await prisma.fanfic.create({
      data: { url, titulo, autor, plataforma, capa }
    });
    res.status(201).json(novaFanfic);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao cadastrar fanfic." });
  }
});

// 9. Rota para ADICIONAR à Estante (Agora com Status, Nota e Resenha!)
app.post("/estantes/adicionar", async (req, res) => {
  try {
    const { 
      estanteId, 
      fanficId, 
      status,      // "Lido", "Lendo", etc.
      capitulo,    // Em qual capítulo parou
      nota,        // 1 a 5 estrelas
      resenha,     // Comentário do usuário
      temSpoiler   // true ou false
    } = req.body;

    const novoItem = await prisma.itemEstante.create({
      data: {
        estanteId: Number(estanteId),
        fanficId: Number(fanficId),
        status: status || "Quero Ler", // Valor padrão caso não envie
        capitulo: capitulo ? Number(capitulo) : 0,
        nota: nota ? Number(nota) : null,
        resenha: resenha,
        temSpoiler: temSpoiler || false
      }
    });

    res.status(201).json(novoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao adicionar item à estante." });
  }
});

// 10. Rota para EDITAR um item da estante (Ex: mudar o capítulo ou a nota)
app.put("/itens-estante/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, capitulo, nota, resenha, temSpoiler } = req.body;

    const itemAtualizado = await prisma.itemEstante.update({
      where: { id: Number(id) },
      data: { status, capitulo, nota, resenha, temSpoiler }
    });

    res.json(itemAtualizado);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar o item da estante." });
  }
});

// 11. Rota de PERFIL COMPLETO (Usuário + Estantes + Itens)
app.get("/usuarios/:username/perfil", async (req, res) => {
  try {
    const { username } = req.params;

    const perfil = await prisma.usuario.findUnique({
      where: { username: username },
      include: {
        estantes: {
          include: {
            itens: {
              include: {
                fanfic: true // Traz os detalhes da fanfic dentro da estante
              }
            }
          }
        }
      }
    });

    if (!perfil) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    // Removemos a senha por segurança antes de enviar para o frontend
    const { senha, ...dadosSemSenha } = perfil;
    res.json(dadosSemSenha);

  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao carregar perfil." });
  }
});

// GET /perfil/:id
app.get("/perfil/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const perfil = await prisma.usuario.findUnique({
      where: { id: Number(id) },
      include: {
        estantes: {
          include: {
            itens: {
              include: { fanfic: true } // Traz os detalhes da fic (título, capa)
            }
          }
        },
        _count: {
          select: { seguidores: true, seguindo: true } // Mostra os números do social
        }
      }
    });

    if (!perfil) return res.status(404).json({ erro: "Usuário não encontrado" });

    // Remove a senha antes de enviar
    const { senha: _, ...dadosPublicos } = perfil;
    res.json(dadosPublicos);

  } catch (error) {
    res.status(500).json({ erro: "Erro ao carregar perfil." });
  }
});

// 12. Rota para SEGUIR um usuário
// POST /usuarios/seguir
app.post("/usuarios/seguir", autenticarToken, async (req, res) => {
  try {
    const { usuarioParaSeguirId } = req.body;
    const meuId = (req as any).usuarioLogado.id; // Pego do Token JWT!

    if (meuId === Number(usuarioParaSeguirId)) {
      return res.status(400).json({ erro: "Você não pode seguir a si mesmo." });
    }

    // Verifica se já segue
    const jaSegue = await prisma.seguidor.findFirst({
      where: { seguidorId: meuId, seguidoId: Number(usuarioParaSeguirId) }
    });

    if (jaSegue) {
      await prisma.seguidor.delete({ where: { id: jaSegue.id } });
      return res.json({ mensagem: "Deixou de seguir." });
    }

    await prisma.seguidor.create({
      data: { seguidorId: meuId, seguindoId: Number(usuarioParaSeguirId) }
    });

    res.json({ mensagem: "Agora você segue este usuário!" });

  } catch (error) {
    res.status(500).json({ erro: "Erro ao processar social." });
  }
});

// 13. Rota para ver QUEM o usuário segue e QUEM o segue
app.get("/usuarios/:id/conexoes", async (req, res) => {
  try {
    const { id } = req.params;

    const conexoes = await prisma.usuario.findUnique({
      where: { id: Number(id) },
      include: {
        // No seu Prisma, o relacionamento deve estar nomeado como 'seguindo' e 'seguidores' no model Usuario
        seguindo: { 
          include: { seguindo: true } // Traz os dados de quem eu estou seguindo
        },
        seguidores: { 
          include: { seguidor: true } // Traz os dados de quem me segue
        },
      },
    });

    res.json(conexoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar conexões." });
  }
});

app.get("/feed", autenticarToken, async (req, res) => {
  try {
    const meuId = (req as any).usuarioLogado.id;

    // 1. Acha quem eu sigo
    const seguindo = await prisma.seguidor.findMany({
      where: { seguidorId: meuId },
      select: { seguindoId: true }
    });

    const idsSeguidos = seguindo.map(s => s.seguindoId);

    // 2. Busca as atividades dessas pessoas
    const atividades = await prisma.itemEstante.findMany({
      where: {
        estante: { usuarioId: { in: idsSeguidos } }
      },
      include: {
        fanfic: true,
        estante: { include: { usuario: true } }
      },
      orderBy: { atualizadoEm: 'desc' },
      take: 20 // Apenas as 20 mais recentes
    });

    res.json(atividades);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao carregar feed." });
  }
});

// ==========================================
// ROTA DE EXPLORAÇÃO E BUSCA
// ==========================================

app.get("/explorar", async (req, res) => {
  try {
    // Pegamos os filtros da URL (Ex: /explorar?titulo=harry&fandom=anime)
    const { titulo, fandom, tag, plataforma } = req.query;

    const fanfics = await prisma.fanfic.findMany({
      where: {
        // O "AND" garante que todos os filtros aplicados sejam respeitados ao mesmo tempo
        AND: [
          titulo ? { titulo: { contains: String(titulo), mode: 'insensitive' } } : {},
          plataforma ? { plataforma: String(plataforma) } : {},
          
          // Filtro em Relacionamento (Muitos-para-Muitos)
          fandom ? {
            fandoms: {
              some: { nome: { contains: String(fandom), mode: 'insensitive' } }
            }
          } : {},
          
          tag ? {
            tags: {
              some: { nome: { contains: String(tag), mode: 'insensitive' } }
            }
          } : {},
        ]
      },
      // Incluímos os nomes das tags e fandoms na resposta para aparecer no card da fic
      include: {
        fandoms: true,
        tags: true
      },
      orderBy: {
        id: 'desc' // Mostra as mais recentes primeiro
      }
    });

    res.json(fanfics);

  } catch (error) {
    console.error("Erro na busca:", error);
    res.status(500).json({ erro: "Erro ao buscar fanfics." });
  }
});

// --- INICIALIZAÇÃO ---
app.listen(PORT, () => {
  console.log(`Servidor rodando! Acesse: http://localhost:${PORT}`);
});