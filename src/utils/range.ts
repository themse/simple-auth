export const range = (start: number, stop?: number, step: number = 1): number[] => {
	if (stop === undefined) {
		stop = start;
		start = 0;
	}

	const length = Math.ceil((stop - start) / step);
	return Array.from({ length }, (_, i) => start + i * step);
};
