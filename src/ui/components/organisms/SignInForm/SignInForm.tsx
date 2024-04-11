'use client';

import { useRef, ElementRef } from 'react';
import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/ui/components/atoms/Button';
import { Input } from '@/ui/components/atoms/Input';
import { HelperText } from '@/ui/components/atoms/HelperText';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/ui/components/molecules/Form';
import { schema, FormValues } from './schema';
import { signInAction } from './action';

export const SignInForm = () => {
	const formRef = useRef<ElementRef<'form'>>(null);
	const [formState, formAction] = useFormState(signInAction, {
		message: '',
	});

	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	return (
		<Form {...form}>
			<form
				action={formAction}
				className="flex flex-col gap-y-28"
				onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
				ref={formRef}
			>
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

			{formState.error && (
				<HelperText className="my-4 text-center" variant="error">
					<b>Server Error: </b>
					{formState.message}
				</HelperText>
			)}
		</Form>
	);
};
