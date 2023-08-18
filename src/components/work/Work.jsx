import { Card, CardBody, CardText, CardTitle, Row, Col } from 'reactstrap'
export default function Work() {
  return (
    <>
    <Row>
      <Col>
    <Card style={{
           height: "400px",
    }}>
      <CardBody>
        <CardTitle><b>Previous Roles:</b></CardTitle>
        <CardText>
      <b>Overnight Stocker | Price Chopper</b> <br />The job involved being a trained team member responsible for safety, product placement, and certified Pallet Jack operation. Tasks included arranging products on store shelves per merchandising guidelines, restocking from storage, inspecting and removing damaged items, providing customer assistance, collaborating with colleagues and management for efficient operations, maintaining appealing displays, and reporting suspicious activities.
        </CardText> <br />
        <CardText>

        <b>Warehouse Picker | Capital Candy Co.</b> <br /> This role encompassed inventory management in a grocery store, involving proper placement, retrieval, and display of items. It required accurate selection and verification of items based on order lists or electronic systems, meticulous recording of actions for inventory accuracy, and reporting of discrepancies and damages to supervisors. The job also included inspecting items for defects, replacing damaged products, and ensuring secure packaging for shipping.
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
        height: "400px",
        lineHeight: "17.5px"
      }}>
        <CardBody>
          <CardTitle><b>Transferable Skills:</b></CardTitle><br />
          <CardText>Persistence</CardText>
          <CardText>Adaptability</CardText>
          <CardText>Quality Control</CardText>
          <CardText>Logical Thinking</CardText>
          <CardText>Problem Solving</CardText>
          <CardText>Attention to Detail</CardText>
          <CardText>Analytical Thinking</CardText>
          <CardText>Organizational Skills</CardText>
          <CardText>Continuous Learning</CardText>
          <CardText>Teamwork and Communication</CardText>

        </CardBody>
      </Card></Col>
    </Row>
    </>
  )
}
