import React from "react";
import {Form, Button} from "react-bootstrap"
import Container from "../../components/Container"

function Signup(){
  return (
<Container style={{ maxWidth:"600px"}}>
  <h1>Puppy Love</h1>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Button variant="primary" type="submit">
    Sign up
  </Button>
</Form>
</Container>
  )
}
export default Signup;