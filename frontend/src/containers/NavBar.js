import React, { Component }from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { searchStock } from '../actions/stockActions'
import Suggestions from '../components/Suggestions';


class NavBar extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  handleLogout=(e)=>{
    console.log(this.props)
    // localStorage.removeItem('token')
    localStorage.clear()
    this.props.history.push('/login') 
  }
  
  suggestions=() => { return <li>First suggestions </li>}

  render(){
  return (
    <div>
       <Navbar bg="dark" variant="dark">
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item>
          {
            localStorage.token ?
           <Nav.Link name='logout' onClick={this.handleLogout} >Logout</Nav.Link>  :  null          
           
          }
          </Nav.Item>
         

          {localStorage.token ?
          <Nav.Item>
                <Nav.Link name='profile' href="/profile" >Profile</Nav.Link>
          </Nav.Item>
            :
            null
        }

        </Nav>
        <Form inline onSubmit={this.props.searchStock}>
          <FormControl name="search" type="text" placeholder="Search" className="mr-sm-2" />

          <Button variant="outline-light" type="submit">Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}}

function mapStateToProps(state){
  return state.stock 

}

export default connect(mapStateToProps, {searchStock})(NavBar);

