import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
	title: 'Basic Auth',
	description: 'Test application',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
