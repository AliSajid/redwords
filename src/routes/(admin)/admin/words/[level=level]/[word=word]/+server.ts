import type { RequestHandler } from './$types';
import { db } from '$lib/utils/DrizzleClient';
import { redWord } from '$lib/server/db/tables';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async () => {
  return new Response();
};

export const DELETE: RequestHandler = async ({ params }) => {
  const { word } = params;

  console.info('Deleting word:', word);
  const wordId = await db.query.redWord
    .findFirst({
      columns: {
        id: true,
      },
      where: eq(redWord.word, word),
    })
    .then((result) => {
      if (!result) {
        return new Response('Word not found', { status: 404 });
      }
      return result.id;
    })
    .catch((error: Error) => {
      console.error(error);
      return new Response('Error occurred', { status: 500 });
    });

  if (wordId instanceof Response) {
    console.error('Error occurred');
    return wordId;
  }
  console.info('Word ID:', wordId);

  const deleteQuery = await db.delete(redWord).where(eq(redWord.id, wordId as number));

  return new Response(JSON.stringify(deleteQuery), { status: 200 });
};
