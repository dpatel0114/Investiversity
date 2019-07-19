import React, { Component } from 'react';
import { withRouter, Switch, Route} from 'react-router-dom';
import  NavBar  from './NavBar';
import StockContainer from './StockContainer';
import PortfolioContainer  from './PortfolioContainer';
import BalanceContainer from './BalanceContainer';
import Login from './Login';
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
class Allcontainer extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      stocks: []
  //   }
  // } 
  render() {
    // console.log(this.props)
    return (
      <div>
       
        <NavBar /> 
        <Container>
              <Row>
                <Switch>
                <Route path='/login' component={Login}/> 
                {/* {localStorage.getItem('token') === null ? null:<Route  path='/' render={()=> <StockContainer/>}/> }
                  {localStorage.getItem('token') === null ? null: <Route path='/' render={()=><PortfolioContainer />}/>}
                  {localStorage.getItem('token') === null ? null: <Route path='/' render={()=> <BalanceContainer /> }/> } */}
                  {/* <Switch> */}
                  {localStorage.getItem('token') !== null ? null : <Route exact path='/signup' render={() => <SignUp/>}/>    }
                  {/* </Switch>  */}
                  </Switch>
              </Row>        
        </Container>

      </div>
    )
  }
}

function mapStateToProps(state){

  return state.stock
}
export default withRouter(connect(mapStateToProps)(Allcontainer))
