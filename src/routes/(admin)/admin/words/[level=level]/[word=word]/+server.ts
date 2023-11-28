import type { RequestHandler } from './$types';
import prisma from '$lib/utils/PrismaClient';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const DELETE: RequestHandler = async ({ params }) => {
  const { level, word } = params;

  const wordId = await prisma.redWord.findUnique({
    where: { word: word, level: { levelName: level } },
    select: { id: true },
  });

  if (!wordId) {
    return new Response('Word not found', { status: 404 });
  }

  const deleteQuery = await prisma.redWord.delete({
    where: { id: wordId.id },
  });

  return new Response(JSON.stringify(deleteQuery), { status: 200 });
};

export const PATCH: RequestHandler = async ({ params, request }) => {
  const { level, word } = params;
  const updatedWord = await request.json();

  if (updatedWord === null) {
    return new Response('No update provided', { status: 400 });
  }

  const wordId = await prisma.redWord.findUnique({
    where: { word: word, level: { levelName: level } },
    select: { id: true },
  });

  if (!wordId) {
    return new Response('Word not found', { status: 404 });
  }

  const updateQuery = await prisma.redWord.update({
    where: { id: wordId.id },
    data: { word: updatedWord.word, level: { connect: { levelName: level } } },
  });

  return new Response(JSON.stringify(updateQuery), { status: 200 });
};
