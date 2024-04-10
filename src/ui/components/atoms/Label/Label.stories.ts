import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta = {
	title: 'UI/Atoms/Label',
	component: Label,
	args: {
		children: 'Label example',
	},
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
