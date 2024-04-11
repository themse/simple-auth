import type { NextRequest } from 'next/server';

import { updateSession } from '@/services/libs/auth';

export async function middleware(request: NextRequest) {
	return await updateSession(request);
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - favicon.ico (favicon file)
		 */
		'/((?!api|_next/static|favicon.ico).*)',
	],
};
