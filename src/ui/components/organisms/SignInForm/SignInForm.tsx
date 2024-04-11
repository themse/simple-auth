'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/ui/components/atoms/Button';
import { Input } from '@/ui/components/atoms/Input';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/ui/components/molecules/Form';
import { schema, FormValues } from './schema';

export const SignInForm = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (data: FormValues) => {
		// TODO implement
		console.log(data);
	};

	return (
		<Form {...form}>
			<form className="flex flex-col gap-y-28" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-y-8">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="mb-1">Email</FormLabel>
								<FormControl>
									<Input placeholder="Type in your email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="mb-1">Password</FormLabel>
								<FormControl>
									<Input placeholder="Type in your password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit" size="lg" className="mx-auto w-full max-w-56 justify-center">
					Login
				</Button>
			</form>
		</Form>
	);
};
