'use server';

import * as ExternalApi from '@/services/api/external-api';
import { AuthResponse, SignInData } from '@/types/auth';
import { User } from '@/types/user';

export const signInAction = async (
	_prevState: AuthResponse<User, SignInData>,
	formData: FormData,
) => {
	// TODO temporary solution
	const data = await ExternalApi.signIn(formData);

	return data;
};
