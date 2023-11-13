import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  return { level: params.level, number: params.number };
};
