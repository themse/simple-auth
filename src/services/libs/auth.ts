import NextAuth, { type NextAuthConfig } from 'next-auth';

const authConfig = {
	providers: [],
	pages: {
		signIn: '/sign-in',
		newUser: '/sign-up',
	},
} satisfies NextAuthConfig;

export const { handlers: authHandlers, signIn, signOut, auth } = NextAuth(authConfig);
