import { z } from 'zod';
import { m } from '../../paraglide/messages';

export const usernamesSchema = z
	.string()
	.trim()
	.regex(new RegExp('^[a-zA-Z0-9_]*$'), { message: m.whitelist_errorAlphanumeric() })
	.max(16, { message: m.whitelist_errorLength() });

export const stilIdSchema = z
	.string()
	.trim()
	.regex(new RegExp('^[A-Za-z0-9]{6,10}(-s)?$'), { message: m.whitelist_errorStil() });
