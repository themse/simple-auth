import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

import { env } from '@/utils/env';
import { User } from '@/types/user';

const SECRET_KEY = new TextEncoder().encode(env.AUTH_SECRET);
const CURRENT_ALGORITHM = 'HS256';
const EXPIRATION_TIME = 2 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds = 2h

export async function encrypt(payload: { user: User; expires: Date }) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: CURRENT_ALGORITHM })
		.setIssuedAt()
		.setExpirationTime('2h')
		.sign(SECRET_KEY);
}

export async function decrypt(input: string): Promise<any> {
	const { payload } = await jwtVerify(input, SECRET_KEY, {
		algorithms: [CURRENT_ALGORITHM],
	});
	return payload;
}

export async function login(user: User) {
	// Create the session
	const expires = new Date(Date.now() + EXPIRATION_TIME);
	const session = await encrypt({ user, expires });

	// Save the session in a cookie
	cookies().set('session', session, { expires, httpOnly: true });
}

export async function logout() {
	// Destroy the session
	cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
	const session = cookies().get('session')?.value;
	if (!session) return null;

	return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
	const session = request.cookies.get('session')?.value;
	if (!session) return;

	// Refresh the session so it doesn't expire
	const parsed = await decrypt(session);
	parsed.expires = new Date(Date.now() + EXPIRATION_TIME);
	const res = NextResponse.next();

	res.cookies.set({
		name: 'session',
		value: await encrypt(parsed),
		httpOnly: true,
		expires: parsed.expires,
	});

	return res;
}
