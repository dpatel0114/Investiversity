import React, { Component } from 'react';
import { withRouter, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import  NavBar  from './NavBar';
import Login from './Login';
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
import DashboardContainer from './DashboardContainer';
import Welcome from '../components/Welcome';
import Profile from './Profile';
// import history from '../actions/history'
class Allcontainer extends Component {
 
  render() {
    // console.log(this.props)
    return (
      <div>
       
        {/* <NavBar />  */}
       
          <Router>
            <Route path='/' component={NavBar}/> 
          
            <Container>
            <Switch>
                  {this.props.logged || localStorage.getItem("token") !== null? 
                   <Route exact path='/' component={DashboardContainer}/>
                  :
                   <Route exact path='/'><Welcome/></Route>}
            
           

                  <Route exact path='/login' component={Login}/> 
                  <Route exact path='/profile' component={Profile}/>

                  {localStorage.getItem('token') !== null ? null :
                   <Route exact path='/signup' component={SignUp}/>    }
                  
 
            </Switch>
            </Container>

          </Router>
        

      </div>
    )
  }
}

function mapStateToProps(state){

  return state.stock
}
export default connect(mapStateToProps)(Allcontainer)
