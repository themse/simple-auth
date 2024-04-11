'use server';

import * as ExternalApi from '@/services/api/external-api';
import { FormValues } from './schema';

export const signUpAction = async (values: FormValues) => {
	// TODO temporary solution
	const data = await ExternalApi.signUp(values);
};
