import { z } from 'zod';

import { DOMAINS } from '@/common/configs/domains';

export const schema = z.object({
	email: z
		.string()
		.email()
		.trim()
		.refine(
			(target) => {
				const domain = target.split('@')[1];

				return !DOMAINS.forbidden.includes(domain!);
			},
			{
				message: 'Email domain is forbidden',
			},
		),
});
