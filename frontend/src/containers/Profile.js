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


// *** updating profile****
 //! profile 

  updateProfile(e){
      e.preventDefault()
    // console.log(e.target.user.value)
    // fetch('http://localhost:3000/profile/edit', {
    //   method: 'POST', 
    //   body: JSON.stringify({data: 'action to authorize'}),
    //   headers: {
    //     'Access-Token': localStorage.getItem('token'),
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    // .then(data => console.log(data))
  }

//! ----------------------

  render() {
    // console.log("Profile: ", this.props.user.firstname)
    return (
      <Container>

          <Form onSubmit={this.updateProfile}>

                  <Form.Label>First Name:</Form.Label>
                  <Form.Control 
                  onChange={(e) => this.handleChange(console.log(e.target.value))}
                    name="firstname"
                    placeholder='First Name'
                    value={this.props.user ? this.props.user.username : ''}
                    />
                    
                  <Form.Label>Last Name:</Form.Label>

                  <Form.Control
                  onChange={this.handleChange}
                    name="lastname"
                    value={this.props.user.lastname} 
                    />

                

                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                  onChange={this.handleChange}
                    name="username"
                    placeholder="username" 
                    value={this.props.user.username}
                    />



                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                  onChange={this.handleChange}
                    name="password"
                    placeholder="password" />



                  <Form.Label>Email</Form.Label>
                  <Form.Control
                  onChange={this.handleChange}
                    name="email"
                    placeholder="Email" 
                    value={this.props.user.email}
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