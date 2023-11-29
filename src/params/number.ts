import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (number) => {
  return number == '5' || number == '10';
};
