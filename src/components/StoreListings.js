import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const StoreListings = () => {
  return (
    <Container className="store-listings">
      <Row className="my-4">
        <Col xs={12} sm={{ span: 2, offset: 1 }}>
          <Image 
            src={`${process.env.PUBLIC_URL}/store1.png`} 
            fluid 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Col>
        <Col xs={12} sm={6}>
          <h5>Becky's Cakes and Bakes</h5>
          <p>Delicious cake and cupcake shop</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} sm={{ span: 2, offset: 1 }}>
          <Image 
            src={`${process.env.PUBLIC_URL}/store2.png`} 
            fluid 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Col>
        <Col xs={12} sm={6}>
          <h5>Python Produce</h5>
          <p>Fresh produce delivered</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={12} sm={{ span: 2, offset: 1 }}>
          <Image 
            src={`${process.env.PUBLIC_URL}/store3.png`} 
            fluid 
            style={{ width: '100%', height: 'auto' }} 
          />
        </Col>
        <Col xs={12} sm={6}>
          <h5>Megan's Meats</h5>
          <p>Quality meats and more</p>
        </Col>
      </Row>
    </Container>
  )
}

export default StoreListings
