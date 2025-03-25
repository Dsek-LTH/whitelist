import { db } from '$lib/server/db/client';
import { usernames } from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import { m } from '../../paraglide/messages';

async function getUuid(name: string) {
	const response = await fetch(
		'https://api.minecraftservices.com/minecraft/profile/lookup/name/' + name
	)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => {
			console.log(error);
			return [];
		});
	console.log(response);
	if (response.id) {
		const id = response.id;
		return (
			id.slice(0, 8) +
			'-' +
			id.slice(8, 12) +
			'-' +
			id.slice(12, 16) +
			'-' +
			id.slice(16, 20) +
			'-' +
			id.slice(20, 32)
		);
	} else if (response.errorMessage) {
		console.log(response.errorMessage);
		return null;
	}
}

export async function addPlayer(userId: string, mcName: string) {
	const uuid = await getUuid(mcName);
	if (uuid == null) {
		return fail(500, {
			errorMessage: m.whitelist_errorConnection({ locale: 'en' })
		});
	}
	await db
		.insert(usernames)
		.values({
			id: userId,
			mcname: mcName,
			uuid: uuid,
			createdAt: new Date()
		})
		.onConflictDoUpdate({
			target: usernames.id,
			set: { mcname: mcName, uuid: uuid, updatedAt: new Date() }
		});

	console.log('[' + new Date().toISOString() + '] ' + userId + ' updated to ' + mcName);
	return { successMessage: m.whitelist_success({ locale: 'en' }) };
}
