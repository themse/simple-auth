import { createContext, useContext } from 'react';
import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

type FormFieldState<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

const FormFieldContext = createContext<FormFieldState | null>(null);

export const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

export const useFormFieldContext = () => {
	const state = useContext(FormFieldContext);

	if (!state) {
		throw new Error('useFormField should be used within <FormField>');
	}

	return state;
};
