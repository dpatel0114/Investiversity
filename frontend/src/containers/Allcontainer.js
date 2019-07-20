import React, { Component } from 'react';
import { withRouter, Switch, Route} from 'react-router-dom';
import  NavBar  from './NavBar';
import Login from './Login';
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
import DashboardContainer from './DashboardContainer';
// import history from '../actions/history'
class Allcontainer extends Component {
 
  render() {
    // console.log(this.props)
    return (
      <div>
       
        <NavBar /> 
        <Container>
          {/* <Router history={history}> */}
              <Row>
                <Switch>
                <Route exact path='/login' component={Login}/> 
                  <Route exact path='/' component={DashboardContainer}/>
                  {localStorage.getItem('token') !== null ? null : <Route exact path='/signup' component={SignUp}/>    }

                  </Switch>
              </Row>     
          {/* </Router> */}
        </Container>

      </div>
    )
  }
}

function mapStateToProps(state){

  return state.stock
}
export default withRouter(connect(mapStateToProps)(Allcontainer))
