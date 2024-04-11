import { type NextRequest, NextResponse } from 'next/server';

import { wait } from '@/utils/wait';
import { schema } from '@/ui/components/organisms/SignInForm/schema';
import { AuthResponse, SignInData } from '@/types/auth';
import { User } from '@/types/user';

export async function POST(req: NextRequest) {
	const formData = await req.formData();
	const data = Object.fromEntries(formData);

	const parsed = schema.safeParse(data);

	if (parsed.success) {
		// ! simulate server delay
		await wait(2000);

		// TODO check user
		const user = { email: parsed.data.email };

		return NextResponse.json<AuthResponse<User, SignInData>>({
			message: 'User signed in',
			data: user,
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
