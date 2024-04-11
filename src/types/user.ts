import { User as AuthUser } from 'next-auth';

export type User = AuthUser & {
	email: string;
};
