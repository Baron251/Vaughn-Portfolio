import {
	Card,
	CardBody,
	CardColumns,
	CardImg,
	CardTitle,
	CardText,
	Container,
	Row,
} from "reactstrap";

export default function AboutMe() {
	return (
		<>
			<Container
				style={{
					display: "flex",
					justifyContent: "center",
					padding: "50px",
				}}
			>
				<CardColumns style={{}}>
					<Card
						style={{
							width: "1000px",
							backgroundColor: "#8499B1",
						}}
					>
						<CardBody
							style={{
								color: "#271F16",
							}}
						>
							<CardTitle tag="h5">How I got here</CardTitle>
							<CardText>
								I was born in Los Gatos California, on the 25th of October in
								the year 2000. However, not long after being born (9 months
								later) my parents and I moved across the country and settled in
								Barre VT, where I would later grow up for the majority of my
								memorable life in Montpelier VT.
							</CardText>
						</CardBody>
					</Card>
					<Row style={{ padding: "10px" }}></Row>
					<Card
						style={{
							width: "1000px",
							backgroundColor: "#8499B1",
						}}
					>
						<CardBody
							style={{
								color: "#271F16",
							}}
						>
							<CardTitle tag="h5">Why I want to be here</CardTitle>
							<CardText>
								I got into programming to understand how the internet works. To
								peer behind the curtain of mystery that is all these wonderful
								websites, big and small. To create tools of my own that I might
								share with my friends, and perhaps the world at large. To
								perhaps even put a smile on someone’s face, as they find a
								comfortable UI that makes sense and is easy to use.
							</CardText>
						</CardBody>
					</Card>
					<Row style={{ padding: "10px" }}></Row>
					<Card
						style={{
							width: "1000px",
						}}
					>
						<CardImg
							alt="Card image cap"
							src="https://distefanolandscaping.com/wp-content/uploads/2020/02/home-hero-scaled.jpg"
							top
							width="100%"
							height="300px"
						/>
					</Card>
				</CardColumns>
			</Container>
		</>
	);
}
