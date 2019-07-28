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

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Investiversity</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/dashboard">Home <span class="sr-only">(current)</span></a>
            </li>

          {localStorage.token ?
          <li class="nav-item">
            <a class="nav-link" href="/acchistory">History</a>
          </li>:
          null}

          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>

          {localStorage.token ?
          <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
          </li>
          :null}

          {this.props.logged || localStorage.getItem("token") !== null ?
            <li class="nav-item">
          <a class="nav-link" onClick={(e)=>this.props.handleLogout(e, this.props.history)}>Logout</a>
          </li>
          :
          null}
      </ul>

        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        
      </div>
    </nav>
        
  )
}
}

function mapStateToProps(state){
  return state.stock 

}

export default connect(mapStateToProps, {searchStock, handleLogout})(NavBar);

