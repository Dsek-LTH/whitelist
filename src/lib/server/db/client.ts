import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
dotenv.config();

const client = createClient({
	url: process.env.DB_URL as string
});

const db = drizzle({ client });

//const db = drizzle(process.env.DB_URL!);

export { db };
