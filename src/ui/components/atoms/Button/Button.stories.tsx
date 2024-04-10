import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
	title: 'UI/Atoms/Button',
	component: Button,
	args: {
		onClick: fn(),
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => (
	<div className="flex flex-col gap-3">
		<Button {...args}>Size: Default</Button>
		<Button {...args} size="lg">
			Size: Lg
		</Button>
	</div>
);

export const Default: Story = {
	render: Template,
};

export const Disabled: Story = {
	render: Template,
	args: {
		disabled: true,
	},
};

export default meta;
