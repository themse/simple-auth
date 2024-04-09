import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
	content: ['./src/app/**/*.{ts,tsx,mdx}', './src/ui/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {},
		fontFamily: {
			'open-sans': ['var(--font-open-sans)', ...fontFamily.sans],
			roboto: ['var(--font-roboto)', ...fontFamily.sans],
		},
	},
	plugins: [],
};

export default config;
