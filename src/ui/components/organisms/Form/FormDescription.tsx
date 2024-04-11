import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

import { HelperText } from '@/ui/components/atoms/HelperText';
import { useFormField } from './hooks';

const formDescriptionVariants = tv({
	base: '',
});

type Props = ComponentProps<typeof HelperText>;

export const FormDescription = ({ className, ...props }: Props) => {
	const { formDescriptionId } = useFormField();

	return (
		<HelperText
			id={formDescriptionId}
			className={formDescriptionVariants({ className })}
			{...props}
		/>
	);
};

FormDescription.displayName = 'FormDescription';
