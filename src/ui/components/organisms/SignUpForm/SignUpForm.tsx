'use client';

import { useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';

import { Input } from '@/ui/components/atoms/Input';
import { Button } from '@/ui/components/atoms/Button';
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
import { checkDomainAction, signUpAction } from './action';

export const SignUpForm = () => {
	const form = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: '',
			password: '',
			confirmEmail: '',
		},
	});
	const {
		formState: { errors },
	} = form;

	const onSubmit = async (data: FormValues) => {
		const response = await signUpAction(data);

		if (response.error) {
			form.setError('root.serverError', {
				type: '400',
				message: response.message,
			});
		}
	};

	const validateEmailDomain = useCallback(
		debounce((email) => {
			checkDomainAction(email).then((response) => {
				if (response.error) {
					form.setError('email', {
						type: 'custom',
						message: 'Email domain is forbidden',
					});
				}
			});
		}, 2000),
		[],
	);

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
									<Input
										{...field}
										placeholder="Type in your email"
										onChange={(event) => {
											form.resetField(field.name);

											validateEmailDomain(event.target.value);
											field.onChange(event);
										}}
									/>
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
									<Input type="password" placeholder="Type in your password" {...field} />
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
			{errors.root?.['serverError'] && (
				<HelperText className="my-4 text-center" variant="error">
					<b>Server Error: </b>
					{errors.root?.['serverError'].message}
				</HelperText>
			)}
		</Form>
	);
};
