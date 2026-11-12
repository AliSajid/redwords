import { defineParams } from '@sveltejs/kit/params';
import voiceIds from '#lib/utils/VoiceIds.ts';

const matchLevel = (param: string) => {
  const validLevels = ['KG', 'GR1', 'GR2', 'GR3', 'HIGH'];

  return validLevels.includes(param);
};

const matchNumber = (number: string) => {
  return number == '5' || number == '10';
};

const matchVoice = (param: string) => {
  return voiceIds.includes(param);
};

const matchWord = (param: string) => {
  return /^[a-zA-Z]+$/.test(param);
};

export const params = defineParams({
  level: (param) => (matchLevel(param) ? param : undefined),
  number: (param) => (matchNumber(param) ? param : undefined),
  voice: (param) => (matchVoice(param) ? param : undefined),
  word: (param) => (matchWord(param) ? param : undefined),
});
