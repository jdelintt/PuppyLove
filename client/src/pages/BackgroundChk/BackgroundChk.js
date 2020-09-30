import React from "react";
import {Form, Button} from "react-bootstrap"
import Container from "../../components/Container"

function BackgroundChk(){
  return (
<Container style={{ maxWidth:"600px"}}>
  <h1>Puppy Love</h1>
  <p>Puppies are a lot of responsibility! Before we dive in to all the puppies that need lovin' in your area, please give us your first and last legal name so we may do a cursory background check. We will never sell, appropriate, or abuse your information.</p>
<Form>
  <Form.Group controlId="formFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="firstName" placeholder="First Name" />
  </Form.Group>

  <Form.Group controlId="formLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="lastName" placeholder="Last Name" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
  )
}
export default BackgroundChk;