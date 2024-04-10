import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '@/ui/components/atoms/Label';
import { Input } from '@/ui/components/atoms/Input';
import { InputGroup } from './InputGroup';

const meta = {
	title: 'UI/Molecules/InputGroup',
	component: InputGroup,
	tags: ['autodocs'],
	args: {
		errorMessage: 'Required',
	},
} satisfies Meta<typeof InputGroup>;

type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => (
	<InputGroup {...args}>
		<Label>Email</Label>
		<Input placeholder="Enter your email" />
	</InputGroup>
);

export const Default: Story = {
	render: Template,
};

export const Inline: Story = {
	args: {
		orientation: 'inline',
	},
	render: Template,
};

export default meta;
