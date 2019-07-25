import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
// import { mapStateToProps } from '../components/PortfolioCard';
import { connect } from 'react-redux';

// let user = '';
 
export class Profile extends Component {


  // componentDidMount(){
  //   fetch(`http://localhost:3000/users/${localStorage.uid}`)
  //   .then(res => res.json())
  //   .then(data => 
  //       // console.log(data)
  //      {} )
  // }

constructor(props){
  super(props)
  this.state = {
    editUser: {

    }
   }
}

  handleChange = (e) => {
    this.setState({
      editUser: {...this.state.editUser, [e.target.name]: e.target.value}
      // [e.target.name]: e.target.value
    })
  }

// *** updating profile****
 //! profile 

  updateProfile(e){
      e.preventDefault()
      let newUser = {
        firstname: e.target.firstname.value,
        lastename: e.target.lastname.value,
        password: e.target.password.value,
        email: e.target.email.value,
        username: e.target.username.value
      }


    // console.log(e.target.firstname.value)

    fetch(`http://localhost:3000/users/${localStorage.getItem('uid')}`, { 
      method: 'PATCH', 
      body: JSON.stringify({user: newUser}),
      headers: {
        'Access-Token': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => console.log(data))
  }



  render() {
    // console.log("Profile: ", this.props.user.firstname)
    return (
      <Container>

          <Form onSubmit={this.updateProfile}>

                  <Form.Label>First Name:</Form.Label>
                  <Form.Control 
                  onChange={(e) => this.handleChange}
                    name="firstname"
                    placeholder='Firstname'
                    defaultValue={this.props.user.firstname}
                    />
                    
                  <Form.Label>Last Name:</Form.Label>

                  <Form.Control
                   onChange={(e) => this.handleChange}
                  // onChange={this.handleChange}
                    name="lastname"
                    placeholder='Lastname'
                    defaultValue={this.props.user.lastname} 
                    />

                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                  // onChange={this.handleChange}
                  onChange={(e) => this.handleChange}
                    name="username"
                    placeholder="username" 
                    defaultValue={this.props.user.username}
                    />



                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                  onChange={(e) => this.handleChange}
                  // onChange={this.handleChange}
                    name="password"
                    placeholder="password" />



                  <Form.Label>Email</Form.Label>
                  <Form.Control
                  onChange={(e) => this.handleChange}
                  // onChange={this.handleChange}
                    name="email"
                    placeholder="Email" 
                    defaultValue={this.props.user.email}
                    />


                <Button variant="primary" type="submit" >
                  Update Profile
                </Button>

              </Form>           
            
            {/* <button onClick={this.handleEditClick} class="ui primary button">Edit Profile</button> */}

      </Container>
    )
  }
}


const mapStateToProps = (state) => {

  return { user: state.stock.user }
}
export default withRouter(connect(mapStateToProps)(Profile));