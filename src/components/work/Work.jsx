import { Card, CardBody, CardText, CardTitle, Row, Col } from 'reactstrap'
export default function Work() {
  return (
    <>
    <Row>
      <Col>
    <Card style={{
           height: "400px"
    }}>
      <CardBody>
        <CardTitle>Jobs worked at:</CardTitle>
        <CardText>
        Capital Candy Co.
        </CardText>
        <CardText>
        Price Chopper
        </CardText>
      </CardBody>
    </Card>
    </Col>
    <Col></Col>
    </Row>
    <Row style={{
      height: "10px"
    }}></Row>
    <Row>
      <Col>
      
      </Col>
      <Col><Card style={{
        height: "400px"
      }}>
        <CardBody>
          <CardTitle>Transferable Skills:</CardTitle>
          <CardText>Problem Solving</CardText>
          <CardText>Used to fast pace</CardText>

        </CardBody>
      </Card></Col>
    </Row>
    </>
  )
}
