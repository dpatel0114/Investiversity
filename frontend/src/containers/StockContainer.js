import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
import { getStocks } from '../actions/stockActions';
import StockCard from '../components/StockCard';

// const API = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo'

class StockContainer extends Component {

  componentDidMount(){ 
    getStocks().then(data => this.props.dispatch({ type: "GET_STOCKS", data: data }))
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

// let connectorFunction = connect(mapStateToProps)
// let connectedPortfolioContainer= connectorFunction(PortfolioContainer)

// export default connectedPortfolioContainer

export default connect(mapStateToProps)(StockContainer)
