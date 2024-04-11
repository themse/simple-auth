// * Implemented for demonstration purposes with different approaches

import { SignInData, SignUpData, AuthResponse } from '@/types/auth';
import { User } from '@/types/user';

const API_BASE_URL = '/api/mocked-server';

export const signIn = async ({ email, password }: SignInData) => {
	// * Using formdata

	const formData = new FormData();
	formData.append('email', email);
	formData.append('password', password);

	const response = await fetch(`${API_BASE_URL}/sign-in-form`, {
		method: 'POST',
		body: formData,
	});

	const data = (await response.json()) as AuthResponse<User, SignInData>;

	return data;
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
