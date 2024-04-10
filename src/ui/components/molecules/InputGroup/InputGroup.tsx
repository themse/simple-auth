import { ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { HelperText } from '@/ui/components/atoms/HelperText';

const inputGroupVariants = tv({
	slots: {
		wrapper: 'flex flex-col gap-y-2',
		inputGroup: 'flex gap-x-3 gap-y-4',
		errors: '',
	},
	variants: {
		orientation: {
			inline: {
				inputGroup: 'flex-row items-center',
				errors: 'text-right',
			},
			horizontal: {
				inputGroup: 'flex-col',
			},
		},
	},
	defaultVariants: {
		orientation: 'horizontal',
	},
});

type Props = ComponentPropsWithoutRef<'div'> &
	VariantProps<typeof inputGroupVariants> & {
		errorMessage?: string;
		hideError?: boolean;
	};

export const InputGroup = ({
	orientation,
	children,
	className,
	errorMessage,
	hideError = false,
	...props
}: Props) => {
	const variants = inputGroupVariants({ orientation, className });

	return (
		<div className={variants.wrapper()} {...props}>
			<div className={variants.inputGroup()}>{children}</div>

			{!hideError && (
				<HelperText variant="error" className={variants.errors()}>
					{errorMessage}
				</HelperText>
			)}
		</div>
	);
};
