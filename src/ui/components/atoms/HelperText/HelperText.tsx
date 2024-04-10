import { PropsWithChildren } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const helperTextVariants = tv({
	base: 'text-sm',
	variants: {
		variant: {
			default: 'text-gray-400',
			error: 'text-red-500',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

type Props = PropsWithChildren<{
	className?: string;
}> &
	VariantProps<typeof helperTextVariants>;

export const HelperText = ({ children, className, variant }: Props) => {
	return <p className={helperTextVariants({ className, variant })}>{children}</p>;
};
