import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
	Container,
	Row,
	Col,
} from "reactstrap";
import mushknife2 from "../../assets/mush-knife2.png";

export default function Home() {
	return (
		<>
			<div style={{ display: "flex", justifyContent: "left" }}>
				<Container>
					<Card
						// className="my-2"
						style={{
							width: 720,
							marginLeft: 60,
							marginTop: 50,
						}}
					>
						<CardImg
							alt="Friend"
							src={mushknife2}
							style={{
								width: 720,
							}}
						/>
					</Card>

					<Card>
						<CardBody>
							<CardTitle tag="h5">Card Title</CardTitle>
							<CardText>
								This is a wider card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</CardText>
							<CardText>
								<small className="text-muted">Last updated 3 mins ago</small>
							</CardText>
						</CardBody>
					</Card>
				</Container>
			</div>
		</>
	);
}
