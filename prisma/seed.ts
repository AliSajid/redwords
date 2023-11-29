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
            },
            {
              word: 'and',
            },
            {
              word: 'to',
            },
            {
              word: 'for',
            },
            {
              word: 'go',
            },
            {
              word: 'like',
            },
            {
              word: 'of',
            },
            {
              word: 'will',
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
            },
            {
              word: 'good',
            },
            {
              word: 'does',
            },
            {
              word: 'were',
            },
            {
              word: 'who',
            },
            {
              word: 'what',
            },
            {
              word: 'why',
            },
            {
              word: 'where',
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
