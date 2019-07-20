import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Container, Card } from 'react-bootstrap';
import  {getStocks, getPortfolio}  from '../actions/stockActions';
import StockCard from '../components/StockCard';

// const API = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'

class StockContainer extends Component {

  componentDidMount(){ 
    this.props.getStocks() 
    this.props.getPortfolio()
  }

  render() {

    // const result = this.props.items.map(s=> <StockCard eachStock={s}/>)
    return (
      <div>
          {this.props.items.map(s=> <StockCard eachStock={s['Global Quote']} key={s.key}/>)}   
      </div>
    )
  }
}

let mapStateToProps = (state) => {
   return state.stock
}

StockContainer.propTypes = {
  getStocks: PropTypes.func.isRequired
}

// let connectorFunction = connect(mapStateToProps)
// let connectedPortfolioContainer= connectorFunction(PortfolioContainer)

// export default connectedPortfolioContainer

export default connect(mapStateToProps,{getStocks, getPortfolio})(StockContainer);
