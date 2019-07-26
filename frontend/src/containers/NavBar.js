import React, { Component }from 'react';
import { Nav, Navbar, Form, FormControl, Button, MDBIcon } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { searchStock, handleLogout} from '../actions/stockActions';
// import { GoSearch } from 'react-icons/lib/go/search';

// import Suggestions from '../components/Suggestions';


class NavBar extends Component{

  constructor(props){
    super(props)
  }

  render(){
  return (
        
    <div >
       <Navbar bg="dark" variant="light">

          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          {/* <Nav.Link href='/acchistory'> History</Nav.Link> */}

         
          {localStorage.token ?
            <Nav.Item style={{margin:"10px"}}>
              {/* <Button> */}
              <Link class="button" color= "black" to='/acchistory'>History</Link>
              {/* </Button> */}
            </Nav.Item>
              :
              null
          } 


          {localStorage.token ?
            <Nav.Item style={{margin:"20px"}}>
              {/* <Button> */}
              {/* <a class="waves-effect waves-teal btn-flat" href='/profile'>Profile</a> */}
              <Link class="button" color= "black"to='/profile'>Profile</Link>
              {/* </Button> */}
            </Nav.Item>
              :
              null
          }


        <Nav className="ml-auto">
          <Nav.Item>
          {
            this.props.logged || localStorage.getItem("token") !== null ?
           <Button style={{margin: '10px'}}name='logout' onClick={(e)=>this.props.handleLogout(e, this.props.history)}>Logout</Button>  :  null          
          //  onSubmit={(e) => this.prsops.handleLogin(e,this.props.history)}
          }
          
          </Nav.Item>
        </Nav>

        <Form className="mr-sm-2" inline onSubmit={this.props.searchStock}>
          <FormControl name="search" type="text" placeholder="Search" className="mr-sm-2" style={{width:"150px"}}/>       
          <Button variant="outline-light" type="submit"> Search </Button>
          {/* <svg  id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <circle cx="14" cy="14" r="12" />
              <path d="M23 23 L30 30"  />
          </svg> */}
        </Form>


      </Navbar>
    </div>
  )
}}

function mapStateToProps(state){
  return state.stock 

}

export default connect(mapStateToProps, {searchStock, handleLogout})(NavBar);

