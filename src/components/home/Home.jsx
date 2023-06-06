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
import portfolioPhoto from "../../assets/portfolio-photo.jpg";

export default function Home() {
	
	return (
		<>
			<Row>
				<Col>
					<Card
						style={{
							width: 720,
							marginLeft: 60,
							marginTop: 30,
							backgroundColor: "black",
						}}
					>
						<CardImg
							alt="Vaughn Winter in his natural habitat"
							src={portfolioPhoto}
							style={{
								height: "800px",
								
							}}
						/>
					</Card>
				</Col>
				{/* </Row>

			<Row> */}
				<Col></Col>

				<Col>
					<Row
						style={{
							height: "275px",
						}}
					></Row>
					<Card
						style={{
							justifyContent: "right",
							width: "885.13px",
							marginRight: "50px",
							marginTop: "50px",
							backgroundColor: "#8499B1"
						}}
					>
						<CardBody>
							<CardTitle tag="h5" style={{
								color: "#271F16"
							}}>Hi there!</CardTitle>
							<CardText
								style={{
									lineHeight: "2.5",
									color: "#271F16",
									paddingBottom: "20px"
								}}
							>
								My name is Vaughn Hildebrand Winter, and I am a developer looking to see what I am capable of in this field. I am looking to start off as a full-stack developer, and eventually transition to becoming a video game developer.
							</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
}
