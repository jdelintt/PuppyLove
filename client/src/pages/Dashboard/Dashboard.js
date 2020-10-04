import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "../../components/Container";
import { Animated } from "react-animated-css";
import API from "../../utils/API";

function Signup({ setUser }) {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setInfo({ ...info, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // setLogin({ target: { name, value } });
    API.AuthenticateUser(info).then(({ data }) => {
      // localstorage set username and user can have access to it throughotu the pge
      localStorage.setItem("id", JSON.stringify(data._id));
      window.location.replace("/userpage");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    API.CreateNewUser(info).then(({ data }) => {
      // localstorage set username and user can have access to it throughotu the pge
      localStorage.setItem("id", JSON.stringify(data._id));
      window.location.replace("/userpage");
    });
  };

  return (
    <Container style={{ maxWidth: "600px" }}>
      <Animated
        animationIn="wobble"
        animationOut="fadeOut"
        animationInDuration={1000}
        isVisible={true}>
        <h1>Puppy Love</h1>
      </Animated>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="username"
            onChange={handleInput}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={handleInput}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button onClick={handleLogin} variant="primary" type="submit">
          Login
        </Button>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  );
}
export default Signup;
