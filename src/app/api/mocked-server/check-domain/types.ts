import { z } from 'zod';

import { schema } from './schema';

export type Data = { isAllowed: boolean };
export type Payload = z.infer<typeof schema>;
