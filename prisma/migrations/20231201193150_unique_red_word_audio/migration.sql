/*
  Warnings:

  - A unique constraint covering the columns `[wordId,voice]` on the table `RedWordAudio` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "RedWordAudio" DROP CONSTRAINT "RedWordAudio_wordId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "RedWordAudio_wordId_voice_key" ON "RedWordAudio"("wordId", "voice");

-- AddForeignKey
ALTER TABLE "RedWordAudio" ADD CONSTRAINT "RedWordAudio_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "RedWord"("id") ON DELETE CASCADE ON UPDATE CASCADE;
