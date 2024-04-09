import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { META_TITLE, META_DESCRIPTION } from '@/common/configs/app';
import { openSans, roboto } from '@/ui/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: META_TITLE,
	description: META_DESCRIPTION,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" className={`${openSans.variable} ${roboto.variable}`}>
			<body className="font-roboto">{children}</body>
		</html>
	);
}
