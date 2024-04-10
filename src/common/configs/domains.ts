import { range } from '@/utils/range';

export const DOMAINS = {
	forbidden: range(1, 10).map((item) => `domain${item}.com`),
};
