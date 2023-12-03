import type { RequestHandler } from './$types';
import { saveSpeechToDatabase } from '$lib/utils/SpeechSynthesisTask';
import { fromTemporaryCredentials } from '@aws-sdk/credential-providers';

import {
  PollyClient,
  StartSpeechSynthesisTaskCommand,
  type VoiceId,
  type StartSpeechSynthesisTaskCommandInput,
  type PollyClientConfig,
} from '@aws-sdk/client-polly';
import { AWS_S3_BUCKET_NAME, AWS_REDWORD_ROLE_ARN } from '$env/static/private';

export const GET: RequestHandler = async ({ params }) => {
  const level = params.level;
  const word = params.word;
  const voice = params.voice as VoiceId;

  const pollyConfig: PollyClientConfig = {
    region: 'us-east-2',
    credentials: fromTemporaryCredentials({
      params: {
        RoleArn: AWS_REDWORD_ROLE_ARN,
        RoleSessionName: `vercel-polly-redwords_session-${Date.now()}`,
      },
      clientConfig: { region: 'us-east-2' },
    }),
  };

  const polly: PollyClient = new PollyClient(pollyConfig);

  const taskInput: StartSpeechSynthesisTaskCommandInput = {
    'LanguageCode': 'en-US',
    'OutputFormat': 'mp3',
    'OutputS3BucketName': AWS_S3_BUCKET_NAME,
    'OutputS3KeyPrefix': `audio/${level}/${word}/${voice}`,
    'Text': word,
    'TextType': 'text',
    'VoiceId': voice,
  };

  const command = new StartSpeechSynthesisTaskCommand(taskInput);

  const SynthesisTask = await polly
    .send(command)
    .then(async (data) => {
      const synthesisTaskDBInput = {
        'word': word,
        'level': level,
        'voice': voice,
        'speechSynthesisTask': data,
      };

      await saveSpeechToDatabase(synthesisTaskDBInput);
    })
    .catch((error) => {
      console.error(error);
    });

  return new Response(JSON.stringify(SynthesisTask), { status: 200 });
};
