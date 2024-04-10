import { z } from 'zod';

import { schema as signInSchema } from '@/ui/components/organisms/SignInForm/schema';

export const schema = signInSchema
	.extend({
		confirmEmail: z
			.string()
			.email({
				message: 'Invalid email address',
			})
			.trim(),
	})
	.refine((ctx) => ctx.email === ctx.confirmEmail, "Your emails don't match");

export type FormValues = z.infer<typeof schema>;
