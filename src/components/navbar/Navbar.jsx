import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";

export default function Navbar() {
	const [title, setTitle] = useState("");
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/aboutme") {
			setTitle("About Me");
		} else if (location.pathname === "/projects") {
			setTitle("Projects");
		} else if (location.pathname === "/interests") {
			setTitle("Interests");
		} else if (location.pathname === "/work") {
			setTitle("Work History");
		} else if (location.pathname === "/contact") {
			setTitle("Contact Me");
		} else if (location.pathname === "/") {
			setTitle("Home");
		}
	}, []);

	return (
		<>
			<Row>
				<Col
					style={{
						marginTop: "5px",
						padding: "0",
					}}
				>
					<h3
						style={{
							color: "#654870",
						}}
					>
						{title}
					</h3>
				</Col>

				<Col>
					<Nav fill justified tabs>
						<NavItem>
							<NavLink href="baron251.github.io/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="baron251.github.io/aboutme">About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="baron251.github.io/projects">Projects</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="baron251.github.io/interests">Interests</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="baron251.github.io/work">Work History</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="baron251.github.io/contact">Contact Me</NavLink>
						</NavItem>
					</Nav>
				</Col>
			</Row>
		</>
	);
}
