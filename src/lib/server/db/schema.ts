import { sqliteTable, uniqueIndex, integer, text, numeric } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const redWord = sqliteTable(
  'RedWord',
  {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    word: text().notNull(),
    levelId: integer()
      .notNull()
      .references(() => wordLevel.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
    createdAt: numeric()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: numeric().notNull(),
  },
  (table) => [uniqueIndex('RedWord_word_key').on(table.word)],
);

export const wordLevel = sqliteTable(
  'WordLevel',
  {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    levelName: text().notNull(),
    createdAt: numeric()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: numeric().notNull(),
    levelDisplayName: text().notNull(),
  },
  (table) => [uniqueIndex('WordLevel_levelName_key').on(table.levelName)],
);

export const redWordAudio = sqliteTable(
  'RedWordAudio',
  {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    wordId: integer()
      .notNull()
      .references(() => redWord.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    voice: text().notNull(),
    audioUrl: text(),
    createdAt: numeric()
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: numeric().notNull(),
    exampleField: text(),
  },
  (table) => [uniqueIndex('RedWordAudio_wordId_voice_key').on(table.wordId, table.voice)],
);
