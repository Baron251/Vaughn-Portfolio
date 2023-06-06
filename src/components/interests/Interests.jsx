import {
	Col,
	Row,
	Card,
	CardBody,
	CardTitle,
	CardText,
	Container,
} from "reactstrap";

export default function Interests() {
	return (
		<>
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					maxWidth: "1920px",
				}}
			>
				<Row
					style={{
						// justifyContent: "right",
						marginLeft: "700px",
					}}
				>
					<img
						src="https://i.redd.it/a36lsna13ub31.jpg"
						alt="lorem"
						style={{
							width: "500px",
							height: "200px",
							marginTop: "40px",
						}}
					/>
					<Card
						style={{
							width: "500px",
							marginTop: "40px",
							height: "200px",
							backgroundColor: "#8499B1",
							color: "#271F16",
						}}
					>
						<CardBody>
							<CardTitle tag="h5">Video Games</CardTitle>
							<CardText>
								I love video games. More often than not I love the community and
								camaraderie that comes with playing with your friends. The good
								times, be they win or loss, the shenanigans and ridiculous
								phrases that escape our lips in the heat of the moment. I live
								for it.
							</CardText>
						</CardBody>
					</Card>
				</Row>
				<Row
					style={{
						justifyContent: "left",
						marginLeft: "200px",
					}}
				>
					<Card
						style={{
							width: "500px",
							marginTop: "30px",
							height: "300px",
							backgroundColor: "#8499B1",
							color: "#271F16",
						}}
					>
						<CardBody>
							<CardTitle tag="h5">Metalworking</CardTitle>
							<CardText>
								A hobby I don’t get to indulge in as much as I would like. As
								dangerous as it can be without proper tools, the projects I work
								on tend to be smaller, like the pictured fork, or restoring a
								tool such as an ax or sickle. I love seeing a rusty neglected
								hunk of metal become a shiny, sleek and well loved tool.
							</CardText>
						</CardBody>
					</Card>
					<img
						src="https://cdn.discordapp.com/attachments/876205192461316118/979455168280166520/20220524_171657.jpg"
						alt="lorem"
						style={{
							width: "500px",
							height: "300px",
							marginTop: "30px",
						}}
					/>
				</Row>
				<Row
					style={{
						marginLeft: "700px",
					}}
				>
					<img
						src="https://cdn.discordapp.com/attachments/412084933834833933/1115476400116338718/catDnD.jpg"
						alt="lorem"
						style={{
							width: "500px",
							height: "200px",
							marginTop: "50px",
						}}
					/>
					<Card
						style={{
							width: "500px",
							marginTop: "50px",
							height: "200px",
							backgroundColor: "#8499B1",
							color: "#271F16",
						}}
					>
						<CardBody>
							<CardTitle tag="h5">Dungeons and Dragons</CardTitle>
							<CardText>
								Or any TTRPG(Table Top Role Playing Game). From Pathfinder, to
								GURPS, to Supers, I love it all. While I tend to lean towards
								the fantasy side of things, futuristic TTRPGs have their place
								in my heart.
							</CardText>
						</CardBody>
					</Card>
				</Row>
			</Container>
		</>
	);
}
