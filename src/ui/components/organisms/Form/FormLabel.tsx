import { ElementRef, ComponentPropsWithoutRef, forwardRef } from 'react';
import { tv } from 'tailwind-variants';

import { Label } from '@/ui/components/atoms/Label';
import { useFormField } from './hooks';

const formLabelVariants = tv({
	base: '',
	variants: {
		hasErrors: {
			true: 'text-red-500',
		},
	},
});

type Props = ComponentPropsWithoutRef<typeof Label>;

export const FormLabel = forwardRef<ElementRef<'label'>, Props>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField();

	return (
		<Label
			ref={ref}
			className={formLabelVariants({ className, hasErrors: Boolean(error) })}
			htmlFor={formItemId}
			{...props}
		/>
	);
});

FormLabel.displayName = 'FormLabel';
