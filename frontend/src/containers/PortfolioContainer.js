import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Container, Card, CardGroup, CardDeck } from 'react-bootstrap';
// import StockCard from '../components/StockCard';

import PortfolioCard from '../components/PortfolioCard';



class  PortfolioContainer extends Component {



render(){
  const cards = this.props.stock.portfolio ?
    this.props.stock.portfolio.map(s => <PortfolioCard eachStock={s}/> )
     : null
  return (

    // <CardDeck>
    <div>

      {cards}

    </div>


  )
}}

const  mapStateToProps = (state) => {
    return {stock: state.stock }
}


// let connectorFunction = connect(mapStateToProps)
// let connectedPortfolioContainer= connectorFunction(PortfolioContainer)

// export default connectedPortfolioContainer
export default connect(mapStateToProps)(PortfolioContainer)
// export default PortfolioContainer