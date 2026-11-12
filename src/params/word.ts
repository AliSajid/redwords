import type { ParamMatcher } from '@sveltejs/kit/params';

export const match: ParamMatcher = (param) => {
  return /^[a-zA-Z]+$/.test(param);
};
