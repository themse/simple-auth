import 'server-only';
import { PageProps } from '@/types/app';

import { Container } from '@/ui/components/templates/Container';
import { Heading } from '@/ui/components/atoms/Heading';

export default function Home({}: PageProps) {
	return (
		<Container>
			<Heading variant="heading-1" as="h1">
				Home page
			</Heading>
		</Container>
	);
}
