import type { RequestHandler } from '@sveltejs/kit';
import { createFile } from '$lib/server/createWhitelist';
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.text();
	if (body === process.env['SYNC_PASSWORD']) {
		try {
			await createFile();
		} catch (e: any) {
			throw error(500, e.message);
		}
		return new Response();
	}
	throw error(403);
};
