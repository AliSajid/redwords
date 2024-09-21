import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { schema } from '$lib/server/db/schema';

const client = createClient({
  url: `${process.env.TURSO_DB_URL}`,
  authToken: `${process.env.TURSO_DB_TOKEN}`,
});

export const db = drizzle(client, { schema });
