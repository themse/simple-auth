import 'server-only';
import { ReactNode } from 'react';

import { getSession } from '@/services/libs/auth';
import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { LayoutProps } from '@/types/app';

type Params = {};
type ParallelRoutes = {
	guest: ReactNode;
	user: ReactNode;
};

export default async function WebLayout({ guest, user }: LayoutProps<Params, ParallelRoutes>) {
	const session = await getSession();
	const isAuthorized = Boolean(session?.user);

	const page = isAuthorized ? user : guest;

	return <TemplateScaffold>{page}</TemplateScaffold>;
}
