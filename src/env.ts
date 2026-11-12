import { defineEnvVars } from '@sveltejs/kit/env';

// @migration-task Review usage of dynamic environment variables. They fall back to the empty string if not present, which may not be what you want.
export const variables = defineEnvVars({
  AWS_S3_BUCKET_NAME: { static: true },
  AWS_REDWORD_ROLE_ARN: { static: true },
  VERCEL_ENV: { schema: (input) => input ?? '' },
  TURSO_DB_URL: { schema: (input) => input ?? '' },
  TURSO_DB_TOKEN: { schema: (input) => input ?? '' },
});
