import React, { Component } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect, withRouter } from "react-router-dom";



class SignUp extends Component {

    state = {

    }
  // constructor(){
  //   super()
  //   this.state={
  //     user:{username:'',
  //           password:'',
  //           firstname:'',
  //           lastname:'',
  //           email: ''},
  //           errors:'',
  //           signUpForm: false
  //   }
  // }

  handleChange=(e)=> {
    this.setState({user: {...this.state.user, [e.target.name]: e.target.value}})
  }


  // handleChange =(e) => {
  //   console.log(e.target.name)
  //   e.target.name === 'username'?
  //   this.props.dispatch({
  //     type: 'SIGN_FIRSTNAME', 'firstname':e.target.firstname
  //   })
  //   : 
  //   this.props.dispatch({
  //     type: 'SIGN_LASTNAME', 'lastname': e.target.lastname
  //   })

  // }


  handleSignUp=(e)=>{
    
    e.preventDefault()
    // console.log(e.target.firstname.value)

    let newUserObject ={
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
   
    fetch('http://localhost:3000/users',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
      body:JSON.stringify({ user: newUserObject})
      })
      .then(res=> res.json())
      .then(data => {
        console.log(data)
        if (data.errors) {
          alert("Sorry, your username or password is incorrect.")
          this.setState({ errors: data.message }, () => console.log("errors", this.state.errors))
        }
        else {
          this.setState({ user: data.user, signUpForm: false, redirect: <Redirect to='/login' /> })
          localStorage.setItem('token', data.token)
          this.props.history.push('/login')
          this.forceUpdate()
        }
      })
  }


  render() {
    return (
      <div>
         <Container>
          <Row className="pt-3 pb-5 justify-content-md-center">
            <Col>
              <Form onSubmit={this.handleSignUp}>
              <Form.Group>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="firstname"
                    placeholder="First name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="lastname"
                    placeholder="Last name" />
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="username"
                    placeholder="username" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="password"
                    placeholder="password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
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

// const mapStateToProps =(state)=> {
//   return state.stock

// }

// export default connect(mapStateToProps)(SignUp)
export default withRouter(SignUp)
