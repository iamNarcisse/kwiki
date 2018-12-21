import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText, Col } from 'mdbreact';
import InputPage from './manageProduct/inputComponent';
class CardExample extends React.Component {
  render() {
    return (
      <Col>
        <Card className="bg-info" style={{ width: "22rem" }}>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make
              up the bulk of the card&apos;s content.
            </CardText>
            <InputPage />
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default CardExample;