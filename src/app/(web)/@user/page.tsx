import 'server-only';
import { PageProps } from '@/types/app';

import { auth, signOut } from '@/services/libs/auth';
import { Container } from '@/ui/components/templates/Container';
import { Heading } from '@/ui/components/atoms/Heading';
import { Button } from '@/ui/components/atoms/Button';
import { TemplateBodyCenter } from '@/ui/components/templates/BodyCenter';

export default async function User({}: PageProps) {
	const session = await auth();

	async function handleSignOut() {
		'use server';

		return signOut();
	}

	return (
		<Container>
			<TemplateBodyCenter
				header={
					<Heading variant="heading-1" as="h1" weight="medium" className="py-5 text-center">
						Home
					</Heading>
				}
				contentStyles="gap-y-16"
			>
				<p className="text-center text-xl font-medium">Logged in as {session?.user?.email}</p>

				<form action={handleSignOut}>
					<Button type="submit" size="lg" className="mx-auto w-full max-w-56 justify-center">
						Log out
					</Button>
				</form>
			</TemplateBodyCenter>
		</Container>
	);
}
