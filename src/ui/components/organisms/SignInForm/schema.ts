import { z } from 'zod';

export const schema = z.object({
	email: z
		.string()
		.email({
			message: 'Invalid email address',
		})
		.trim()
		.min(5),
	password: z.string().trim().length(6, { message: 'Must be exactly 6 characters long' }),
});

export type FormValues = z.infer<typeof schema>;
