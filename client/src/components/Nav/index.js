import React from "react";
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"


const Navbar = () => {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>

      
    
  );
};


export default Navbar