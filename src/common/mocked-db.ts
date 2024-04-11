// ! Implemented for demonstration purposes
import { User } from '@/types/user';
import { range } from '@/utils/helpers/range';

type DbUser = User & {
	password: string;
};

class MockedDb {
	private static instance: MockedDb;
	private users: DbUser[];

	private constructor() {
		this.users = range(0, 9).map(
			(item) => ({ email: `user${item + 1}@example.com`, password: `12345${item}` }) as DbUser,
		);
	}

	public static getInstance(): MockedDb {
		if (!MockedDb.instance) {
			MockedDb.instance = new MockedDb();
		}
		return MockedDb.instance;
	}

	public getUsers(): DbUser[] {
		return this.users;
	}

	public addUser(newUser: DbUser): void {
		this.users.push(newUser);
	}
}

export const db = MockedDb.getInstance();
