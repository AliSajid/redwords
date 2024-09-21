import { sqliteTable, uniqueIndex, integer, text, numeric } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const redWord = sqliteTable(
  'RedWord',
  {
    id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
    word: text('word').notNull(),
    levelId: integer('levelId')
      .notNull()
      .references(() => wordLevel.id, { onDelete: 'restrict', onUpdate: 'cascade' }),
    createdAt: numeric('createdAt')
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: numeric('updatedAt').notNull(),
  },
  (table) => {
    return {
      wordKey: uniqueIndex('RedWord_word_key').on(table.word),
    };
  },
);

export const wordLevel = sqliteTable(
  'WordLevel',
  {
    id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
    levelName: text('levelName').notNull(),
    createdAt: numeric('createdAt')
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: numeric('updatedAt').notNull(),
    levelDisplayName: text('levelDisplayName').notNull(),
  },
  (table) => {
    return {
      levelNameKey: uniqueIndex('WordLevel_levelName_key').on(table.levelName),
    };
  },
);

export const redWordAudio = sqliteTable(
  'RedWordAudio',
  {
    id: integer('id').primaryKey({ autoIncrement: true }).notNull(),
    wordId: integer('wordId')
      .notNull()
      .references(() => redWord.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    voice: text('voice').notNull(),
    audioUrl: text('audioUrl'),
    createdAt: numeric('createdAt')
      .default(sql`(CURRENT_TIMESTAMP)`)
      .notNull(),
    updatedAt: numeric('updatedAt').notNull(),
  },
  (table) => {
    return {
      wordIdVoiceKey: uniqueIndex('RedWordAudio_wordId_voice_key').on(table.wordId, table.voice),
    };
  },
);
