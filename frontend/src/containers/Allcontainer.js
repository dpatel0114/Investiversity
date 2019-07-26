import React, { Component } from 'react';
import {  Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import  NavBar  from './NavBar';
import Login from './Login';
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap';
import DashboardContainer from './DashboardContainer';
import Welcome from '../components/Welcome';
import Profile from './Profile';
import PortfolioHistory from '../components/PortfolioHistory'
// import Popup from '../components/Popup'
class Allcontainer extends Component {
 
//  componentDidMount(){
//   if(localStorage.getItem('token')!==null){
//     this.props.persistData()
//   }
//  }

    constructor(props){  
      super(props);  
      this.state = { showPopup: false };  
      }  
      
      
    render() {
    return (
      <> 
       
        {/* <NavBar />  */}
       
          <Router>
            {/* <NavBar/>  */}
            <Route path='/' component={NavBar}/> 
          
            
            <Switch>

                  {this.props.logged || localStorage.getItem("token") !== null
                  ? 
                   <Route exact path='/dashboard' component={DashboardContainer}/>
                  :
                  // null}
                   <Route exact path='/' component={Welcome} />}
          
                  <Route exact path='/login' component={Login}/> 
                  <Route exact path='/profile' component={Profile}/>

                  {localStorage.getItem('token') !== null ? null :
                   <Route exact path='/signup' component={SignUp}/>    
                    }

                {/* {this.props.logged || localStorage.getItem("token") !== null
                ? */}
                <Route exact path='/acchistory' component={PortfolioHistory}/>
               {/* : null}  */}
 
            </Switch>
            

          </Router>
        

      </>
    )
  }
}

function mapStateToProps(state){

  return state.stock
}
export default connect(mapStateToProps)(Allcontainer)
