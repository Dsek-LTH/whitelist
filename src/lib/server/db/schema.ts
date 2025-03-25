import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const timestamp = {
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date()),
	updatedAt: integer('updated_at', { mode: 'timestamp' })
};

const usernames = sqliteTable('usernames', {
	id: text('id').primaryKey().notNull(),
	mcname: text('mcname', { length: 24 }),
	uuid: text('uuid', { length: 37 }),
	...timestamp
});

export { usernames };
