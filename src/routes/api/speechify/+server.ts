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

  const urls = words.map((word) => {
    return `/api/speechify/${word.level}/${word.word}/${word.voice}`;
  });

  const delayBetweenRequests = 100;

  const results = [];
  for (const url of urls) {
    await new Promise((resolve) => setTimeout(resolve, delayBetweenRequests));
    const res = await fetch(url);
    results.push(res);
  }

  const message = `Generating Audio for ${words.length} words`;

  return new Response(JSON.stringify({ message }), { status: 200 });
};
