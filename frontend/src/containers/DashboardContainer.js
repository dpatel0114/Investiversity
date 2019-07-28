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



export class DashboardContainer extends Component {

  
 

  render() {

  //   if (localStorage.token !== null){
  //     this.props.persistData()
  // }

  // console.log(this.props)
 
    return (

    

      <div>

    <div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      Welcome to <strong>Investiversity! </strong>  Learn more about investment Here.
    </div>

        <Row>
          <div class="col col-lg-5"><StockContainer/></div>
          <div class="col"><PortfolioContainer/></div>
         <div class="col"> <BalanceContainer/> </div>
        </Row>
      </div>

    )
  }
}

// const  mapStateToProps = (state) => {
//   return state.stock
// }

export default connect()(DashboardContainer)
// export default connect()(DashboardContainer)