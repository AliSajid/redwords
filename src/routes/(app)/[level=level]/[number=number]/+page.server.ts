import type { PageServerLoad } from './$types';
import prisma from '$lib/utils/PrismaClient';

export const load: PageServerLoad = async ({ params }) => {
  const level: string = params.level;

  const numWords = parseInt(params.number, 10);

  const wordLevel = await prisma.wordLevel.findUnique({
    where: { levelName: level },
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
            level: word.level.levelDisplayName,
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
