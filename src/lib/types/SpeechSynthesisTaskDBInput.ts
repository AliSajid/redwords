import type { StartSpeechSynthesisTaskCommandOutput } from '@aws-sdk/client-polly';

export default interface SpeechSynthesisTaskDBInput {
  word: string;
  level: string;
  voice: string;
  speechSynthesisTask: StartSpeechSynthesisTaskCommandOutput;
}
