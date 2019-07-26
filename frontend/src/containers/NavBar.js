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
        //   <nav>
        //   <div class="nav-wrapper">
        //     <a href="#!" class="brand-logo">Logo</a>
        //     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        //     <ul class="right hide-on-med-and-down">
        //       <li><a href="sass.html">Sass</a></li>
        //       <li><a href="badges.html">Components</a></li>
        //       <li><a href="collapsible.html">Javascript</a></li>
        //       <li><a href="mobile.html">Mobile</a></li>
        //     </ul>
        //   </div>
        // </nav>

        // <ul class="sidenav" id="mobile-demo">
        //   <li><a href="sass.html">Sass</a></li>
        //   <li><a href="badges.html">Components</a></li>
        //   <li><a href="collapsible.html">Javascript</a></li>
        //   <li><a href="mobile.html">Mobile</a></li>
        // </ul>
    <div>
       <Navbar bg="dark" variant="light">
        {/* <Navbar.Brand href="#home">LOGO</Navbar.Brand> */}
        {/* <Nav className="mr-auto"> */}
         

          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href='/acchistory'> History</Nav.Link>
        {/* </Nav> */}

        {/* <a class="waves-effect waves-teal btn-flat" href='/profile'>Profile</a> */}


          {localStorage.token ?
            <Nav.Item>
              <Button>
              <Link class="button" color= "black"to='/profile'>Profile</Link>
              </Button>
            </Nav.Item>
              :
              null
          }
        
        <Nav className="ml-auto">
          <Nav.Item>
          {
            this.props.logged || localStorage.getItem("token") !== null ?
           <Button style={{margin: '10px'}}name='logout' onClick={(e)=>this.props.handleLogout(e, this.props.history)} >Logout</Button>  :  null          
          //  onSubmit={(e) => this.prsops.handleLogin(e,this.props.history)}
          }
          </Nav.Item>
        </Nav>


        <Form inline onSubmit={this.props.searchStock}>
          <FormControl name="search" type="text" placeholder="Search" className="mr-sm-2" style={{width:"150px"}}/>

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

