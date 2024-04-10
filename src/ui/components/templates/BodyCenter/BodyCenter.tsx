import { ReactNode, PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const bodyCenterVariants = tv({
	slots: {
		wrapper: 'flex min-h-screen flex-col py-8',
		content: 'mx-auto flex w-full flex-1 flex-col justify-center',
		header: 'mb-auto',
	},
});

type Props = {
	header: ReactNode;
	contentStyles?: string;
};

export const TemplateBodyCenter = ({
	header,
	contentStyles,
	children,
}: Readonly<PropsWithChildren<Props>>) => {
	const variants = bodyCenterVariants();

	return (
		<div className={variants.wrapper()}>
			<header className={variants.header()}>{header}</header>

			<div className={variants.content({ className: contentStyles })}>{children}</div>
		</div>
	);
};
