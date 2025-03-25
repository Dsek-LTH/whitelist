import type { Handle, ServerInit } from '@sveltejs/kit';
import { createFile } from '$lib/server/createWhitelist';
import { sequence } from '@sveltejs/kit/hooks';
import { authHandle } from './auth.ts';
import { scheduleJob } from 'node-schedule';
import { paraglideMiddleware } from './paraglide/server';

export const init: ServerInit = async () => {
	scheduleJob('0 */10 * * * *', () => createFile());
};

const paraglideHandle: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
		event.request = localizedRequest;
		return resolve(event, {
			transformPageChunk: ({ html }) => {
				return html.replace('%lang%', locale);
			}
		});
	});

export const handle = sequence(authHandle, paraglideHandle);
