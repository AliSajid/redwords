import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
  const level = params.level;
  const word = params.word;
  const voice = params.voice;

  const message = `Generating Audio for Level: ${level}, Word: ${word}, Voice: ${voice}`;

  const body = {
    level: level,
    word: word,
    voice: voice,
    message: message,
  };

  console.log(message);
  return new Response(JSON.stringify(body), { status: 200 });
};
