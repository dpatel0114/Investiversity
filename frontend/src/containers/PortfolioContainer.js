import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap';
// import StockCard from '../components/StockCard';
import {getUserWithId} from '../actions/stockActions'
import PortfolioCard from '../components/PortfolioCard';


class  PortfolioContainer extends Component {

  constructor(props){
    super(props)
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentDidMount(){
        this.props.getUserWithId()
  }

render(){
  return (
    <div>
      {this.props.portfolio.map(s => <PortfolioCard eachStock={s}/> )} 
    </div>
  )
}}

const  mapStateToProps = (state) => {
    return state.stock
}
// let connectorFunction = connect(mapStateToProps)
// let connectedPortfolioContainer= connectorFunction(PortfolioContainer)

// export default connectedPortfolioContainer
export default connect(mapStateToProps,{getUserWithId})(PortfolioContainer)