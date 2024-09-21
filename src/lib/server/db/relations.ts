import { relations } from 'drizzle-orm/relations';
import { wordLevel, redWord, redWordAudio } from './tables';

export const redWordRelations = relations(redWord, ({ one, many }) => ({
  wordLevel: one(wordLevel, {
    fields: [redWord.levelId],
    references: [wordLevel.id],
  }),
  redWordAudios: many(redWordAudio),
}));

export const wordLevelRelations = relations(wordLevel, ({ many }) => ({
  redWords: many(redWord),
}));

export const redWordAudioRelations = relations(redWordAudio, ({ one }) => ({
  redWord: one(redWord, {
    fields: [redWordAudio.wordId],
    references: [redWord.id],
  }),
}));
