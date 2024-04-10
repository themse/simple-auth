import { Input } from '@/ui/components/atoms/Input';
import { Label } from '@/ui/components/atoms/Label';
import { InputGroup } from '@/ui/components/molecules/InputGroup';
import { Button } from '@/ui/components/atoms/Button';

export const SignInForm = () => {
	return (
		<form className="flex flex-col gap-y-28">
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
			<Button type="submit" size="lg" className="mx-auto w-full max-w-56 justify-center">
				Login
			</Button>
		</form>
	);
};
