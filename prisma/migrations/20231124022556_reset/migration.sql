/*
  Warnings:

  - Changed the type of `voice` on the `RedWordAudio` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level_name` on the `WordLevel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "RedWordAudio" DROP COLUMN "voice",
ADD COLUMN     "voice" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "WordLevel" DROP COLUMN "level_name",
ADD COLUMN     "level_name" TEXT NOT NULL;

-- DropEnum
DROP TYPE "VoiceEnum";

-- DropEnum
DROP TYPE "WordLevelEnum";

-- CreateIndex
CREATE UNIQUE INDEX "WordLevel_level_name_key" ON "WordLevel"("level_name");
