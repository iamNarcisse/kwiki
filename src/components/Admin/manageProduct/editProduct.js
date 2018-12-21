import React from 'react';
import { Button, Card, CardBody, CardTitle, Col } from 'mdbreact';
import InputPage from './inputComponent';
const data = {
    firstInput : 'Name of Product',
    secondInput : 'Product Image ',
    thirdInput : 'Price',
    fourthInput: 'Old price if any',
    fifthInput: 'Vendor',
    sixthInput: 'Product Details'
}
class EditProduct extends React.Component {
  render() {
    return (
      <Col>
        <Card className="bg-info" style={{ width: "22rem" }}>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <InputPage {...data} />
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default EditProduct;