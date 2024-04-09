import 'server-only';
import type { Metadata } from 'next';

import { META_TITLE, META_DESCRIPTION } from '@/common/configs/app';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { openSans, roboto } from '@/ui/fonts';
import { LayoutProps } from '@/types/app';
import '@/styles/globals.css';

export const metadata: Metadata = {
	title: META_TITLE,
	description: META_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en" className={`${openSans.variable} ${roboto.variable}`}>
			<body className="font-roboto">
				<TemplateScaffold>{children}</TemplateScaffold>
			</body>
		</html>
	);
}
