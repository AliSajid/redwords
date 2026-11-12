import type { ParamMatcher } from '@sveltejs/kit/params';
import voiceIds from '#lib/utils/VoiceIds.ts';

export const match: ParamMatcher = (param) => {
  return voiceIds.includes(param);
};
