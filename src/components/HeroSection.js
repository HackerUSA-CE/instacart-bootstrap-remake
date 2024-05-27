import React from 'react';
import { Form, Button } from 'react-bootstrap'

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'right',
        padding: '50px 0',
        color: '#fff'
      }}
    >
      <div className="container">
        <h1>Order groceries for delivery or pickup today</h1>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter your address" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Find stores
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default HeroSection
