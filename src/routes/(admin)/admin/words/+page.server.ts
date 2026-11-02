import type { PageServerLoad } from './$types';
import { db } from '$lib/utils/DrizzleClient';
import { redWord } from '$lib/server/db/tables';
import { count } from 'drizzle-orm';

export const load: PageServerLoad = async ({ url }) => {
  const limit: number = parseInt('10');
  const offset: number = parseInt(url.searchParams.get('offset') || '0');

  const wordList = await db.query.redWord
    .findMany({
      limit: limit,
      offset: offset,
      with: {
        wordLevel: {
          columns: {
            levelName: true,
            levelDisplayName: true,
          },
        },
        redWordAudios: {
          columns: {
            voice: true,
            audioUrl: true,
          },
        },
      },
    })
    .then((result) => {
      return result.map((word) => {
        return {
          id: word.id,
          word: word.word,
          level: word.wordLevel.levelName,
          levelDisplayName: word.wordLevel.levelDisplayName,
          audioAvailable: word.redWordAudios.length > 0,
          audioCount: word.redWordAudios.length,
        };
      });
    });

  const wordCount = await db
    .select({ value: count() })
    .from(redWord)
    .then((result) => {
      return result[0].value;
    });
  return { words: wordList, wordCount: wordCount };
};
