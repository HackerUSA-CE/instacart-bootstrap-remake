import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={`${process.env.PUBLIC_URL}/Instacart.png`}
          alt="Instacart"
          width="100"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#login">Login</Nav.Link>
          <Button variant="success" href="#signup">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default CustomNavbar
