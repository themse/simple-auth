import 'server-only';
import Link from 'next/link';

import { Container } from '@/ui/components/templates/Container';
import { TemplateBodyCenter } from '@/ui/components/templates/BodyCenter';
import { Heading } from '@/ui/components/atoms/Heading';
import { SignUpForm } from '@/ui/components/organisms/SignUpForm';
import { Button } from '@/ui/components/atoms/Button';
import { HelperText } from '@/ui/components/atoms/HelperText';

export default function SignUp() {
	return (
		<Container>
			<TemplateBodyCenter
				header={
					<Heading variant="heading-1" as="h1" weight="medium" className="py-5 text-center">
						Sign up
					</Heading>
				}
				contentStyles="max-w-80"
			>
				<SignUpForm />

				<HelperText className="my-8 text-center">
					Have an account?{' '}
					<Button variant="link" asChild className="inline-flex p-0">
						<Link href="/sign-in">Sign In Now</Link>
					</Button>
				</HelperText>
			</TemplateBodyCenter>
		</Container>
	);
}
