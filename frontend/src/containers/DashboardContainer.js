import React, { Component } from 'react'
import StockContainer from './StockContainer'
import  PortfolioContainer from './PortfolioContainer'
import BalanceContainer from './BalanceContainer'
import { Row } from 'react-bootstrap';

export class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <Row>
          <StockContainer/>
          <PortfolioContainer/>
          <BalanceContainer/>
        </Row>
      </div>
    )
  }
}

export default DashboardContainer
