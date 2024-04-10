import 'server-only';

import { Container } from '@/ui/components/templates/Container';
import { TemplateBodyCenter } from '@/ui/components/templates/BodyCenter';
import { Heading } from '@/ui/components/atoms/Heading';
import { Input } from '@/ui/components/atoms/Input';
import { Label } from '@/ui/components/atoms/Label';
import { InputGroup } from '@/ui/components/molecules/InputGroup';
import { Button } from '@/ui/components/atoms/Button';

export default function SignIn() {
	return (
		<Container>
			<TemplateBodyCenter
				header={
					<Heading variant="heading-1" as="h1" weight="medium" className="py-5 text-center">
						Login
					</Heading>
				}
				contentStyles="gap-y-28 max-w-80"
			>
				<div className="flex flex-col gap-y-8">
					<InputGroup>
						<Label>Email</Label>
						<Input placeholder="Type in your email" />
					</InputGroup>
					<InputGroup>
						<Label>Password</Label>
						<Input placeholder="Type in your password" />
					</InputGroup>
				</div>
				<Button size="lg" className="mx-auto w-full max-w-56 justify-center">
					Login
				</Button>
			</TemplateBodyCenter>
		</Container>
	);
}
