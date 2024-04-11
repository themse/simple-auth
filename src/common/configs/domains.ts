import { range } from '@/utils/helpers/range';

export const DOMAINS = {
	forbidden: range(1, 10).map((item) => `domain${item}.com`),
};
