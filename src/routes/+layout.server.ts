import type { LayoutServerLoad } from './$types';
import { checkAdmin } from '$lib/server/checkAdmin';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	const admin = checkAdmin(session);
	return {
		session,
		admin
	};
};
