import type { RequestHandler } from './$types';
import voiceIds from '$lib/utils/VoiceIds';

export const GET: RequestHandler = async ({ params, fetch }) => {
  const level = params.level;
  const word = params.word;

  const urls = voiceIds.map((voice) => {
    return `/api/speechify/${level}/${word}/${voice}`;
  });

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  return new Response(JSON.stringify(responses), { status: 200 });
};
