/**
 * Seed the database with word levels and red words.
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Main function to seed the database with word levels and red words.
 */
async function main() {
  try {
    /**
     * Upsert the word level 'KG' and create red words associated with it.
     */
    await prisma.wordLevel.upsert({
      where: { levelName: 'KG' },
      update: {},
      create: {
        levelName: 'KG',
        levelDisplayName: 'Kindergarten',
        redWords: {
          create: [
            {
              word: 'the',
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
            },
            {
              word: 'and',
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
            },
            {
              word: 'to',
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
            },
            {
              word: 'for',
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
            },
            {
              word: 'go',
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
            },
            {
              word: 'like',
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
            },
            {
              word: 'of',
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
            },
            {
              word: 'will',
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
            },
          ],
        },
      },
    });

    /**
     * Upsert the word level 'GR1' and create red words associated with it.
     */
    await prisma.wordLevel.upsert({
      where: { levelName: 'GR1' },
      update: {},
      create: {
        levelName: 'GR1',
        levelDisplayName: 'First Grade',
        redWords: {
          create: [
            {
              word: 'some',
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
            },
            {
              word: 'good',
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
            },
            {
              word: 'does',
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
            },
            {
              word: 'were',
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
            },
            {
              word: 'who',
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
            },
            {
              word: 'what',
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
            },
            {
              word: 'why',
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
            },
            {
              word: 'where',
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
            },
          ],
        },
      },
    });

    await prisma.wordLevel.createMany({
      data: [
        {
          levelName: 'GR2',
          levelDisplayName: 'Second Grade',
        },
        {
          levelName: 'GR3',
          levelDisplayName: 'Third Grade',
        },
        {
          levelName: 'HIGH',
          levelDisplayName: 'Higher Grades',
        },
      ],
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
