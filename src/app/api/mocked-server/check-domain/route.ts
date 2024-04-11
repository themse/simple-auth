import { type NextRequest, NextResponse } from 'next/server';

import { AuthResponse } from '@/types/auth';
import { schema } from './schema';
import { Data, Payload } from './types';

export async function POST(req: NextRequest) {
	const data = await req.json();
	const parsed = schema.safeParse(data);

	if (parsed.success) {
		return NextResponse.json<AuthResponse<Data, Payload>>({
			data: {
				isAllowed: true,
			},
			message: 'Email domain is allowed',
		});
	} else {
		return NextResponse.json<AuthResponse<Data, Payload>>(
			{
				message: 'Email domain is forbidden',
				error: parsed.error,
			},
			{ status: 400 },
		);
	}
}
