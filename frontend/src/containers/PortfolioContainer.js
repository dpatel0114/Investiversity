import React, { Component } from 'react';
import { connect } from 'react-redux';


const PortfolioContainer =(props) => {
  return (
    <div>
      {/* {props.items} */}
   
    </div>
  )
}


let mapStateToProps = (state) => ({
  items: state.stock.items
})

// let connectorFunction = connect(mapStateToProps)
// let connectedPortfolioContainer= connectorFunction(PortfolioContainer)

// export default connectedPortfolioContainer

export default connect(mapStateToProps,null)(PortfolioContainer)