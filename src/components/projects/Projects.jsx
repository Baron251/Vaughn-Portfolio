import {
	Card,
	CardBody,
	CardTitle,
	CardText,
	CardLink,
	ListGroup,
	ListGroupItem,
} from "reactstrap";

export default function Projects() {
	return (
		<div>
			<Card
				style={{
					width: "18rem",
				}}
			>
				<img alt="Card" src="https://picsum.photos/300/200" />
				<CardBody>
					<CardTitle tag="h5">Git Repos</CardTitle>
					<CardText>Highlights of what I've done so far</CardText>
				</CardBody>
				<ListGroup flush>
					<ListGroupItem>
						<CardLink href="https://github.com/Baron251/DND-Character-Creation" target="_blank">D&D Character Creator</CardLink>
					</ListGroupItem>
					<ListGroupItem>
						<CardLink href="#" target="_blank">An item</CardLink>
					</ListGroupItem>
					<ListGroupItem>
						<CardLink href="#" target="_blank">An item</CardLink>
					</ListGroupItem>
				</ListGroup>
				{/* <CardBody>
					<CardLink href="#">Card Link</CardLink>
					<CardLink href="#">Another Card Link</CardLink>
				</CardBody> */}
			</Card>
		</div>
	);
}
