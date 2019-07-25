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
import Popup from '../components/Popup'
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
      
      //   togglePopup() {  
      // this.setState({  
      //      showPopup: !this.state.showPopup  
      // })
    // console.log(this.props)
    render() {
      // console.log(this.props)
    return (
      <div>
       
        {/* <NavBar />  */}
       
          <Router>
            <NavBar/> 
          
            <Container>
            <Switch>
                  {this.props.logged || localStorage.getItem("token") !== null? 
                   <Route exact path='/dashboard' component={DashboardContainer}/>
                  :
                   <Route exact path='/' component={Welcome} />}
            
           

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
