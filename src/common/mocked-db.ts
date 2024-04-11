// ! Implemented for demonstration purposes
import { User } from '@/types/user';
import { range } from '@/utils/helpers/range';

type DbUser = User & {
	password: string;
};

export const db = {
	users: range(0, 9).map(
		(item) => ({ email: `user${item + 1}@example.com`, password: `12345${item}` }) as DbUser,
	),
};
