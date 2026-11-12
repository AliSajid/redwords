import type { ParamMatcher } from '@sveltejs/kit/params';

export const match: ParamMatcher = (param) => {
  const validLevels = ['KG', 'GR1', 'GR2', 'GR3', 'HIGH'];

  return validLevels.includes(param);
};
