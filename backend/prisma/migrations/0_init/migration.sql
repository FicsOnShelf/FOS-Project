CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "nomeExibicao" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "bio" TEXT,
    "avatar" TEXT,
    "banner" TEXT,
    "perfil_privado" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "termos_aceitos" BOOLEAN NOT NULL DEFAULT false,
    "data_aceite_termos" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seguidor" (
    "id" SERIAL NOT NULL,
    "seguidorId" INTEGER NOT NULL,
    "seguindoId" INTEGER NOT NULL,

    CONSTRAINT "Seguidor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fanfic" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "plataforma" TEXT NOT NULL,
    "capa" TEXT,
    "mediaNota" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "Fanfic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estante" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "privada" BOOLEAN NOT NULL DEFAULT false,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "Estante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemEstante" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "capitulo" INTEGER NOT NULL DEFAULT 0,
    "nota" INTEGER,
    "resenha" TEXT,
    "temSpoiler" BOOLEAN NOT NULL DEFAULT false,
    "dataLeitura" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,
    "estanteId" INTEGER NOT NULL,
    "fanficId" INTEGER NOT NULL,

    CONSTRAINT "ItemEstante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fandom" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Fandom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FanficToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FanficToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FandomToFanfic" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_FandomToFanfic_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "Usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Fanfic_url_key" ON "Fanfic"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_nome_key" ON "Tag"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Fandom_nome_key" ON "Fandom"("nome");

-- CreateIndex
CREATE INDEX "_FanficToTag_B_index" ON "_FanficToTag"("B");

-- CreateIndex
CREATE INDEX "_FandomToFanfic_B_index" ON "_FandomToFanfic"("B");

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_seguidorId_fkey" FOREIGN KEY ("seguidorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguidor" ADD CONSTRAINT "Seguidor_seguindoId_fkey" FOREIGN KEY ("seguindoId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estante" ADD CONSTRAINT "Estante_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemEstante" ADD CONSTRAINT "ItemEstante_estanteId_fkey" FOREIGN KEY ("estanteId") REFERENCES "Estante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemEstante" ADD CONSTRAINT "ItemEstante_fanficId_fkey" FOREIGN KEY ("fanficId") REFERENCES "Fanfic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FanficToTag" ADD CONSTRAINT "_FanficToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Fanfic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FanficToTag" ADD CONSTRAINT "_FanficToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FandomToFanfic" ADD CONSTRAINT "_FandomToFanfic_A_fkey" FOREIGN KEY ("A") REFERENCES "Fandom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FandomToFanfic" ADD CONSTRAINT "_FandomToFanfic_B_fkey" FOREIGN KEY ("B") REFERENCES "Fanfic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

