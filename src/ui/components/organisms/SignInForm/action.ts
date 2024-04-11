'use server';

import * as ExternalApi from '@/services/api/external-api';
import { FormValues } from './schema';

export const signInAction = async (values: FormValues) => {
	// TODO temporary solution
	const data = await ExternalApi.signIn(values);
};
