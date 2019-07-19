import React, { Component } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap'

export class SignUp extends Component {
  render() {
    return (
      <div>
         <Container>
          <Row className="pt-3 pb-5 justify-content-md-center">
            <Col>
              <Form >
              <Form.Group>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    name="firstname"
                    placeholder="First name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    name="lastname"
                    placeholder="Last name" />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    name="username"
                    placeholder="username" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    name="password"
                    placeholder="password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    placeholder="Email" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                  Sign Up 
                </Button>

              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SignUp
