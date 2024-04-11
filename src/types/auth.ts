import { ZodError } from 'zod';

import type { FormValues as SignInData } from '@/ui/components/organisms/SignInForm/schema';
import type { FormValues as SignUpData } from '@/ui/components/organisms/SignUpForm/schema';

export type AuthResponse<TData, TPayload = SignInData | SignUpData> = {
	message: string;
	data?: TData;
	error?: ZodError<TPayload> | string;
	statusCode?: number;
};

export type { SignInData, SignUpData };
