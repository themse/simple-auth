import 'server-only';

import { TemplateScaffold } from '@/ui/components/templates/Scaffold';
import { LayoutProps } from '@/types/app';

export default function AuthLayout({ children }: LayoutProps) {
	return <TemplateScaffold>{children}</TemplateScaffold>;
}
