import type { StartSpeechSynthesisTaskCommandOutput } from '@aws-sdk/client-polly';

interface SpeechSynthesisTaskDBInput {
  word: string;
  level: string;
  voice: string;
  speechSynthesisTask: StartSpeechSynthesisTaskCommandOutput;
}

export default SpeechSynthesisTaskDBInput;
