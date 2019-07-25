import React, { Component }from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { searchStock, handleLogout} from '../actions/stockActions'
// import Suggestions from '../components/Suggestions';


class NavBar extends Component{


  constructor(props){
    super(props)
  }
  


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
            this.props.logged || localStorage.getItem("token") !== null ?
           <Button name='logout' onClick={(e)=>this.props.handleLogout(e, this.props.history)} >Logout</Button>  :  null          
          //  onSubmit={(e) => this.prsops.handleLogin(e,this.props.history)}
          }
          </Nav.Item>
         

          {localStorage.token ?
          <Nav.Item>
            <Link to='/profile'>Profile</Link>
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

export default connect(mapStateToProps, {searchStock, handleLogout})(NavBar);

