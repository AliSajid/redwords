import type { ParamMatcher } from '@sveltejs/kit/params';

export const match: ParamMatcher = (number) => {
  return number == '5' || number == '10';
};
