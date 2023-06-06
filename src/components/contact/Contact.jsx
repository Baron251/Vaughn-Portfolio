import {
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	Container,
	Row,
	Col,
} from "reactstrap";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_lgnrq57",
				"template_fv4do0j",
				form.current,
				"3MsqnTRQrY_F20Ve1"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<Container
				style={{
					width: "45em",
					marginTop: "10em",
				}}
			>
				<Form innerRef={form} onSubmit={sendEmail}>
					<FormGroup
						style={{
							width: "20em",
						}}
					>
					<FormGroup>
						<Label>Name</Label>
						<Input type="text" name="user_name" />
					</FormGroup>
						<Label>Your Email</Label>
						<Input type="email" name="user_email" />
					</FormGroup>
					<FormGroup>
						<Label>Message to me:</Label>
						<Input id="exampleText" name="message" type="textarea" />
					</FormGroup>
					<Button type="submit" value="Send">Submit</Button>
				</Form>
			</Container>
		</>
	);
}
