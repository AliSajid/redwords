import type { PageServerLoad } from './$types';
import prisma from '$lib/utils/PrismaClient';

export const load: PageServerLoad = async ({ params }) => {
  /**
   * Generates a random integer between 0 and 9, inclusive.
   * @returns The generated random integer.
   */
  const getRandomNumber = () => Math.floor(Math.random() * 10);

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

  const selectedWords = wordIds.slice(0, numWords);

  const wordlist = await prisma.redWord
    .findMany({
      where: { levelId: wordLevel?.id, id: { in: selectedWords } },
      select: { id: true, level: true, word: true, redWordAudio: true },
      take: numWords,
    })
    .then((words) => {
      return Promise.all(
        words.map(async (word) => {
          return {
            id: word.id,
            level: word.level.levelDisplayName,
            word: word.word,
            audioUrl: word.redWordAudio[getRandomNumber()].audioUrl || '#',
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
