import { InputHTMLAttributes, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

const inputVariants = tv({
	base: 'w-full rounded-md border-none bg-gray-300/50 p-4 text-sm font-medium shadow-sm shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/80 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
});

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(({ className, type, ...props }, ref) => {
	return <input type={type} className={inputVariants({ className })} ref={ref} {...props} />;
});

Input.displayName = 'Input';
