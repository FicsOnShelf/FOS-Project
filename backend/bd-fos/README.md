# 📚 FOS (Fics On Shelf) - Database & Backend

Este é o coração do projeto **FOS**, uma plataforma social para catalogar e organizar fanfics de diferentes sites (Wattpad, AO3, Spirit, etc.). Este repositório contém a configuração do banco de dados relacional, o servidor API e os scrapers de integração.

## 🛠️ Tecnologias Utilizadas

* **Node.js & TypeScript**: Ambiente de execução e linguagem.
* **Prisma ORM**: Gerenciamento e modelagem do banco de dados.
* **PostgreSQL (Neon.tech)**: Banco de dados relacional na nuvem.
* **BCrypt**: Criptografia de senhas para segurança.
* **Express**: Framework para criação das rotas da API.

## 🗄️ Estrutura do Banco de Dados (Schema)

O banco de dados foi modelado para suportar interações sociais e catalogação detalhada:

- **Usuário**: Armazena perfil, credenciais criptografadas e preferências.
- **Fanfic**: Armazena metadados (URL, título, autor, capa) coletados via scraping.
- **Estante**: Coleções personalizadas criadas pelos usuários (ex: "Favoritos", "Lendo agora").
- **ItemEstante**: A "ponte" que vincula fanfics a estantes, permitindo que o usuário adicione notas, resenhas, capítulos lidos e status de leitura.
- **Seguidor**: Sistema de autorrelacionamento para permitir que usuários sigam uns aos outros.

