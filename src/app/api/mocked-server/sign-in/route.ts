import { type NextRequest, NextResponse } from 'next/server';

import { schema } from '@/ui/components/organisms/SignInForm/schema';
import { AuthResponse, SignInData } from '@/types/auth';
import { db } from '@/common/mocked-db';
import { User } from '@/types/user';

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const data = Object.fromEntries(formData);

	const parsed = schema.safeParse(data);

	if (parsed.success) {
		const user = db.getUsers().find((item) => item.email === parsed.data.email);

		if (!user) {
			return NextResponse.json<AuthResponse<User, SignInData>>(
				{
					message: 'User not found',
					error: 'Not found',
				},
				{ status: 404 },
			);
		}

		// ! Demo purpose
		if (user.password !== parsed.data.password) {
			return NextResponse.json<AuthResponse<User, SignInData>>(
				{
					message: 'Invalid credentials',
					error: 'Unauthorized',
				},
				{ status: 401 },
			);
		}

		// TODO implement Adapter
		const convertedUser: User = { email: user.email };

		return NextResponse.json<AuthResponse<User, SignInData>>({
			message: 'User signed in',
			data: convertedUser,
		});
	} else {
		return NextResponse.json<AuthResponse<User, SignInData>>(
			{
				message: 'Invalid data',
				error: parsed.error,
			},
			{ status: 400 },
		);
	}
}
