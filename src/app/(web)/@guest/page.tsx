import 'server-only';
import { PageProps } from '@/types/app';
import Link from 'next/link';

import { Container } from '@/ui/components/templates/Container';
import { Heading } from '@/ui/components/atoms/Heading';
import { Button } from '@/ui/components/atoms/Button';
import { TemplateBodyCenter } from '@/ui/components/templates/BodyCenter';

export default function Guest({}: PageProps) {
	return (
		<Container>
			<TemplateBodyCenter
				header={
					<Heading variant="heading-1" as="h1" className="py-5 text-center">
						Welcome
					</Heading>
				}
				contentStyles="max-w-64 gap-y-16"
			>
				<Button size="lg" className="justify-center" asChild>
					<Link href="/sign-in">Sign up</Link>
				</Button>
				<Button size="lg" className="justify-center" asChild>
					<Link href="/sign-up">Login in</Link>
				</Button>
			</TemplateBodyCenter>
		</Container>
	);
}
