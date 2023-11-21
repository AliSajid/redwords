import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
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
