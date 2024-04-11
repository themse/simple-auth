import { createContext, forwardRef, useId, HTMLAttributes, useContext } from 'react';
import { tv } from 'tailwind-variants';

const formItemVariants = tv({
	base: 'flex flex-col gap-y-2',
});

type FormItemState = {
	id: string;
};

const FormItemContext = createContext<FormItemState | null>(null);

type Props = HTMLAttributes<HTMLDivElement>;

export const FormItem = forwardRef<HTMLDivElement, Props>(({ className, ...props }, ref) => {
	const id = useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<div ref={ref} className={formItemVariants({ className })} {...props} />
		</FormItemContext.Provider>
	);
});

FormItem.displayName = 'FormItem';

export const useFormItemContext = () => {
	const state = useContext(FormItemContext);

	if (!state) {
		throw new Error('useFormItemContext should be used within <FormItem>');
	}

	return state;
};
