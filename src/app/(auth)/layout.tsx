import 'server-only';
import { redirect } from 'next/navigation';

import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import * as auth from '@/services/libs/auth';
import { LayoutProps } from '@/types/app';

export default async function AuthLayout({ children }: LayoutProps) {
	const session = await auth.getSession();
	const isAuthorized = Boolean(session?.user);

	if (isAuthorized) {
		return redirect('/');
	}

	return <TemplateScaffold>{children}</TemplateScaffold>;
}
