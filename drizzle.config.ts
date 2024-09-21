import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  out: './src/lib/server/db',
  schema: ['./src/lib/server/db/schema.ts', './src/lib/db/server/relations.ts'],
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
