'use server';

import * as ExternalApi from '@/services/api/external-api';
import { AuthResponse, SignInData } from '@/types/auth';
import { User } from '@/types/user';
import * as auth from '@/services/libs/auth';

export const signInAction = async (
	_prevState: AuthResponse<User, SignInData>,
	formData: FormData,
) => {
	const response = await ExternalApi.signIn(formData);

	if (!response.error && response.data) {
		await auth.login(response.data);
	}

	return response;
};
