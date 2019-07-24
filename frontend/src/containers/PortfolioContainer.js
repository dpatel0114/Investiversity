import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, CardGroup, CardDeck } from 'react-bootstrap';
// import StockCard from '../components/StockCard';

import PortfolioCard from '../components/PortfolioCard';



class  PortfolioContainer extends Component {



render(){
  const cards = this.props.portfolio ?
    this.props.portfolio.map(s => <PortfolioCard eachStock={s}/> )
     : null
  return (

    // <CardDeck>
    <div>

      {cards}

    </div>


  )
}}

const  mapStateToProps = (state) => {
    return state.stock
}
// let connectorFunction = connect(mapStateToProps)
// let connectedPortfolioContainer= connectorFunction(PortfolioContainer)

// export default connectedPortfolioContainer
export default connect(mapStateToProps)(PortfolioContainer)
// export default PortfolioContainer