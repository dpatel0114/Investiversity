import React, { Component } from 'react';
import  NavBar  from './NavBar';
import StockContainer from './StockContainer';
import PortfolioContainer  from './PortfolioContainer';
import BalanceContainer from './BalanceContainer'
class Allcontainer extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      stocks: []
  //   }
  // }
  
  render() {
    return (
      <div>
        <NavBar /> 
        <StockContainer/>
        <BalanceContainer />
        <PortfolioContainer /> 


      </div>
    )
  }
}

export default Allcontainer;
