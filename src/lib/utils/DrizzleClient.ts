import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { schema } from '$lib/server/db/schema';
import { env } from '$env/dynamic/private';

const client = createClient({
  url: `${env.TURSO_DB_URL}`,
  authToken: `${env.TURSO_DB_TOKEN}`,
});

export const db = drizzle(client, { schema });
