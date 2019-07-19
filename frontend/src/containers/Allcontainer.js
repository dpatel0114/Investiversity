import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import  NavBar  from './NavBar';
import StockContainer from './StockContainer';
import PortfolioContainer  from './PortfolioContainer';
import BalanceContainer from './BalanceContainer';
import Login from './Login';
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Container, Row, Col} from 'react-bootstrap';
class Allcontainer extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      stocks: []
  //   }
  // }
  
  render() {
    console.log(this.props)
    return (
      <div>
       
        <NavBar /> 
        <Container>
          <Router>
          
          
                <Row>

                    {localStorage.getItem('token') === null ? null:<Route exact path='/' render={()=> <StockContainer/>}/> }
                     {localStorage.getItem('token') === null ? null: <Route exact path='/' render={()=><PortfolioContainer />}/>}
                     {localStorage.getItem('token') === null ? null: <Route exact path='/' render={()=> <BalanceContainer /> }/> }
                      <Route exact path='/login' render={() => <Login/>}/> 
                     {localStorage.getItem('token') === null ? null : <Route exact path='/signup' render={() => <SignUp/>}/>    }
                  

                </Row>

        
        </Router> 
        </Container>

      </div>
    )
  }
}

function mapStateToProps(state){

  return state.stock
}
export default connect (mapStateToProps)(Allcontainer)
