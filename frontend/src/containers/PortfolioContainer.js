import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card } from 'react-bootstrap';



const PortfolioContainer =(props) => {
  return (
    <div>
      
      <Container>
      <Card>
        <Card.Body>
        {/* console.log(props.items[0]) */}
          <h5>{}</h5>
          <h6>{}     
            <input type="number" step="1"></input>          
            </h6>
          <button class="btn btn-primary"data-toggle="button"> Sell </button>
         
      {/* //  </div> */}
      {/* // </div> */}
      </Card.Body>
      </Card>
      </Container>
   
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