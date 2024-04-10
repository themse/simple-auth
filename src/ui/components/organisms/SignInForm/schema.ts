import { z } from 'zod';

import { DOMAINS } from '@/common/configs/domains';

export const schema = z.object({
	email: z
		.string()
		.email({
			message: 'Invalid email address',
		})
		.trim()
		.min(5)
		.refine((target) => {
			const [domain] = target.split('@');

			return !DOMAINS.forbidden.includes(domain!);
		}, 'Email domain is forbidden'),
	password: z.string().trim().length(6, { message: 'Must be exactly 6 characters long' }),
});

export type FormValues = z.infer<typeof schema>;
