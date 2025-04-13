import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { checkAdmin } from '$lib/server/checkAdmin';
import { db } from '$lib/server/db/client';
import { usernames } from '$lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();
	const admin = checkAdmin(session);

	if (!session?.user || !admin) {
		redirect(302, '/unauthorized');
	}

	const playerList = await db
		.select({
			id: usernames.id,
			mcName: usernames.mcname
		})
		.from(usernames);

	return {
		session,
		playerList
	};
};
