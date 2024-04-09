import { PropsWithChildren, HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Slot } from '@radix-ui/react-slot';

const headingVariants = tv({
	base: 'block',
	variants: {
		variant: {
			'heading-1': 'text-4xl',
			'heading-2': 'text-3xl',
			'heading-3': 'text-2xl',
			'heading-4': 'text-xl',
			'heading-5': 'text-base',
			'heading-6': 'text-sm',
		},
		weight: {
			regular: 'font-normal',
			medium: 'font-medium',
			bold: 'font-bold',
		},
	},
	defaultVariants: {
		variant: 'heading-1',
		weight: 'regular',
	},
});

type Props = {
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	asChild?: boolean;
} & HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> &
	VariantProps<typeof headingVariants>;

export const Heading = ({
	className,
	variant,
	weight,
	children,
	as,
	asChild,
	...props
}: PropsWithChildren<Props>) => {
	const DynamicTag = as ?? 'p';
	const Comp = asChild ? Slot : DynamicTag;

	return (
		<Comp className={headingVariants({ variant, weight, className })} {...props}>
			{children}
		</Comp>
	);
};

Heading.displayName = 'Heading';
