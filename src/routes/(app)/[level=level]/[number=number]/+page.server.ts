import type { PageServerLoad } from './$types';
import prisma from '$lib/utils/PrismaClient';

export const load: PageServerLoad = async ({ params }) => {
  const level: string = params.level;

  const numWords = parseInt(params.number) || 5;

  console.log(numWords);

  const wordLevel = await prisma.wordLevel.findUnique({
    where: { levelName: level },
  });

  const wordIds = await prisma.redWord
    .findMany({
      where: { level: { levelName: level } },
      select: { id: true },
    })
    .then((words) => {
      return words
        .map((word) => word.id)
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    });

  console.log(wordIds);

  const selectedWords = wordIds.slice(0, numWords);

  console.log(selectedWords);

  const wordlist = await prisma.redWord
    .findMany({
      where: { levelId: wordLevel?.id, id: { in: selectedWords } },
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

  console.log(wordlist);

  return {
    props: {
      words: wordlist,
    },
  };
};
