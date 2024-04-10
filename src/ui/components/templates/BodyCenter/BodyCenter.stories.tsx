import type { Meta, StoryObj } from '@storybook/react';

import { TemplateBodyCenter } from './BodyCenter';

const meta = {
	title: 'UI/Templates/TemplateBodyCenter',
	component: TemplateBodyCenter,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		header: <div className="bg-blue-400/75 py-5 text-center uppercase">Header</div>,
	},
} satisfies Meta<typeof TemplateBodyCenter>;

type Story = StoryObj<typeof meta>;

const mockedContent = (
	<p className="bg-green-500">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vero doloribus aliquam. Illo
		natus dolorum labore voluptates, laudantium tenetur voluptatibus incidunt, nostrum quae et
		quisquam aliquid dolor obcaecati, ipsam molestias!
	</p>
);
const mockedBigContent = Array.from(new Array(3)).map(() => mockedContent);

export const Default: Story = {
	args: {
		children: mockedBigContent,
		contentStyles: 'w-1/3 gap-y-4 bg-green-200',
	},
};

export default meta;
