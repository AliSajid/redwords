import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  out: './drizzle',
  schema: './drizzle/schema.ts',
  driver: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_DB_TOKEN,
  },
  migrations: {
    prefix: 'unix',
  },
  verbose: true,
  strict: true,
});
