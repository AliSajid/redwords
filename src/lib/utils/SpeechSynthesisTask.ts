import prisma from './PrismaClient';
import type SpeechSynthesisTaskDBInput from '$lib/types/SpeechSynthesisTaskDBInput';

export const saveSpeechToDatabase = async (speechSynthesisTaskInput: SpeechSynthesisTaskDBInput) => {
  const { word, level, voice, speechSynthesisTask } = speechSynthesisTaskInput;
  const { SynthesisTask } = speechSynthesisTask;

  if (SynthesisTask && SynthesisTask.OutputUri) {
    const targetId = await prisma.redWord.findUnique({
      where: {
        word: word,
        level: {
          levelName: level,
        },
        redWordAudio: {
          some: {
            voice: voice,
          },
        },
      },
      select: {
        id: true,
        word: true,
        redWordAudio: {
          where: {
            voice: voice,
          },
          select: {
            id: true,
          },
        },
      },
    });

    if (!targetId) {
      throw new Error(`Could not find word: ${word} for level: ${level}`);
    }

    const audioUpdate = await prisma.redWordAudio.update({
      where: {
        id: targetId.redWordAudio[0].id,
      },
      data: {
        audioUrl: SynthesisTask.OutputUri,
      },
    });

    return audioUpdate;
  }
};
