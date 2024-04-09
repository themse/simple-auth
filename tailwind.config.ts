import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/app/**/*.{ts,tsx,mdx}', './src/ui/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [],
};

export default config;
