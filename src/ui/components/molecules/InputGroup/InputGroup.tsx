import { ComponentPropsWithoutRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const inputGroupVariants = tv({
	slots: {
		wrapper: 'flex flex-col gap-y-2',
		inputGroup: 'flex gap-x-3 gap-y-4',
		errors: 'text-sm text-red-500',
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
	const { wrapper, inputGroup, errors } = inputGroupVariants({ orientation, className });

	return (
		<div className={wrapper()} {...props}>
			<div className={inputGroup()}>{children}</div>
			{!hideError && <div className={errors()}>{errorMessage}</div>}
		</div>
	);
};
