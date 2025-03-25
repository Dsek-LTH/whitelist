import type { Session } from '@auth/sveltekit';
import * as dotenv from 'dotenv';

dotenv.config();

export function checkAdmin(session: Session | null) {
	if (session == null) {
		return false;
	}
	const adminGroups: string[] = process.env.ADMIN_GROUPS?.split(' ') as string[];
	let userGroups = session?.user.group_list as string[];
	userGroups = userGroups.map((s) => s.replace('/', ''));

	if (adminGroups && adminGroups.some((g) => userGroups.includes(g))) {
		return true;
	}
	return false;
}
