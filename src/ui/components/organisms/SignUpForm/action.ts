'use server';

import * as ExternalApi from '@/services/api/external-api';
import * as auth from '@/services/libs/auth';
import { FormValues } from './schema';

export const signUpAction = async (values: FormValues) => {
	const response = await ExternalApi.signUp(values);

	if (!response.error && response.data) {
		await auth.login(response.data);
	}

	return response;
};

export const checkDomainAction = async (email: string) => {
	const data = await ExternalApi.checkDomain(email);

	return data;
};
