import { forwardRef, ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';

const labelVariants = tv({
	base: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
});

type Props = ComponentPropsWithoutRef<'label'>;

export const Label = forwardRef<HTMLLabelElement, Props>(({ className, ...props }, ref) => (
	<label ref={ref} className={labelVariants({ className })} {...props} />
));

Label.displayName = 'Label';
