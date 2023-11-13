import type { PageServerLoad } from './$types';
import wordlist from '$lib/data/words';

export const load: PageServerLoad = async ({ params }) => {
  const words = wordlist.filter((word) => word.level === params.level);

  const numWords = parseInt(params.number, 10);

  // get params.number words from the list with replacement
  const selectedWords = [];
  for (let i = 0; i < numWords; i++) {
    const index = Math.floor(Math.random() * words.length);
    selectedWords.push(words[index]);
  }

  return {
    props: {
      words: selectedWords,
    },
  };
};
