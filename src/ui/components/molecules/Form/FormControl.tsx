import { ComponentPropsWithoutRef, forwardRef, ElementRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { useFormField } from './hooks';

type Props = ComponentPropsWithoutRef<typeof Slot>;

export const FormControl = forwardRef<ElementRef<typeof Slot>, Props>(({ ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
			aria-invalid={Boolean(error)}
			{...props}
		/>
	);
});

FormControl.displayName = 'FormControl';
