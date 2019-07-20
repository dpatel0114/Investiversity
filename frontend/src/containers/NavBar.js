import React, { Component }from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'


class NavBar extends Component{

  handleLogout=(e)=>{
    // localStorage.removeItem('token')
    localStorage.clear()
    window.history.pushState({url: "/login"},"", "/login")
    this.forceUpdate()
  }
  
  render(){
  return (
    <div>
       <Navbar bg="primary" variant="dark">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
          {
            localStorage.getItem('token')===null ?
            <Button name='login' href="/login" >Login</Button>
            :
            <Button name='logout' onClick={this.handleLogout} >Logout</Button>
            
           
          }
          </Nav.Item>


          {localStorage.getItem('token')===null ?
          <Nav.Item>
                <Button name='signup' href="/signup">Sign Up</Button>
          </Nav.Item>
            :
            null
        }

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}}

export default NavBar

