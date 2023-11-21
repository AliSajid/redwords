-- CreateEnum
CREATE TYPE "WordLevelEnum" AS ENUM ('KG', 'GR1', 'GR2', 'GR3', 'HIGH');

-- CreateEnum
CREATE TYPE "VoiceEnum" AS ENUM ('Russell', 'Nicole', 'Emma', 'Brian', 'Raveena', 'Aditi', 'Matthew', 'Justin', 'Joanna', 'Ivy');

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
    "level_name" "WordLevelEnum" NOT NULL DEFAULT 'KG',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "level_display_name" TEXT NOT NULL,

    CONSTRAINT "WordLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedWordAudio" (
    "id" SERIAL NOT NULL,
    "wordId" INTEGER NOT NULL,
    "voice" "VoiceEnum" NOT NULL,
    "audio_url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RedWordAudio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RedWord_word_key" ON "RedWord"("word");

-- CreateIndex
CREATE UNIQUE INDEX "WordLevel_level_name_key" ON "WordLevel"("level_name");

-- AddForeignKey
ALTER TABLE "RedWord" ADD CONSTRAINT "RedWord_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "WordLevel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedWordAudio" ADD CONSTRAINT "RedWordAudio_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "RedWord"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
