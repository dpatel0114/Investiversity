import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, Link } from 'react-bootstrap';
import { connect } from 'react-redux';


class Login extends Component {

  // constructor(props){

  //   super(props)
  //   this.state ={

  //     user: { 
  //       username: '',
  //       password: '', 
  //       firstname: '',
  //       lastname: ''},
  //       errors: ''
  //       }
  //   }
  handleChange = (e) => {
    e.target.name =='username'?
    this.props.dispatch(
      { type: 'CHANGE_USER', 'username': e.target.value}
    ) 
    : 
     this.props.dispatch(
      { type: 'CHANGE_PASS', 'password': e.target.value}
    )
  }



 handleLogin=(e)=>{
    e.preventDefault()
  
    let userObject = {username: this.props.user.username, 
                      password: this.props.user.password}
      
      console.log(userObject)
      console.log('state',this.props)

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify(userObject)
    })
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      if(data.errors){
        console.log("incorrect password")
        this.props.dispatch({
          type: 'LOGIN_ERROR',
          error: data.errors
        })
        // this.setState({errors: data.errors}, ()=> console.log('errors', this.state.errors))
      }
      else {
        // this.setState({...this.state, logged: true})
        this.props.dispatch({
          type: 'LOGIN_SUCCESS',
          logged: true
        })
        localStorage.setItem('token', data.token)
        window.history.pushState({url: "/"},"", "/")
        this.forceUpdate()
      }
    })
    e.target.parentElement.reset()
  }

   
  
  render() {
    console.log(this.props)
    return (
      <div>
        <Container>
          <Row className="pt-3 pb-5 justify-content-md-center">
            <Col>
              <Form >
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    name="username"  
                    placeholder="username"
                    onChange={this.handleChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    onChange={this.handleChange}
                    name="password"
                    placeholder="password" />
                </Form.Group>

                <Button onClick={this.handleLogin} variant="primary" type="submit" >
                  Login
                </Button>

              </Form>
            </Col>
          </Row>
        </Container>
      
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return state.stock

}
export default connect(mapStateToProps)(Login)

