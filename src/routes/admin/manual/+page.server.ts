import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { checkAdmin } from '$lib/server/checkAdmin';
import { usernamesSchema, stilIdSchema } from '$lib/server/schema';
import { addPlayer } from '$lib/server/addPlayer';

let errorMessage: string = '';

export const load: PageServerLoad = async (event) => {
	const session = await event.locals.auth();
	const admin = checkAdmin(session);

	if (!session?.user || !admin) {
		redirect(302, '/unauthorized');
	}

	return {
		session
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const stilIdInput = stilIdSchema.safeParse(data.get('stilId'));
		const mcNameInput = usernamesSchema.safeParse(data.get('mcName'));

		if (mcNameInput.success && stilIdInput.success) {
			return addPlayer(stilIdInput.data, mcNameInput.data);
		} else {
			if (mcNameInput.error) {
				errorMessage += mcNameInput.error.format()._errors[0] + '\n';
			}
			if (stilIdInput.error) {
				errorMessage += stilIdInput.error.format()._errors[0] + '\n';
			}
			return fail(500, {
				errorMessage: errorMessage
			});
		}

		//return { success: true };
	}
} satisfies Actions;
