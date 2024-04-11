import { type NextRequest, NextResponse } from 'next/server';

import { wait } from '@/utils/wait';
import { schema } from '@/ui/components/organisms/SignUpForm/schema';
import { AuthResponse, SignUpData } from '@/types/auth';
import { User } from '@/types/user';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const parsed = schema.safeParse(data);

	if (parsed.success) {
		// ! simulate server delay
		await wait(2000);

		// TODO check if user exist, if not create
		const createdUser = { email: parsed.data.email };

		return NextResponse.json<AuthResponse<User, SignUpData>>({
			message: 'User created',
			data: createdUser,
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
