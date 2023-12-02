import type { ParamMatcher } from '@sveltejs/kit';
import voiceIds from '$lib/utils/VoiceIds';

export const match: ParamMatcher = (param) => {
  return voiceIds.includes(param);
};
