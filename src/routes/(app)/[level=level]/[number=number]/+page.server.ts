import type { PageServerLoad } from './$types';
import { db } from '#lib/utils/DrizzleClient.ts';
import { redWord, wordLevel } from '#lib/server/db/tables.ts';
import { eq, inArray } from 'drizzle-orm';
import { APP_ENV, TURSO_DB_URL, TURSO_DB_TOKEN } from '$app/env/private';

export const load: PageServerLoad = async ({ params }) => {
  /**
   * Generates a random integer between 0 and 9, inclusive.
   * @returns The generated random integer.
   */
  const getRandomNumber = () => Math.floor(Math.random() * 10);

  const level: string = params.level;
  const numWords = parseInt(params.number) || 5;

  if (APP_ENV === 'development') {
    console.info(`Database: ${TURSO_DB_URL}`);
    console.info(`Database Token: ${TURSO_DB_TOKEN}`);
  }

  const wordLevelInfo = (await db.query.wordLevel.findFirst({
    columns: { id: true, levelName: true, levelDisplayName: true },
    where: eq(wordLevel.levelName, level),
  })) || { id: 1, levelDisplayName: 'Kindergarten' };

  const wordIds = await db.query.redWord
    .findMany({
      columns: { id: true },
      where: eq(redWord.levelId, wordLevelInfo.id),
    })
    .then((words) => {
      return words
        .map((word) => word.id)
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    });

  const selectedWords = wordIds.slice(0, numWords);

  const wordList = await db.query.redWord
    .findMany({
      columns: {
        id: true,
        word: true,
        levelId: true,
      },
      where: inArray(redWord.id, selectedWords),
      with: {
        redWordAudios: {
          columns: {
            audioUrl: true,
          },
        },
        wordLevel: { columns: { levelDisplayName: true } },
      },
    })
    .then((words) => {
      return Promise.all(
        words.map(async (word) => {
          return {
            id: word.id,
            word: word.word,
            level: word.wordLevel.levelDisplayName,
            audioUrl: word.redWordAudios[getRandomNumber()].audioUrl || '#',
          };
        }),
      );
    });

  return {
    props: {
      words: wordList,
      message: '',
    },
  };
};
