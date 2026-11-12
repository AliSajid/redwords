import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { schema } from '#lib/server/db/schema.ts';
import { TURSO_DB_URL, TURSO_DB_TOKEN } from '$app/env/private';

const client = createClient({ url: `${TURSO_DB_URL}`, authToken: `${TURSO_DB_TOKEN}` });

export const db = drizzle(client, { schema });
