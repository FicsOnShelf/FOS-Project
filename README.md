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

* **Infraestrutura:** Docker e Docker Compose (Containerização)
* **Banco de Dados:** PostgreSQL (Neon)
* **Acesso a Dados:** Framework ORM (Mapeamento Objeto-Relacional) para manipulação segura e ágil dos dados
* **Autenticação:** JWT (JSON Web Tokens) e Criptografia BCrypt para senhas
* **Design/UI:** Interface Mobile-First com suporte nativo a *Dark Mode*

### **`EN`**

The FOS architecture was designed focusing on scalability, security, and modern industry standards:

* **Infrastructure:** Docker & Docker Compose (Containerization)
* **Database:** PostgreSQL (Neon)
* **Data Access:** ORM Framework (Object-Relational Mapping) for secure and agile data handling.
* **Authentication:** JWT (JSON Web Tokens) and BCrypt encryption for passwords.
* **Design/UI:** Mobile-First interface with native *Dark Mode* support.

---

## 📂 Documentação Técnica / Technical Documentation

### **`PT-BR`** 

Toda a documentação de engenharia de software e modelagem do sistema encontra-se na pasta `/docs`. Acesse os links abaixo para mais detalhes:

* [📑 Requisitos Funcionais e Não Funcionais](docs/requirements.md)
* [⚙️ Regras de Negócio e Casos de Uso](docs/business_rules.md)
* [📐 Diagramas de Arquitetura (ER, Fluxograma)](docs/diagrams.md)

*(Nota: Os diagramas utilizam a sintaxe Mermaid e são renderizados nativamente pelo GitHub).*

### **`EN`**

All software engineering documentation and system modeling can be found in the `/docs` folder. Access the links below for more details:

* [📑 Functional and Non-Functional Requirements](docs/requirements.md)
* [⚙️ Business Rules and Use Cases](docs/business_rules.md)
* [📐 Architecture Diagrams (ER, Flowcharts)](docs/diagrams.md)

*(Note: Diagrams use Mermaid syntax and are rendered natively by GitHub).*

---

## 🚀 Como executar o projeto localmente / Getting Started

### **`PT-BR`** 

> *As instruções de instalação serão detalhadas conforme a implementação do backend e frontend avançarem.*

Pré-requisitos básicos:
* Docker
* Docker Compose

```bash
# Clone este repositório
git clone [https://github.com/SEU-USUARIO/FOS-Project.git](https://github.com/SEU-USUARIO/FOS-Project.git)

# Acesse a pasta do projeto
cd FOS-Project

# Suba os containers do banco de dados
docker-compose up -d
```
### **`EN`**

> *Detailed installation instructions will be provided as backend and frontend implementation progresses.*

**Prerequisites:**
* Docker
* Docker Compose

```bash
# Clone this repository
git clone [https://github.com/YOUR-USERNAME/FOS-Project.git](https://github.com/YOUR-USERNAME/FOS-Project.git)

# Enter the project folder
cd FOS-Project

# Start the database containers
docker-compose up -d



