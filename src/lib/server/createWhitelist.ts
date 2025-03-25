import { and, isNotNull } from 'drizzle-orm';
import { db } from './db/client';
import { usernames } from './db/schema';
import * as fs from 'fs';

export async function createFile() {
	const query = await db
		.select({ uuid: usernames.uuid, name: usernames.mcname })
		.from(usernames)
		.where(and(isNotNull(usernames.mcname), isNotNull(usernames.uuid)));
	const json = JSON.stringify(query, null, 2);
	fs.writeFile('output/whitelist.json', json, () => void 0);
	console.log(new Date().toISOString() + ' written');
}
