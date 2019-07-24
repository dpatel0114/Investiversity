import React, { Component } from 'react'
import StockContainer from './StockContainer'
import  PortfolioContainer from './PortfolioContainer'
import BalanceContainer from './BalanceContainer';
import { Row } from 'react-bootstrap';
import NavBar from '../containers/NavBar';
import SearchContainer from './SearchContainer'
import { connect } from 'react-redux';
import {persistData} from '../actions/stockActions'



export class DashboardContainer extends Component {

componentDidMount(){
  if(localStorage.getItem('token')!==null){
    this.props.persistData()
  }
}
 

  render() {

  //   if (localStorage.token !== null){
  //     this.props.persistData()
  // }
 
    return (
      <div>
        <div>
          <SearchContainer/>
        </div>
        <Row>

          <StockContainer/>
          <PortfolioContainer/>
          <BalanceContainer/>
        </Row>
      </div>
    )
  }
}

const  mapStateToProps = (state) => {
  return state.stock
}

export default connect(mapStateToProps,{persistData})(DashboardContainer)
// export default connect()(DashboardContainer)