import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { db } from '$lib/server/db/client';
import { usernames } from '$lib/server/db/schema';
import { usernamesSchema } from '$lib/server/schema';
import { addPlayer } from '$lib/server/addPlayer';

let userId: string;
let mcName: string;

async function getMcName() {
	return db
		.select({ mcname: usernames.mcname })
		.from(usernames)
		.where(eq(usernames.id, userId))
		.get();
}

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();

	if (!session?.user) {
		redirect(302, '/unauthorized');
	} else {
		userId = session.user.userId;
	}

	mcName = (await getMcName())?.mcname as string;

	return {
		session,
		mcName
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const mcNameInput = usernamesSchema.safeParse(data.get('mcName'));

		if (mcNameInput.success) {
			return addPlayer(userId, mcNameInput.data);
		} else {
			return fail(500, {
				errorMessage: mcNameInput.error.format()._errors[0]
			});
		}
	}
} satisfies Actions;
