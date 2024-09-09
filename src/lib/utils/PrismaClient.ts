// Create a singleton PrismaClient instance

import { PrismaClient } from '@prisma/client';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { createClient, type Client } from '@libsql/client';

const libsql: Client = createClient({
  url: `${process.env.TURSO_DB_URL}`,
  authToken: `${process.env.TURSO_DB_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default prisma;
