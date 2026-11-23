import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  AWS_S3_BUCKET_NAME: { static: true },
  AWS_REDWORD_ROLE_ARN: { static: true },
  APP_ENV: { schema: (input) => input ?? '' },
  TURSO_DB_URL: { schema: (input) => input ?? '' },
  TURSO_DB_TOKEN: { schema: (input) => input ?? '' },
});
