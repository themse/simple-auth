import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/ui/components/atoms/Button';
import { Input } from '@/ui/components/atoms/Input';
import {
	Form,
	FormField,
	FormLabel,
	FormItem,
	FormControl,
	FormDescription,
	FormMessage,
} from './index';

const meta = {
	title: 'UI/Organisms/Form',
	tags: ['autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof meta>;

const Template: Story['render'] = () => {
	const onSubmit = fn();

	const schema = z.object({
		username: z.string().min(2, {
			message: 'Username must be at least 2 characters.',
		}),
	});

	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			username: '',
		},
	});

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="mb-1">Username</FormLabel>
							<FormControl>
								<Input placeholder="Enter your username..." {...field} />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export const Default: Story = {
	render: Template,
};

export default meta;
