import 'server-only';
import { ReactNode } from 'react';

import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { LayoutProps } from '@/types/app';

type Params = {};
type ParallelRoutes = {
	guest: ReactNode;
	user: ReactNode;
};

export default function WebLayout({ guest, user }: LayoutProps<Params, ParallelRoutes>) {
	const isLoggedIn = true; // TODO implement
	const page = isLoggedIn ? user : guest;

	return <TemplateScaffold>{page}</TemplateScaffold>;
}
