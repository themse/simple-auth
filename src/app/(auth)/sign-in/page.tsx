import 'server-only';
import Link from 'next/link';

import { Container } from '@/ui/components/templates/Container';
import { TemplateBodyCenter } from '@/ui/components/templates/BodyCenter';
import { Heading } from '@/ui/components/atoms/Heading';
import { SignInForm } from '@/ui/components/organisms/SignInForm';
import { Button } from '@/ui/components/atoms/Button';
import { HelperText } from '@/ui/components/atoms/HelperText';

export default function SignIn() {
	return (
		<Container>
			<TemplateBodyCenter
				header={
					<Heading variant="heading-1" as="h1" weight="medium" className="py-5 text-center">
						Login
					</Heading>
				}
				contentStyles="max-w-80"
			>
				<SignInForm />

				<HelperText className="my-8 text-center">
					Don&apos;t have an account?{' '}
					<Button variant="link" asChild className="inline-flex p-0">
						<Link href="/sign-up">Sign Up Now</Link>
					</Button>
				</HelperText>
			</TemplateBodyCenter>
		</Container>
	);
}
