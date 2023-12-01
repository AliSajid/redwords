import type { Actions } from './$types';
import prisma from '$lib/utils/PrismaClient';
import wordLevelMapping from '$lib/utils/WordLevelMapping';

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const word = formData.get('word')?.toString() || null;
    const wordLevel = formData.get('wordLevel')?.toString() || '';
    const wordLevelDisplay = wordLevelMapping[wordLevel];

    if (word !== null && wordLevel !== null) {
      const createQuery = prisma.redWord.create({
        data: {
          word: word,
          redWordAudio: {
            createMany: {
              data: [
                { voice: 'Russell' },
                { voice: 'Nicole' },
                { voice: 'Emma' },
                { voice: 'Brian' },
                { voice: 'Raveena' },
                { voice: 'Aditi' },
                { voice: 'Matthew' },
                { voice: 'Justin' },
                { voice: 'Joanna' },
                { voice: 'Ivy' },
              ],
            },
          },
          level: {
            connectOrCreate: {
              where: {
                levelName: wordLevel,
              },
              create: {
                levelName: wordLevel,
                levelDisplayName: wordLevelDisplay,
              },
            },
          },
        },
      });

      await prisma
        .$transaction([createQuery])
        .then(() => {
          return { status: 200, body: { createQuery }, success: true };
        })
        .catch(() => {
          return {
            status: 400,
            body: {
              word: word,
              wordLevel: wordLevel,
              message: `Word ${word} for level ${wordLevelDisplay} already exists`,
            },
            success: false,
          };
        });
    }
  },
};
