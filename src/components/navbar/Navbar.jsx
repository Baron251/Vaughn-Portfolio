import { Nav, NavItem, NavLink, Container, Row, Col } from "reactstrap";

export default function Navbar({title, setTitle}) {
	
	if (title)
	
	
	return (
		<>
			<Row>
				<Col>{}</Col>
				<Col>
					<Nav fill justified tabs>
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/aboutme">About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/projects">Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/interests">Interests</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/work">Work History</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact">Contact Me</NavLink>
						</NavItem>
					</Nav>
				</Col>
			</Row>
		</>
	);
}
