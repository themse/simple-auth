import { type NextRequest, NextResponse } from 'next/server';

import { schema } from '@/ui/components/organisms/SignUpForm/schema';
import { AuthResponse, SignUpData } from '@/types/auth';
import { db } from '@/common/mocked-db';
import { User } from '@/types/user';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const parsed = schema.safeParse(data);

	if (parsed.success) {
		const user = db.getUsers().find((item) => item.email === parsed.data.email);
		if (user) {
			return NextResponse.json<AuthResponse<User, SignUpData>>(
				{
					message: 'User already exists',
					error: 'Conflict',
				},
				{ status: 409 },
			);
		}

		const createdUser = parsed.data;
		db.addUser(createdUser);

		// TODO implement Adapter
		const convertedUser: User = { email: createdUser.email };

		return NextResponse.json<AuthResponse<User, SignUpData>>({
			message: 'User created',
			data: convertedUser,
		});
	} else {
		return NextResponse.json<AuthResponse<User, SignUpData>>(
			{
				message: 'Invalid data',
				error: parsed.error,
			},
			{ status: 400 },
		);
	}
}
