import 'server-only';
import { ReactNode } from 'react';

import { auth } from '@/services/libs/auth';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { LayoutProps } from '@/types/app';

type Params = {};
type ParallelRoutes = {
	guest: ReactNode;
	user: ReactNode;
};

export default async function WebLayout({ guest, user }: LayoutProps<Params, ParallelRoutes>) {
	const session = await auth();
	const isAuthorized = Boolean(session?.user);

	const page = isAuthorized ? user : guest;

	return <TemplateScaffold>{page}</TemplateScaffold>;
}
