import type { Actions } from './$types';
import { db } from '$lib/utils/DrizzleClient';
import { redWord, redWordAudio, wordLevel } from '$lib/server/db/tables';
import { eq, sql } from 'drizzle-orm';

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const word = formData.get('word')?.toString().toLowerCase() || null;
    const wordLevelName = formData.get('wordLevel')?.toString() || null;

    if (word !== null && wordLevelName !== null) {
      const wordLevelId = await db.query.wordLevel
        .findFirst({
          columns: {
            id: true,
          },
          where: eq(wordLevel.levelName, wordLevelName),
        })
        .then((result) => {
          return result!.id;
        });

      const createQuery = db
        .insert(redWord)
        .values({
          word: sql.placeholder('word'),
          levelId: sql.placeholder('levelId'),
          createdAt: sql`(CURRENT_TIMESTAMP)`,
          updatedAt: sql`(CURRENT_TIMESTAMP)`,
        })
        .returning({ wordId: redWord.id })
        .prepare();

      const createAudioQuery = db
        .insert(redWordAudio)
        .values([
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Russell',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Nicole',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Emma',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Brian',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Raveena',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Aditi',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Matthew',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Justin',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Joanna',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
          {
            wordId: sql.placeholder('wordId'),
            voice: 'Ivy',
            audioUrl: '',
            createdAt: sql`(CURRENT_TIMESTAMP)`,
            updatedAt: sql`(CURRENT_TIMESTAMP)`,
          },
        ])
        .returning({ wordAudioId: redWordAudio.id })
        .prepare();

      const wordId = await createQuery.execute({
        word: word,
        levelId: wordLevelId,
      });

      const audioInserts = await createAudioQuery.execute({
        wordId: wordId,
      });

      return {
        status: 200,
        body: {
          word: word,
          wordLevel: wordLevelName,
          message: 'Word added successfully',
          wordAudio: audioInserts,
        },
        success: true,
      };
    } else {
      return {
        status: 400,
        body: {
          word: word,
          wordLevel: wordLevel,
          message: 'Word and level cannot be empty',
        },
        success: false,
      };
    }
  },
};
