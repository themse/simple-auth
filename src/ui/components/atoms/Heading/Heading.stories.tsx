import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
	title: 'UI/Atoms/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => (
	<div className="flex flex-col gap-3">
		<Heading {...args} weight="bold" />
		<Heading {...args} weight="medium" />
		<Heading {...args} weight="regular" />
	</div>
);

export const Heading1: Story = {
	args: {
		variant: 'heading-1',
		children: 'Heading 1',
	},
	render: Template,
};

export const Heading2: Story = {
	args: {
		variant: 'heading-2',
		children: 'Heading 2',
	},
	render: Template,
};

export const Heading3: Story = {
	args: {
		variant: 'heading-3',
		children: 'Heading 3',
	},
	render: Template,
};

export const Heading4: Story = {
	args: {
		variant: 'heading-4',
		children: 'Heading 4',
	},
	render: Template,
};

export const Heading5: Story = {
	args: {
		variant: 'heading-5',
		children: 'Heading 5',
	},
	render: Template,
};

export const Heading6: Story = {
	args: {
		variant: 'heading-6',
		children: 'Heading 6',
	},
	render: Template,
};
