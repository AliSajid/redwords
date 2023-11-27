import type { PageServerLoad } from './$types';
import prisma from '$lib/utils/PrismaClient';

export const load = (async () => {
  const wordlist = await prisma.redWord
    .findMany({
      select: { id: true, word: true, level: { select: { level_name: true, level_display_name: true } } },
      orderBy: { createdAt: 'asc' },
    })
    .then((words) => {
      return words.map((word) => {
        return {
          id: word.id,
          word: word.word,
          level: word.level.level_name,
          level_display_name: word.level.level_display_name,
          audio_available: false,
        };
      });
    });

  return { words: wordlist };
}) satisfies PageServerLoad;
