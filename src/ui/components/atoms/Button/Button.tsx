import { ButtonHTMLAttributes, forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { Slot } from '@radix-ui/react-slot';

const buttonVariants = tv({
	base: 'flex items-center whitespace-nowrap rounded-md text-sm font-medium shadow-md shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700/80 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'bg-blue-500 text-white',
		},
		size: {
			default: 'px-4 py-2',
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
});

type Props = {
	asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';

		return <Comp className={buttonVariants({ variant, size, className })} {...props} />;
	},
);

Button.displayName = 'Button';
