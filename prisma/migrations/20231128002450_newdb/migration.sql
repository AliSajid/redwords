-- CreateTable
CREATE TABLE "RedWord" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "levelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RedWord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WordLevel" (
    "id" SERIAL NOT NULL,
    "levelName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "levelDisplayName" TEXT NOT NULL,

    CONSTRAINT "WordLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedWordAudio" (
    "id" SERIAL NOT NULL,
    "wordId" INTEGER NOT NULL,
    "voice" TEXT NOT NULL,
    "audioUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RedWordAudio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RedWord_word_key" ON "RedWord"("word");

-- CreateIndex
CREATE UNIQUE INDEX "WordLevel_levelName_key" ON "WordLevel"("levelName");

-- AddForeignKey
ALTER TABLE "RedWord" ADD CONSTRAINT "RedWord_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "WordLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedWordAudio" ADD CONSTRAINT "RedWordAudio_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "RedWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
