import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import StockContainer from './StockContainer'
import  PortfolioContainer from './PortfolioContainer'
import BalanceContainer from './BalanceContainer';
import { Row, Col } from 'react-bootstrap';
// import NavBar from '../containers/NavBar';
// import SearchContainer from './SearchContainer'
import { connect } from 'react-redux';
// import {persistData} from '../actions/stockActions'
import {Spring} from 'react-spring/renderprops'




export class DashboardContainer extends Component {

  
 

  render() {

  //   if (localStorage.token !== null){
  //     this.props.persistData()port
  // }

  // console.log(this.props)
 
    return (

    <>

      <div class="alert alert-dismissible alert-success">
        {/* <button type="button" class="close" data-dismiss="alert">&times;</button> */}
        Hi! {this.props.firstname}, Welcome to <strong>Investiversity! </strong>  Learn more about investment Here.
      </div>
      
      
      <div class='row' style={{margin: '5px'}}>
        <div class="border col col-lg-4" style={{"margin-right":"2%"}}> <h3 class="card-header text-center" style={{"margin":"3%", }}> Stocks </h3><StockContainer/></div>

        <div class="border col " style={{"margin-right":"2%"}}> <h3 class="card-header text-center" style={{"margin":"3%"}}> Portfolio </h3><PortfolioContainer/></div>
        <div class="border col text-center">
          
        <Spring
            from={{transform:'scale(0)'}}
            to={{transform:'scale(1)'}}
            >
              {props =>  <div  style={props}> <h3 class="card-header text-center" style={{"margin":"3%"}}> Account </h3><BalanceContainer/></div>}
        </Spring>
          
          
          </div>
      </div>
    
    </>

    )
  }
}

const  mapStateToProps = (state) => {
  return state.stock
}

export default connect(mapStateToProps)(DashboardContainer)
// export default connect()(DashboardContainer)