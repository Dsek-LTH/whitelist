import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
dotenv.config();

const db = drizzle(process.env.DB_URL as string);

//const db = drizzle(process.env.DB_URL!);

export { db };
