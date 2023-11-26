import type { PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import wordLevelMapping from '$lib/utils/WordLevelMapping';

export const load: PageServerLoad = async ({ params }) => {
  const prisma = new PrismaClient();

  const level: string = wordLevelMapping[params.level as keyof typeof wordLevelMapping] as string;

  const numWords = parseInt(params.number, 10);

  const wordLevel = await prisma.wordLevel.findUnique({
    where: { level_name: level },
  });

  const wordlist = await prisma.redWord
    .findMany({
      where: { levelId: wordLevel?.id },
      select: { id: true, level: true, word: true },
      take: numWords,
    })
    .then((words) => {
      return Promise.all(
        words.map(async (word) => {
          return {
            id: word.id,
            level: word.level.level_display_name,
            word: word.word,
          };
        }),
      );
    });

  return {
    props: {
      words: wordlist,
    },
  };
};
