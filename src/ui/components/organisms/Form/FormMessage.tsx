import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

import { HelperText } from '@/ui/components/atoms/HelperText';
import { useFormField } from './hooks';
import { getErrorMessage } from '@/utils/getErrorMessage';

const formMessageVariants = tv({
	base: '',
});

type Props = ComponentProps<typeof HelperText>;

export const FormMessage = ({ className, children, ...props }: Props) => {
	const { error, formMessageId } = useFormField();

	const message = error ? getErrorMessage(error) : children;

	if (!message) {
		return null;
	}

	return (
		<HelperText
			variant="error"
			id={formMessageId}
			className={formMessageVariants({ className })}
			{...props}
		>
			{message}
		</HelperText>
	);
};

FormMessage.displayName = 'FormMessage';
