import type { Preview } from '@storybook/react';

import '@/styles/globals.css';
import { withFontLoaded } from './decorators';

const preview: Preview = {
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
				boolean: /^(has|is|can)[A-Z].*$/,
			},
		},
		layout: 'centered',
		options: {
			storySort: {
				order: ['UI', ['Atoms', 'Molecules', 'Organisms', 'Templates'], '*', 'WIP'],
			},
		},
	},
	decorators: [withFontLoaded],
};

export default preview;
