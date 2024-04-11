// * Implemented for demonstration purposes with different approaches
import 'server-only';

import { SignInData, SignUpData, AuthResponse } from '@/types/auth';
import { env } from '@/utils/env';
import { User } from '@/types/user';

const API_BASE_URL = `${env.NEXT_PUBLIC_BASE_URL}/api/mocked-server`;

export const signIn = async (formData: FormData): Promise<AuthResponse<User, SignInData>> => {
	// * Using formdata

	const response = await fetch(`${API_BASE_URL}/sign-in`, {
		method: 'POST',
		body: formData,
	});
	const data = (await response.json()) as AuthResponse<User, SignInData>;

	return { ...data, statusCode: response.status };
};

export const signUp = async (dto: SignUpData) => {
	// * Using JSON body

	const response = await fetch(`${API_BASE_URL}/sign-up`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(dto),
	});

	const data = (await response.json()) as AuthResponse<User, SignUpData>;

	return data;
};

export const checkDomain = async (email: string) => {
	const response = await fetch(`${API_BASE_URL}/check-domain`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email }),
	});

	const data = (await response.json()) as AuthResponse<{ isAllowed: boolean }, { email: string }>;

	return data;
};
