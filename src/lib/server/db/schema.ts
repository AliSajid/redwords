import * as tables from './tables';
import * as relations from './relations';

export const schema = { ...tables, ...relations };

export type wordLevelSelect = typeof tables.wordLevel.$inferSelect;
export type wordLevelInsert = typeof tables.wordLevel.$inferInsert;

export type redWordSelect = typeof tables.redWord.$inferSelect;
export type redWordInsert = typeof tables.redWord.$inferInsert;

export type redWordAudioSelect = typeof tables.redWordAudio.$inferSelect;
export type redWordAudioInsert = typeof tables.redWordAudio.$inferInsert;
