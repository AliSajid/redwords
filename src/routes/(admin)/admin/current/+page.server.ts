import type { PageServerLoad } from './$types';
import prisma from '$lib/utils/PrismaClient';
import type { Prisma } from '@prisma/client';

type RedWordWhereInput = Prisma.RedWordWhereInput;

export const load: PageServerLoad = async ({ url }) => {
  const level: string | null = url.searchParams.get('level');
  const limit: string = url.searchParams.get('limit') || '10';
  const offset: string = url.searchParams.get('offset') || '0';

  const filterCondition = level ? { level: { levelName: level } } : {};

  const wordlist = await prisma.redWord
    .findMany({
      where: filterCondition as RedWordWhereInput,
      select: { id: true, word: true, level: { select: { levelName: true, levelDisplayName: true } } },
      orderBy: { updatedAt: 'asc' },
      skip: parseInt(offset),
      take: parseInt(limit),
    })
    .then((words) => {
      return words.map((word) => {
        return {
          id: word.id,
          word: word.word,
          level: word.level.levelName,
          levelDisplayName: word.level.levelDisplayName,
          audio_available: false,
        };
      });
    });

  const wordCount = await prisma.redWord.count({
    where: filterCondition as RedWordWhereInput,
  });

  return { words: wordlist, wordCount: wordCount };
};
