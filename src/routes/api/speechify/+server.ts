import type { RequestHandler } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';
import prisma from '$lib/utils/PrismaClient';

export const config: Config = {
  runtime: 'nodejs18.x',
  split: true,
};

export const GET: RequestHandler = async ({ fetch }) => {
  const words = await prisma.redWordAudio
    .findMany({
      where: {
        audioUrl: null,
      },
      select: { voice: true, word: { select: { word: true, level: { select: { levelName: true } } } } },
    })
    .then((records) => {
      return records.map((audioRecord) => {
        return {
          word: audioRecord.word.word,
          level: audioRecord.word.level.levelName,
          voice: audioRecord.voice,
        };
      });
    });

  console.log(words);

  const urls = words.map((word) => {
    return `/api/speechify/${word.level}/${word.word}/${word.voice}`;
  });

  const results = urls.map(async (url) => {
    fetch(url);
  });

  const message = `Generating Audio for ${words.length} words`;

  return new Response(JSON.stringify({ message }), { status: 200 });
};
