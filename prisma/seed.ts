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
      where: { level_name: 'KG' },
      update: {},
      create: {
        level_name: 'KG',
        level_display_name: 'Kindergarten',
        RedWords: {
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
      where: { level_name: 'GR1' },
      update: {},
      create: {
        level_name: 'GR1',
        level_display_name: 'First Grade',
        RedWords: {
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
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
