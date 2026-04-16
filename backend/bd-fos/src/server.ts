import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"; // 1. Adicione isso lá no topo do arquivo, junto com as outras importações!

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
app.post("/usuarios", async (req, res) => {
  try {
    const { 
      username, 
      email, 
      senhaHash, // A senha "limpa" que vem do Thunder Client (ex: "123456")
      nomeExibicao, 
      bio, 
      avatar, 
      banner 
    } = req.body;

    // 2. Embaralhando a senha!
    // O número 10 é o "salt", ele define a complexidade da criptografia (10 é o padrão seguro do mercado)
    const senhaCriptografada = await bcrypt.hash(senhaHash, 10);

    const novoUsuario = await prisma.usuario.create({
      data: {
        username: username,
        email: email,
        senha: senhaCriptografada, // 3. Enviamos a senha embaralhada para o banco!
        nomeExibicao: nomeExibicao,
        bio: bio,
        avatar: avatar,
        banner: banner,
      },
    });

    res.status(201).json(novoUsuario);
    
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ erro: "Não foi possível criar o usuário no banco." });
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
// --- INICIALIZAÇÃO ---
app.listen(PORT, () => {
  console.log(`Servidor rodando! Acesse: http://localhost:${PORT}`);
});