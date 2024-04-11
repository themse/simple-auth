'use server';

import * as ExternalApi from '@/services/api/external-api';
import { schema, FormValues } from './schema';

export const signUpAction = async (values: FormValues) => {
	const parsed = schema.safeParse(values);

	console.log(parsed);

	// TODO temporary solution
	if (parsed.success) {
		const data = await ExternalApi.signUp(parsed.data);
	}
};
