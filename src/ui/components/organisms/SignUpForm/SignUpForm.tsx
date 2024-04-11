'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Input } from '@/ui/components/atoms/Input';
import { Button } from '@/ui/components/atoms/Button';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/ui/components/organisms/Form';
import { schema, FormValues } from './schema';

export const SignUpForm = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
			confirmEmail: '',
		},
	});

	const onSubmit = (data: FormValues) => {
		// TODO implement
		console.log(data);
	};

	return (
		<Form {...form}>
			<form className="flex flex-col gap-y-20" onSubmit={form.handleSubmit(onSubmit)}>
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
						name="confirmEmail"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="mb-1">Re-enter your email</FormLabel>
								<FormControl>
									<Input placeholder="Confirm your email" {...field} />
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
					Sign up
				</Button>
			</form>
		</Form>
	);
};
