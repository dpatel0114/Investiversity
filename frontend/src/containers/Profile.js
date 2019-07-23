import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

let user = '';
 
export class Profile extends Component {


  componentDidMount(){
    fetch(`http://localhost:3000/users/${localStorage.uid}`)
    .then(res => res.json())
    .then(data => 
        console.log(data))
  }

  render() {

    return (
      <Container>

          <Form onSubmit={this.updateProfile}>

                  <Form.Label>First Name:</Form.Label>
                  <Form.Control 
                  // onChange={this.handleChange}
                    name="firstname"
                    placeholder={user.firstname} />
            
                  <Form.Label>Last Name:</Form.Label>

                  <Form.Control
                  // onChange={this.handleChange}
                    name="lastname"
                    placeholder="Last name" />

                

                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="username"
                    placeholder="username" />



                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="password"
                    placeholder="password" />



                  <Form.Label>Email</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                    name="email"
                    placeholder="Email" />


                <Button variant="primary" type="submit" >
                  Update Profile
                </Button>

              </Form>           
            
            {/* <button onClick={this.handleEditClick} class="ui primary button">Edit Profile</button> */}

      </Container>
    )
  }
}

export default Profile;