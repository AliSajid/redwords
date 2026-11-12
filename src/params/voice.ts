import type { ParamMatcher } from '@sveltejs/kit';
import voiceIds from '#lib/utils/VoiceIds.ts';

export const match: ParamMatcher = (param) => {
  return voiceIds.includes(param);
};
