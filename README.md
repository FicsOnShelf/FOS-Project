# 📚 FOS - Fics On Shelf

![Status](https://img.shields.io/badge/Status-%20Developing-purple?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 📖 Sobre o Projeto / About the Project

### **`PT-BR`** 

O FOS (Fics On Shelf) nasce de uma necessidade real da comunidade leitora de fanfictions: a falta de um ecossistema unificado para gestão de leituras. Atualmente, os leitores consomem obras espalhadas por diversas plataformas independentes (como Archive of Our Own - AO3, Wattpad, Spirit Fanfics, entre outras). Esse consumo descentralizado gera uma dor constante: os usuários perdem o controle do que já leram, esquecem em qual capítulo pararam e, consequentemente, perdem a oportunidade de avaliar e registrar suas opiniões sobre suas histórias favoritas.

Inspirado em plataformas de catalogação literária como Goodreads e Skoob, mas projetado exclusivamente para o universo das fanfics, o FOS atua como uma biblioteca virtual inteligente. Ele elimina a fricção e o esforço do registro manual através de um módulo de automação (Web Scraping), permitindo que o usuário importe os dados completos de uma obra (título, autor, capa, fandom e tags) apenas colando a URL de origem.

Apoiado em três pilares fundamentais — Automação, Organização e Comunidade —, o FOS vai além de um simples gerenciador de links. Ele se consagra como a ferramenta definitiva para os leitores documentarem sua jornada literária, compartilharem resenhas protegidas contra spoilers e descobrirem novas obras de forma rápida, centralizada e social.

### **`EN`** 
FOS (Fics On Shelf) was born from a real need within the fanfiction reading community: the lack of a unified ecosystem for reading management. Currently, readers consume works scattered across multiple independent platforms (such as Archive of Our Own - AO3, Wattpad, Spirit Fanfics, among others). This decentralized consumption creates a constant pain point: users lose track of what they have already read, forget which chapter they left off on, and consequently, miss the opportunity to review and record their thoughts on their favorite stories.

Inspired by literary cataloging platforms like Goodreads and Skoob, but designed exclusively for the fanfiction universe, FOS acts as a smart virtual library. It eliminates the friction and effort of manual entry through an automation module (Web Scraping), allowing users to import complete story data (title, author, cover, fandom, and tags) simply by pasting the source URL.

Supported by three fundamental pillars — Automation, Organization, and Community —, FOS goes beyond a simple link manager. It establishes itself as the definitive tool for readers to document their literary journey, share spoiler-protected reviews, and discover new works in a fast, centralized, and social manner.

---

## ✨ Funcionalidades Principais / Key Features

### **`PT-BR`**

* 🤖 **Web Scraping Inteligente:** Adicione obras à sua biblioteca apenas colando a URL da plataforma de origem. O sistema extrai automaticamente Título, Autor, Capa e Tags.
* 📚 **Estantes Personalizadas:** Organize suas leituras em categorias como "Lendo", "Lido", "Quero Ler", "Abandonado" ou crie listas 100% customizadas.
* ⭐️ **Avaliações e Resenhas:** Dê notas, escreva resenhas e marque textos que contêm *spoilers* para proteger outros leitores.
* 🌐 **Comunidade:** Siga amigos, acompanhe as leituras recentes no *Feed* da comunidade e interaja com curtidas e comentários.
* 🔒 **Privacidade:** Controle total sobre a privacidade do seu perfil e das suas listas de leitura.

### **`EN`**
  
* 🤖 **Intelligent Web Scraping:** Add titles to your library just by pasting the source URL. The system automatically extracts Title, Author, Cover, and Tags.
* 📚 **Custom Bookshelves:** Organize your reading into categories like "Reading", "Read", "Want to Read", "Dropped", or create 100% custom lists.
* ⭐️ **Ratings & Reviews:** Rate your reads, write reviews, and tag texts with *spoiler alerts* to protect other readers.
* 🌐 **Community:** Follow friends, track recent reads on the Community *Feed*, and interact through likes and comments.
* 🔒 **Privacy:** Full control over your profile privacy and reading list visibility.
---

## 🛠️ Tecnologias Utilizadas / Tech Stack

### **`PT-BR`** 

A arquitetura do FOS foi desenhada focando em escalabilidade, segurança e padrões modernos de mercado:

* **Linguagem e Framework:** Node.js como runtime
Express.js para criação das rotas HTTP
TypeScript para tipagem estática e organização do código
* **Banco de Dados:**
  * Prisma ORM para abstração e acesso ao banco
  * Banco configurável via `.env`:
    * PostgreSQL
* **Autenticação:** JWT (JSON Web Tokens) e Criptografia BCrypt para senhas
* **Design/UI:** Interface Mobile-First com suporte nativo a *Dark Mode*

### **`EN`**

The FOS architecture was designed focusing on scalability, security, and modern industry standards:

**Language and Framework:** Node.js as runtime
Express.js for creating HTTP routes
TypeScript for static typing and code organization
* **Database:** 
  * Prisma ORM for abstraction and database access
  * Configurable database via .env:
     * PostgreSQL
* **Authentication:** JWT (JSON Web Tokens) and BCrypt encryption for passwords.
* **Design/UI:** Mobile-First interface with native *Dark Mode* support.

---
## 🎨 Design & Gestão de Projeto / Project Management

### **`PT-BR`** 

O fluxo de trabalho, o acompanhamento das tarefas e a prototipagem das interfaces do FOS são gerenciados de forma ágil utilizando as seguintes ferramentas:

* ✏️ **Protótipo de Interface (UI/UX):** [Acessar o Figma do FOS](https://www.figma.com/site/z8exJxr1Vn1LP6IhDAVh7Y/fos_ex?node-id=0-1&t=Nr1Jjp6hT8GQx6VT-1)
* 📋 **Quadro de Tarefas:** [Acessar o Backlog no GitHub](https://github.com/users/FicsOnShelf/projects/1/views/1)

### **`EN`**

The workflow, task tracking, and interface prototyping for FOS are managed using an agile approach through the following tools:

* ✏️ **Interface Prototype (UI/UX):** [Access FOS Figma](https://www.figma.com/site/z8exJxr1Vn1LP6IhDAVh7Y/fos_ex?node-id=0-1&t=Nr1Jjp6hT8GQx6VT-1)
* 📋 **Task Board:** [Access Backlog on GitHub](https://github.com/users/FicsOnShelf/projects/1/views/1)

---

## 📂 Documentação Técnica / Technical Documentation

### **`PT-BR`** 

Toda a documentação de engenharia de software e modelagem do sistema encontra-se na pasta `/docs`. Acesse o link abaixo para mais detalhes:

* [📑 Documento de Especificação de Requisitos de Software](Documentos/DERSP.pdf)

*(Nota: Os diagramas utilizam a sintaxe Mermaid e são renderizados nativamente pelo GitHub).*

### **`EN`**

All software engineering documentation and system modeling can be found in the `/docs` folder. Access the links below for more details:

* [📑 Software Requirements Specification](Documentos/DERSE.pdf)

*(Note: Diagrams use Mermaid syntax and are rendered natively by GitHub).*

---

## 🗂 Planejamento de Atividades: Evidências

### **`PT-BR`** 

Aqui segue o documento detalhado de como foi realizado o planejamento da produção do FOS e suas respectivas evidências:

* [📑 Documento de Evidências do Projeto](Documentos/Evidências%20do%20Projeto.pdf)

---

## 🚀 Guia de Uso: Como Utilizar o FOS / User Guide: How to Use FOS

### **`PT-BR`** 

Para extrair o máximo da plataforma, siga os passos abaixo:

### 1. Criando sua Conta e Acessando
* Acesse a página inicial do site e clique em **Cadastrar-se** (ou *Entrar*, se já tiver um perfil).
* Após preencher suas credenciais, você será direcionado para o seu painel principal.

### 2. Organizando sua Biblioteca (Estantes)
* Encontre a fanfiction desejada utilizando a barra de busca ou links diretos de importação.
* Na tela da obra, clique em **Adicionar à Estante** e selecione o seu status atual (*Lendo*, *Quero Ler*, etc.).
* Acesse o menu **Minha Biblioteca** no topo do site para visualizar seu acervo organizado e acompanhar suas métricas de progresso.

### 3. Avaliando e Escrevendo Resenhas
* Na tela de detalhes de uma obra salva na sua estante, role até a seção de avaliação.
* Selecione a quantidade de estrelas (de 1 a 5) e redija seu comentário crítico na caixa de texto.
* ⚠️ *Se a sua crítica revelar partes importantes do enredo, lembre-se de marcar a caixinha "Conter Spoiler" antes de publicar para proteger outros leitores.*
* Clique em **Publicar** para calcular a nova média global e enviar sua resenha para o feed.

### 4. Engajando com a Comunidade
* Visite a aba **Comunidade** para explorar o feed de atividades.
* Lá, você pode ler resenhas escritas por outros usuários, deixar sua curtida (*like*) ou comentar para iniciar um debate saudável sobre o capítulo.

### **`EN`**

To make the most out of the platform, follow the steps below:

### 1. Account Setup and Access
* Go to the homepage and click on **Sign Up** (or *Log In* if you already have an account).
* After entering your credentials, you will be redirected to your main dashboard.

### 2. Organizing Your Library (Shelves)
* Find your desired fanfiction using the search bar or direct import links.
* On the fanfic's details page, click **Add to Shelf** and choose your current status (*Reading*, *Want to Read*, etc.).
* Access the **My Library** menu at the top of the site to view your organized collection and track progress metrics.

### 3. Rating and Writing Reviews
* On the details page of any fanfic saved to your shelves, scroll down to the rating section.
* Select your star rating (from 1 to 5) and write your review in the text box.
* ⚠️ *If your review reveals major plot points, remember to check the "Contains Spoiler" box before publishing to protect fellow readers.*
* Click **Publish** to update the global average score and send your review to the community feed.

### 4. Engaging with the Community
* Visit the **Community** tab to explore the activity feed.
* There, you can read reviews written by other users, leave a *like*, or comment to start a healthy discussion about the chapters.