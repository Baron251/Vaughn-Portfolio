import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardLink,
	CardColumns,
	CardImg,
	ListGroup,
	ListGroupItem,
	Container,
	Row,
} from "reactstrap";

export default function Projects() {
	return (
		<>
			<Container
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Row
					style={{
						height: "400px",
						marginTop: "150px",
					}}
				>
					<Card
						style={{
							width: "276.5px",
							padding: "0",
						}}
					>
						<CardBody>
							<CardTitle tag="h5">Git Repos</CardTitle>
							<CardText>Highlights of what I've done so far</CardText>
							<CardImg
								alt="Card image cap"
								src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
								top
								width="100%"
							/>
						</CardBody>
						<ListGroup
							flush
							style={{
								width: "275px",
							}}
						>
							<ListGroupItem
								style={{
									backgroundColor: "#654870",
								}}
							>
								<CardLink
									href="https://github.com/burlingtoncodeacademy-students/independent-capstone-Baron251"
									target="_blank"
								>
									D&D Character Creator
								</CardLink>
							</ListGroupItem>
							<ListGroupItem
								style={{
									backgroundColor: "#654870",
								}}
							>
								<CardLink href="https://github.com/burlingtoncodeacademy-students/zorkington-Baron251-1" target="_blank">
									Zorkington
								</CardLink>
							</ListGroupItem>
							<ListGroupItem
								style={{
									backgroundColor: "#654870",
								}}
							>
								<CardLink href="https://github.com/burlingtoncodeacademy-students/react-chat-mathew-vaughn" target="_blank">
									React Chat
								</CardLink>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Row>

				<Row
					style={{
						padding: "100px",
					}}
				></Row>

				<Row
					style={{
						height: "400px",
						marginTop: "50px",
					}}
				>
					<CardColumns
						style={{
							width: "18rem",
						}}
					>
						<Card style={{
							marginBottom: "50px"
						}}>
							<CardImg
								alt="Card image cap"
								src="https://i.etsystatic.com/22360457/r/il/447352/2199635638/il_570xN.2199635638_svz8.jpg"
								top
								width="100%"
							/>
							</Card>
							<Card style={{
								marginBottom: "50px"
							}}>
							<CardImg
								alt="Card image cap"
								src="https://i.ytimg.com/vi/azgZBEHxcHQ/maxresdefault.jpg"
								top
								width="100%"
							/>
							</Card>
							<Card style={{
								// marginBottom: "75px"
							}}>
							<CardImg
								alt="Card image cap"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
								top
								width="100%"
							/>
						</Card>
					</CardColumns>
				</Row>
			</Container>
		</>
	);
}
