import type { Meta, StoryObj } from '@storybook/react';

import { HelperText } from './HelperText';

const meta = {
	title: 'UI/Atoms/HelperText',
	component: HelperText,
	parameters: {
		layout: 'centered',
	},
	args: {
		children: 'Helper Text',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof HelperText>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
	args: {
		variant: 'error',
	},
};

export default meta;
