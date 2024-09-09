-- CreateTable
CREATE TABLE "RedWord" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "levelId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RedWord_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "WordLevel" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WordLevel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "levelName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "levelDisplayName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RedWordAudio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wordId" INTEGER NOT NULL,
    "voice" TEXT NOT NULL,
    "audioUrl" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RedWordAudio_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "RedWord" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "RedWord_word_key" ON "RedWord"("word");

-- CreateIndex
CREATE UNIQUE INDEX "WordLevel_levelName_key" ON "WordLevel"("levelName");

-- CreateIndex
CREATE UNIQUE INDEX "RedWordAudio_wordId_voice_key" ON "RedWordAudio"("wordId", "voice");
