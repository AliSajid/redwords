import type SpeechSynthesisTaskDBInput from '#lib/types/SpeechSynthesisTaskDBInput.ts';
import { db } from '#lib/utils/DrizzleClient.ts';
import { and, eq } from 'drizzle-orm';
import { redWord, redWordAudio, wordLevel } from '#lib/server/db/tables.ts';

export const saveSpeechToDatabase = async (speechSynthesisTaskInput: SpeechSynthesisTaskDBInput) => {
  const { word, level, voice, speechSynthesisTask } = speechSynthesisTaskInput;
  const { SynthesisTask } = speechSynthesisTask;

  if (SynthesisTask && SynthesisTask.OutputUri) {
    const [target] = await db
      .select({ audioId: redWordAudio.id })
      .from(redWord)
      .innerJoin(wordLevel, eq(redWord.levelId, wordLevel.id))
      .innerJoin(redWordAudio, eq(redWord.id, redWordAudio.wordId))
      .where(and(eq(redWord.word, word), eq(wordLevel.levelName, level), eq(redWordAudio.voice, voice)));

    if (!target) {
      throw new Error(`Could not find word: ${word} for level: ${level}`);
    }

    const audioUpdate = await db
      .update(redWordAudio)
      .set({ audioUrl: SynthesisTask.OutputUri })
      .where(eq(redWordAudio.id, target.audioId));

    return audioUpdate;
  }
};
