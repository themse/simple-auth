'use server';

import { redirect } from 'next/navigation';

import * as ExternalApi from '@/services/api/external-api';
import { AuthResponse, SignInData } from '@/types/auth';
import { User } from '@/types/user';
import * as auth from '@/services/libs/auth';
import { schema } from './schema';

export const signInAction = async (
	_prevState: AuthResponse<User, SignInData>,
	formData: FormData,
): Promise<AuthResponse<User, SignInData>> => {
	const data = Object.fromEntries(formData);
	const parsed = schema.safeParse(data);

	if (parsed.success) {
		const response = await ExternalApi.signIn(formData);

		if (response.error && response.statusCode === 404) {
			redirect('/sign-up');
		}

		if (!response.error && response.data) {
			await auth.login(response.data);
		}

		redirect('/');
	}

	return {
		message: 'Invalid data',
		error: 'Server Error',
		statusCode: 400,
	};
};
